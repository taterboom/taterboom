import Link from "next/link"

export const Language = ({ path, type }: { path: string; type: "zh" | "en" }) => {
  const href = type === "en" ? path : `${path}-zh`
  const text = type === "en" ? "English Version" : "中文 Chinese Version"
  return (
    <blockquote className="text-sm">
      <Link href={href}>{text}</Link>
    </blockquote>
  )
}

export default Language
