import React from 'react';
function Random(props) {
    const valorRetornaRandom = (min, max) => {
        return Math.random() * (max - min) + min;
    }
    return <div className="box">Random value between {props.min} and {props.max}, {valorRetornaRandom(props.min, props.max)}</div>;
}
export default Random;


