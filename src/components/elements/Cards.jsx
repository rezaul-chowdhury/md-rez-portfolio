import React from "react";
import Button from "./Button";


const cards = [
    {
        id: 1,
        img: require("../../images/k-tekplumbing.png"),
        title: 'K-TEKPLUMBING',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        button: <a href="https://k-tekplumbing.netlify.app" target="_blank" rel="noopener">
            <Button text="Visit" />
        </a>
    },
    {
        id: 2,
        img: require("../../images/ih8cleaning.png"),
        title: 'IH8CLEANING',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        button: <a href="https://ihatecleaning.netlify.app" target="_blank" rel="noopener">
            <Button text="Visit" />
        </a>
    },
    {
        id: 3,
        img: require("../../images/general-forum.png"),
        title: 'GENERAL FORUM',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        button: <Button text="Visit" />
    },
]

export default cards;

