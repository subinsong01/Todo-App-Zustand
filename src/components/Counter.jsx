import React from 'react'
import { useCounterStore } from '../store'

function Counter() {
  const { count, increment, reset } = useCounterStore();
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>더하기</button>
      <button onClick={reset}>초기화</button>
    </div>
  )
}

export default Counter
