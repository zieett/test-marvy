import React, { useState, useRef } from "react";
import { Container, SmallCircle, myOrbit } from "./question1.styled";
let currentX;
let currentY;
let initialX;
let initialY;
const Question1 = () => {
    const [value, setValue] = useState({ num: 0, gap: 0 });
    const [active, setActive] = useState(true);
    const [num, setNum] = useState(0);
    const [gap, setGap] = useState(0);

    const handleOnClick = () => {
        setValue({ num: num, gap: gap });
        setNum("");
        setGap("");
        setActive(false);
    };
    const handleReset = () => {
        setValue({ num: 0, gap: 0 });
        setActive(true);
    };
    const circleComponent = useRef([]);

    const handleOnMouseDown = (index, e) => {
        initialX = e.clientX;
        initialY = e.clientY;
    };
    const handleOnMouseMove = (i, e) => {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        circleComponent.current[i].style.transform =
            "translate3d(" + currentX + "px, " + currentY + "px, 0)";
    };
    const handleOnMouseUp = (index) => {
        // circleComponent.current[index].style.left = "135px";
        // circleComponent.current[index].style.top = "135px";
    };

    return (
        <Container>
            <div className="input-container">
                <div className="row">
                    <label htmlFor="numberOfCircle">Enter number of circle: </label>
                    <input
                        onChange={(e) => setNum(e.target.value)}
                        value={num}
                        name="numberOfCircle"
                    ></input>
                </div>
                <div className="row">
                    <label htmlFor="gap">Enter gap: </label>
                    <input onChange={(e) => setGap(e.target.value)} value={gap} name="gap"></input>
                </div>
                <div className="row">
                    {active ? (
                        <button onClick={handleOnClick}>Enter</button>
                    ) : (
                        <button onClick={handleOnClick} disabled>
                            Enter
                        </button>
                    )}
                </div>
                <div className="row">
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
            <div className="circle">
                {Array.from({ length: value.num }, (element, i) => {
                    return (
                        <SmallCircle
                            onMouseDown={(e) => {
                                return handleOnMouseDown(i, e);
                            }}
                            onMouseUp={(e) => {
                                return handleOnMouseUp(i, e);
                            }}
                            onMouseMove={(e) => {
                                return handleOnMouseMove(i, e);
                            }}
                            key={i}
                            className="small-circle"
                            num={i}
                            ref={(element) => {
                                circleComponent.current[i] = element;
                            }}
                            gap={value.gap}
                        ></SmallCircle>
                    );
                })}
            </div>
        </Container>
    );
};

export default Question1;
