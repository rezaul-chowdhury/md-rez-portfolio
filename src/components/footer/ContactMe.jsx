import React from 'react';
import Title from "../elements/Title";
import Button from "../elements/Button";
import IconSmall from "../elements/Icon";
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

const ContactMe = () => {
    return (
        <div className="bg-contact-me p-10 flex flex-col items-center justify-center">
            <div className="my-2 pt-8">
                <Title title="Contact" />
            </div>
            <div className="my-2">
                <Button text="Email me" />
            </div>
            <div className="my-2">
                <Button text="Resume" />
            </div>
            <div className="flex my-6 pb-8">
                <IconSmall link={'https://github.com/MdRez19'} icon={faGithub}/>
                <IconSmall link={'https://twitter.com/MdRez19'} icon={faTwitter}/>
                <IconSmall link={'https://www.linkedin.com/in/mdrez-chowdhury-aa3558127'} icon={faLinkedin}/>
            </div>
        </div>
    );
};

export default ContactMe;
