import React from 'react';
import List from "./List";

const NevIndex = () => {
    return (
        <div>
            <nav className="bg-nav-bar">
                <div className="font-OldStandard flex flex-col items-center mobile-tablet:flex-row justify-around mobile-tablet:h-16">
                    <List text="Home" />
                    <List text="Skills" />
                    <List text="Projects" />
                    <List text="Contact Me" />
                </div>
            </nav>
        </div>
    );
};

export default NevIndex;








