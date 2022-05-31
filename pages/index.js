import { useEffect, useState } from "react"

export default function Home() {
  const [number, setNumber] = useState(0)

  const getRandomNumber = () => {
    const n = Math.random()
    const random_number = Math.floor(88 * n + 1)
    setNumber(random_number)
  }
  
  return (
    <div id="container">
      <div id="number">{number}</div>
      <div>
        <button id="generate" onClick={getRandomNumber}>Oluştur</button>
      </div>
    </div>
  )
}