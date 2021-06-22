// import { useState } from 'react'

const Counter = (props) => {
    // const [score, setScore] = useState(0);

    // const incrementScore = () => {
    //     setScore(score + 1)
    // }

    // const decrementScore = () => {
    //     setScore(score - 1)
    // }

    let index = props.index;
    let score = props.score;

    return (
      <div className="counter">
        {/* <button className="counter-action decrement" onClick={() => setScore(score - 1)}> - </button> */}
        <button className="counter-action decrement" onClick={() => props.changeScore(score, index, -1)}> - </button>
        <span className="counter-score">{ props.score }</span>
        {/* <button className="counter-action increment" onClick={() => setScore(score + 1)}> + </button> */}
        <button className="counter-action increment" onClick={() => props.changeScore(score, index, 1)}> + </button>
      </div>
    )
}

export default Counter;