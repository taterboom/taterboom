import { useCallback, useEffect, useRef } from "react"

export const useManualTimeout = (fn: () => void, ms: number) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const fnRef = useRef(fn)
  fnRef.current = fn
  const msRef = useRef(ms)
  msRef.current = ms

  useEffect(() => {
    timerRef.current && clearTimeout(timerRef.current)
  }, [])

  const start = useCallback(() => {
    timerRef.current && clearTimeout(timerRef.current)
    timerRef.current = setTimeout(fnRef.current, msRef.current)
  }, [])

  return start
}
