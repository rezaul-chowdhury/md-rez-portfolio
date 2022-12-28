import React from 'react';
import Title from "../elements/Title";
import Paragraph from "../elements/Paragraph";
import Button from "../elements/Button";
import IconSmall from "../elements/Icon.jsx";
import Logo from "../elements/Logo"
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Section1 = () => {
    return (
        <div className="bg-section1 p-10 flex flex-col items-center relative justify-center lg:h-screen">
            <div className="mb-4">
                {/*<Title title="MdRez" />*/}
                <a href="#">
                    <Logo />
                </a>
            </div>
            <div className="mb-7 text-2xl">
                <Paragraph text="Software Engineer" />
            </div>
            {/*<div className="my-6">*/}
            {/*    <Button text="Email me" />*/}
            {/*</div>*/}
            <div className="flex">
                <IconSmall icon={faGithub}/>
                <IconSmall icon={faTwitter}/>
                <IconSmall icon={faLinkedin}/>
            </div>
        </div>
    );
};

export default Section1;
