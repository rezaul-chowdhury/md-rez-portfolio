import React from 'react';

const List = (props) => {
    return (
        <div>
            <a href="#" className="text-3xl leading-10 text-white hover:bg-black hover:text-white p-0.5 rounded mobile-tablet:p-2">{props.text}</a>
        </div>
    );
};

export default List;
