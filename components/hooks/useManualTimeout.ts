import { useCallback, useEffect, useRef } from "react"

export const useManualTimeout = (fn: () => void, ms: number) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  const fnRef = useRef(fn)
  const msRef = useRef(ms)

  useEffect(() => {
    fnRef.current = fn
    msRef.current = ms
  })

  useEffect(() => {
    return () => {
      timerRef.current && clearTimeout(timerRef.current)
    }
  }, [])

  const start = useCallback(() => {
    timerRef.current && clearTimeout(timerRef.current)
    timerRef.current = setTimeout(fnRef.current, msRef.current)
  }, [])

  return start
}
