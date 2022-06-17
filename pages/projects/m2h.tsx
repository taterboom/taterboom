import { NextPage } from "next"
import { useEffect, useState } from "react"

// ![alt](path/to/image)
const MARKDOWN_REGEXP_IMAGE = /!\[(\S*)\]\((\S+)\)/

const M2H = () => {
  const [inputText, setInputText] = useState("")
  const [width, setWidth] = useState<string>()
  const [resultText, setResultText] = useState("")

  useEffect(() => {
    const res = MARKDOWN_REGEXP_IMAGE.exec(inputText)
    if (res) {
      const htmlText = `<img src="${res[2]}" alt="${res[1]}" ${
        width !== undefined ? `width="${width}"` : ""
      }/>`
      setResultText(htmlText)
    }
  }, [inputText, width])

  return (
    <div>
      <div>
        <label htmlFor="inputText">
          markdown
          <input
            type="text"
            name="inputText"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="width">
          width
          <input
            type="number"
            name="width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="resultText">
          html
          <input type="text" name="resultText" value={resultText} readOnly />
        </label>
      </div>
    </div>
  )
}

const M2HPage: NextPage = () => {
  return <M2H></M2H>
}

export default M2HPage
