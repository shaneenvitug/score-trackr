import { useState } from 'react'

const Counter = () => {
    const [score, setScore] = useState(0);

    // const incrementScore = () => {
    //     setScore(score + 1)
    // }

    // const decrementScore = () => {
    //     setScore(score - 1)
    // }

    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => setScore(score - 1)}> - </button>
        <span className="counter-score">{ score }</span>
        <button className="counter-action increment" onClick={() => setScore(score + 1)}> + </button>
      </div>
    )
}

export default Counter;