import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button className="bg-nav-bar text-white hover:bg-black hover:text-white px-3 py-2 rounded text-sm font-medium">{props.text}</button>
        </div>
    );
};

export default Button;




