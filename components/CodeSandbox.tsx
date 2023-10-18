export default function CodeSandbox(props: { src: string; title?: string }) {
  return (
    <iframe
      src={props.src}
      style={{ width: "100%", height: 500, border: 0, borderRadius: 4, overflow: "hidden" }}
      title={props.title}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  )
}
