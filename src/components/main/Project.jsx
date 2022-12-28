import React from 'react';
import Title from "../elements/Title";
import Card from "../elements/Card";
import Cards from "../elements/Cards";

const Project = () => {
    return (
        <div className="bg-project p-10 mobile-tablet:h-full">
            <div className="py-8 flex flex-row justify-center">
                <Title title="Projects" />
            </div>
            <div className="grid gap-2 justify-center justify-items-center md:grid-cols-2 lg:mx-32 lg:grid-cols-3">
                {Cards.map(card => {
                    return (
                        <div key={card.id} className="m-4 mobile-tablet:w-80">
                            <Card
                                img={card.img}
                                title={card.title}
                                details={card.details}
                                text={card.button}
                            />
                        </div>
                        )
                    })}
            </div>
        </div>
    );
};

export default Project;
