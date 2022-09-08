type BlockQuoteProps = {
  children?: React.ReactNode
  source: [string, string]
}

const BlockQuote = (props: BlockQuoteProps) => {
  return (
    <blockquote className="xblockquote">
      {props.children} -- <a href={props.source[1]}>{props.source[0]}</a>
      <style global jsx>{`
        .xblockquote > * {
          display: inline;
        }
      `}</style>
    </blockquote>
  )
}

export default BlockQuote
