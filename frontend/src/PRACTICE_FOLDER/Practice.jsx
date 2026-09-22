import { useState } from "react"

export function Practice() {
    const [counterNum, setCounterNum] = useState(0)

  return (
    <div>
      <button onClick={()=>setCounterNum(counterNum-1)} data-testid="decrement-button">-</button>
      <button onClick={()=>setCounterNum(counterNum+1)} data-testid="increment-button">+</button>
      <p>clicked: {counterNum}</p>
    </div>
  )
}