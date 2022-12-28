import React from 'react';
import Title from "../elements/Title";
import IconSmall, {IconBig} from "../elements/Icon.jsx";
import {faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGithub, faGitAlt} from "@fortawesome/free-brands-svg-icons";


const Skill = () => {
    return (
        <div className="bg-skill p-10 flex flex-col items-center justify-center lg:h-screen">
            <div className="my-16">
                <Title title="Skills" />
            </div>
            <div className="flex flex-wrap justify-center my-16">
                <IconBig icon={faHtml5} />
                <IconBig icon={faCss3Alt} />
                <IconBig icon={faJs} />
                <IconBig icon={faReact} />
                <IconBig icon={faNodeJs} />
                <IconBig icon={faGitAlt}/>
                <IconBig icon={faGithub}/>
            </div>
        </div>
    );
};

export default Skill;

