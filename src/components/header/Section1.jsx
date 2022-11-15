import React from 'react';
import Title from "../elements/Title";
import Paragraph from "../elements/Paragraph";
import Button from "../elements/Button";
import IconSmall from "../elements/Icon.jsx";
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Section1 = () => {
    return (
        <div className="bg-white p-10 flex flex-col items-center justify-center mobile-tablet:h-screen">
            <div className="mt-6 mb-2">
                <Title title="{MdRez}" />
            </div>
            <div className="mt-2 mb-6 text-2xl">
                <Paragraph text="Software Engineer" />
            </div>
            <div className="my-6">
                <Button text="Email me" />
            </div>
            <div className="flex my-6">
                <IconSmall icon={faGithub}/>
                <IconSmall icon={faTwitter}/>
                <IconSmall icon={faLinkedin}/>
            </div>
        </div>
    );
};

export default Section1;
