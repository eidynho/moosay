import { ReactNode } from "react";
import { AnimalMessage } from "../AnimalMessage";

interface CardProps {
    children: ReactNode;
    clockWise: boolean;
    customStyles?: string;
}

const Card = ({ children, clockWise, customStyles }: CardProps) => {
    return (
        <div
            className={`${
                customStyles ? customStyles : ""
            } relative w-[19rem] pt-10 pb-0 px-2 rounded-lg font-bold transition-all hover:scale-110 ${
                clockWise ? "hover:rotate-3" : "hover:-rotate-3"
            }`}
        >
            <div className="bg-inherit absolute w-12 h-12 -top-6 left-1/2 -translate-x-1/2 rounded-full"></div>
            {children}
        </div>
    );
};

export function CardsExamples() {
    return (
        <section className="flex flex-col gap-12 mx-20 mb-40">
            <h2 className="text-center text-3xl lg:text-4xl font-bold text-l-primary">
                Customize as you want
            </h2>
            <div className="flex items-start justify-evenly">
                <Card
                    clockWise
                    customStyles="bg-secondary text-d-primary mt-12 -translate-x-6"
                >
                    <AnimalMessage
                        staticMessage="hello world"
                        staticAnimal="cow"
                    />
                </Card>
                <Card clockWise customStyles="bg-tertiary text-l-primary">
                    <AnimalMessage
                        staticMessage="hello world"
                        staticAnimal="cow"
                    />
                </Card>
                <Card
                    clockWise={false}
                    customStyles="bg-primary text-d-primary mt-6 translate-x-6"
                >
                    <AnimalMessage
                        staticMessage="hello world"
                        staticAnimal="cow"
                    />
                </Card>
            </div>
            <div className="flex items-start justify-evenly">
                <Card clockWise customStyles="bg-primary text-d-primary mt-6">
                    <AnimalMessage
                        staticMessage="hello world"
                        staticAnimal="cow"
                    />
                </Card>
                <Card
                    clockWise
                    customStyles="bg-secondary text-d-primary mt-12"
                >
                    <AnimalMessage
                        staticMessage="hello world"
                        staticAnimal="cow"
                    />
                </Card>
                <Card
                    clockWise={false}
                    customStyles="bg-tertiary text-l-primary"
                >
                    <AnimalMessage
                        staticMessage="hello world"
                        staticAnimal="cow"
                    />
                </Card>
            </div>
        </section>
    );
}
