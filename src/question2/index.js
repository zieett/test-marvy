import React, { useEffect, useState } from "react";
import "./question2.css";
const Question2 = ({ nOfSquares }) => {
    const [num, setNum] = useState(0);
    const [squares, setSquares] = useState(6);
    const handleOnClick = () => {
        setSquares(num);
    };
    return (
        <>
            <label htmlFor="numberOfSquares">Enter number of squares: </label>
            <input
                onChange={(e) => setNum(e.target.value)}
                value={num}
                name="numberOfSquares"
            ></input>
            <button onClick={handleOnClick}>Enter</button>
            <div className="grid-container">
                {Array.from({ length: squares }, (_, i) => (
                    <div key={i} className="grid-item"></div>
                ))}
            </div>
        </>
    );
};

export default Question2;
