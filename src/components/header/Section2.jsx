import React from 'react';
import Title from "../elements/Title";
import Paragraph from "../elements/Paragraph";
import Button from "../elements/Button";

const Section2 = () => {
    return (
        <div className="bg-section2 p-10 flex flex-col items-center justify-center mobile-tablet:h-screen">
            <div className="my-2">
                <Title title="{About Me}" />
            </div>
            <div  className="w-auto my-8 text-2xl sm:px-14">
                <Paragraph text="I am an entry-level software engineer.
                        I love to explore and learn new technology and implement new ideas into work.
                        I like to dedicate my skill improve product satisfaction and
                        collaborating with the team. I would like to be part of an organisation where
                        I could use and enhance my knowledge and talent for the development of both
                        the organisation and myself." />
            </div>
            <div className="my-2">
                <Button text="Resume" />
            </div>
        </div>
    );
};

export default Section2;
