import { Client } from "@notionhq/client"
import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

async function mailer(title: string, body: string) {
  const transporter = nodemailer.createTransport({
    service: "163",
    auth: {
      user: process.env.SENDER,
      pass: process.env.SENDER_PASS,
    },
  })

  await transporter.sendMail({
    from: `"Daily-Trading" <${process.env.SENDER}>`, // sender address
    to: process.env.RECEIVER, // list of receivers
    subject: title, // Subject line
    html: body,
  })
}

const notion = new Client({ auth: process.env.NOTION_KEY })

export async function findItems(): Promise<any[]> {
  const databaseId = process.env.NOTION_DATABASE_ID!
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: "code",
            title: {
              is_not_empty: true,
            },
          },
        ],
      },
    })
    const databaseItems = response.results
    const databaseItemsChildren = await Promise.all(
      databaseItems.map(async (item) => {
        const response = await notion.blocks.children.list({ block_id: item.id })
        return response.results
      })
    )
    return databaseItems.map((item, index) => ({ ...item, children: databaseItemsChildren[index] }))
  } catch (error: any) {
    throw error.body
  }
}

function generateBody(notionResults: any[]) {
  const body = notionResults
    .map((item) => {
      const { properties, children } = item
      const databaseItemProperties = {
        code: properties.code.title[0].plain_text,
        level: properties.level.select.name,
        strategy: properties.strategy.select.name,
        options: (properties.options.rich_text[0]?.plain_text || "")
          .split(",")
          .map((item: string) => Number(item)),
        extra: properties.extra?.rich_text?.[0]?.plain_text,
      }
      const childrenBody = children
        .map((child: any) => {
          const { type } = child
          if (type === "paragraph") {
            return `<p>${child.paragraph.rich_text
              .map((textItem: any) => textItem.plain_text)
              .join("\n")}</p>`
          }
          if (type === "image") {
            return `<img src="${child.image.file.url}" style="max-width:100%;" width="800" />`
          }
          return ""
        })
        .join("")
      return `<div>
        <div>${JSON.stringify(databaseItemProperties)}</div>
        <div>${childrenBody}</div>
      </div>`
    })
    .join("<div> ------ </div>")
  return `<div>${body}</div>`
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await findItems()
  // const blockId = "8f9b222df52047eba9c6a411a9493678"
  // const data1 = await notion.comments.list({
  //   block_id: blockId,
  // })
  // const data2 = await notion.blocks.retrieve({
  //   block_id: blockId,
  // })
  // const data3 = await notion.blocks.children.list({
  //   block_id: blockId,
  // })
  console.log(data)
  try {
    const title = "Daily Trading"
    const body = generateBody(data)
    await mailer(title, body)
  } catch (err) {
    console.log(err)
  }
  res.status(200).json({ data, html: generateBody(data) })
}
