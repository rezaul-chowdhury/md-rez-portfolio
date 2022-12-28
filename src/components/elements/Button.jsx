import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button className="bg-icon-big w-custom-mobile-width text-xl text-white hover:bg-black hover:text-white px-3 py-2 rounded text-sm font-OldStandard md:w-custom-tablet-width lg:w-custom-desktop-width">{props.text}</button>
        </div>
    );
};

export default Button;




