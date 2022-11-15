import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const IconSmall = (props) => {
    return (
        <div>
            <a href="#" className="h-10 w-10 mx-2 block hover:bg-black hover:text-white p-1 rounded"><FontAwesomeIcon icon={props.icon} size = '2x' /></a>
        </div>
    );
};

const IconBig = (props) => {
    return (
        <div>
            <ul>
                <li className="mx-4 p-1 text-icon-big"><FontAwesomeIcon icon={props.icon} size = '8x' /></li>
            </ul>
        </div>
    );
};

export default IconSmall
export { IconBig };
