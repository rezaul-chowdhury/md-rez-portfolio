import React from 'react';

const Card = (props) => {
    return (
        <div>
            <img className='mb-4' src={props.img} alt="#" />
            <h1 className="font-OldStandard mb-4 text-2xl font-bold">{props.title}</h1>
            <p className="font-OldStandard mb-4 text-lg">{props.details}</p>
            <button>{props.text}</button>
        </div>
    );
};

export default Card;
