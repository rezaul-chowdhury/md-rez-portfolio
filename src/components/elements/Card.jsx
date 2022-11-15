import React from 'react';

const Card = (props) => {
    return (
        <div>
            <img src={props.img} alt="#" />
            <h1>{props.title}</h1>
            <p>{props.details}</p>
            <button>{props.text}</button>
        </div>
    );
};

export default Card;
