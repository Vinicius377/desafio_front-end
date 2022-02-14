import { useEffect, useState } from "react"

export default function useEnsureInput() {
  const [filledCamps, setFilledCamps] = useState({})
  const [isDone, setIsDone] = useState(false)

  const updateCamps = (done, name) => {
    setFilledCamps(prev => {
      return { ...prev, [name]: done }
    })
  }
  useEffect(() => {
    setIsDone(Object.values(filledCamps).every(field => field))
  }, [filledCamps])

  return [isDone, updateCamps]
}
