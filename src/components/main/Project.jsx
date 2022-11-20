import React from 'react';
import Title from "../elements/Title";
import Card from "../elements/Card";
import cards from "../elements/Cards";

const Project = () => {
    return (
        <div className="bg-project p-10 mobile-tablet:h-full">
            <div className="py-8 flex flex-row justify-center">
                <Title title="{Projects}" />
            </div>
            <div className="grid gap-4 justify-center justify-items-center mobile-tablet:mx-32 mobile-tablet:grid-cols-3 ">
                {cards.map(card => {
                    return (
                        <div key={card.id} className="m-4">
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
