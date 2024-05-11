function Item(props: { index: number }) {
  return (
    <div className="flex justify-center items-center bg-brand/30 border">item {props.index}</div>
  )
}

export default function Grid() {
  return (
    <div
      style={{
        resize: "both",
        overflow: "scroll",
        display: "grid",
        justifyContent: "space-between",
        gridTemplateColumns: `repeat(auto-fill, minmax(100px, 1fr))`,
        gap: 6,
        padding: 6,
        border: "1px solid",
      }}
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <Item key={index} index={index} />
      ))}
    </div>
  )
}
