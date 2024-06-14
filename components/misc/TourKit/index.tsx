"use client"

import { useEffect, useRef, useState } from "react"

export default function TourKit() {
  const [isTouring, setIsTouring] = useState(false)
  const rectRef = useRef<DOMRect>()
  useEffect(() => {
    if (isTouring) {
      document.body.style.pointerEvents = "none"
      document.getElementById("tourkit-button")!.style.pointerEvents = "auto"
    } else {
      document.body.style.pointerEvents = ""
      document.getElementById("tourkit-button")!.style.pointerEvents = ""
    }
  }, [isTouring])
  return (
    <div className="p-8 border rounded-2xl">
      <div id="tourkit-button" className="inline-flex items-center mr-2">
        <input
          id="tourkit-checkbox"
          type="checkbox"
          className="inline-block rounded mx-2 cursor-pointer outline-none focus:outline-0 bg-button hover:bg-button/30 active:bg-button/60"
          onChange={(e) => {
            const rect = e.currentTarget.parentElement!.getBoundingClientRect()
            rectRef.current = rect
            setIsTouring(!isTouring)
          }}
        ></input>
        <label htmlFor="tourkit-checkbox">start tour</label>
      </div>
      <input className="border focus:outline" placeholder="then type here"></input>
      {isTouring && (
        <div className="fixed">
          <div className="fixed inset-0 pointer-events-none"></div>
          <div
            style={{
              pointerEvents: "none",
              position: "fixed",
              top: rectRef.current?.top,
              left: rectRef.current?.left,
              width: rectRef.current?.width,
              height: rectRef.current?.height,
              outline: "9999px solid rgba(0, 0, 0, 0.5)",
            }}
          ></div>
          <div
            style={{
              position: "fixed",
              top: rectRef.current!.top - 80,
              left: rectRef.current?.left,
              width: 250,
              background: "white",
            }}
          >
            outside button can not be clicked, but the button inside the tour can be clicked
          </div>
        </div>
      )}
    </div>
  )
}
