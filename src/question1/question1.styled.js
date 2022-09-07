import styled, { keyframes } from "styled-components";

export const myOrbit = (num, gap) => keyframes`
        from {
            transform: rotate(${num * gap + 0}deg) translateX(150px) ;
        }
        to {
            transform: rotate(${num * gap + 360}deg) translateX(150px);
        }
`;
export const Container = styled.div`
    margin: 200px;
    input {
        margin: 20px auto;
    }
    .input-container {
        display: flex;
        flex-direction: column;
        .row {
            text-align: start !important;
        }
    }
    .circle {
        position: relative;
        width: 300px;
        height: 300px;
        border-radius: 100%;
        border: 1px solid red;
        margin: 0 auto;
    }
`;
export const SmallCircle = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    top: 135px;
    left: 135px;
    border-radius: 100%;
    border: 1px solid blue;
    animation: ${(props) => myOrbit(props.num, props.gap)} 4s linear infinite;
    &:active {
        background-color: red;
        animation-duration: 0s;
    }
`;
