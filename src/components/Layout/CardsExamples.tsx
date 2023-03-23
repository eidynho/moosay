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
            } relative w-[19rem] pt-10 pb-0 px-2 rounded-md font-bold transition-all hover:scale-110 ${
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
        <section className="flex flex-col gap-12 mx-20 mb-20 mt-16 md:mt-12 md:mb-40 lg:mt-0">
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-l-primary">
                Customize as you want
            </h2>
            <div className="flex items-start justify-evenly">
                <Card
                    clockWise
                    customStyles="bg-red-200 text-d-primary mt-12 -translate-x-6 hidden md:block"
                >
                    <AnimalMessage
                        staticMessage="<p>what's a king to a god?</p>
                            <p>what's a god to a non-believer?</p>
                            <p>who don't believe in anything?</p>"
                        staticAnimal="cow"
                        customStyles="pb-6 max-w-xs text-start rounded-md text-black bg-red-200"
                    />
                </Card>
                <Card
                    clockWise
                    customStyles="bg-black text-l-primary hidden lg:block"
                >
                    <AnimalMessage
                        staticMessage="<p>let's play stardew valley?</p>"
                        staticAnimal="cow"
                        customStyles="pb-6 max-w-xs text-start rounded-md text-white"
                    />
                </Card>
                <Card
                    clockWise={false}
                    customStyles="bg-amber-200 text-d-primary mt-6 md:translate-x-6"
                >
                    <AnimalMessage
                        staticMessage="<p>💡 movie suggestions:</p>
                            <ul><li>before sunrise (1995)</li><li>coco (2017)</li><li>soul (2020)</li><li>uncut gems (2019)</li><li>whiplash (2014)</li><li>interstellar (2014)</li></ul>"
                        staticAnimal="cow"
                        customStyles="pb-6 max-w-xs text-start rounded-md text-black bg-amber-200"
                    />
                </Card>
            </div>
            <div className="flex items-start justify-evenly">
                <Card
                    clockWise
                    customStyles="bg-green-200 text-d-primary mt-6 -translate-x-8 hidden md:block"
                >
                    <AnimalMessage
                        staticMessage="<p>what’s the most amazing thing you’ve ever witnessed?</p>"
                        staticAnimal="cow"
                        customStyles="pb-6 max-w-xs text-start rounded-md text-black bg-green-200"
                    />
                </Card>
                <Card
                    clockWise
                    customStyles="bg-white text-d-primary -mt-20 hidden lg:block"
                >
                    <AnimalMessage
                        staticMessage="<p>🤍 touch my neck and I'll touch yours</p>"
                        staticAnimal="cow"
                        customStyles="pb-6 max-w-xs text-start rounded-md text-black bg-white"
                    />
                </Card>
                <Card
                    clockWise={false}
                    customStyles="bg-cyan-200 text-l-primary md:translate-x-8"
                >
                    <AnimalMessage
                        staticMessage="<p>if you don’t believe in any kind of magic or mystery, you’re basically as good as dead</p>"
                        staticAnimal="cow"
                        customStyles="pb-6 max-w-xs text-start rounded-md text-black bg-cyan-200"
                    />
                </Card>
            </div>
            <div className="flex items-start justify-evenly">
                <Card
                    clockWise
                    customStyles="bg-orange-200 text-d-primary mt-12 -translate-x-6 hidden md:block"
                >
                    <AnimalMessage
                        staticMessage="<p>good day in my mind 🌞</p>"
                        staticAnimal="cow"
                        customStyles="pb-6 max-w-xs text-start rounded-md text-black bg-orange-200"
                    />
                </Card>
                <Card
                    clockWise
                    customStyles="bg-fuchsia-200 text-l-primary -mt-12 hidden lg:block"
                >
                    <AnimalMessage
                        staticMessage="<h1>grocery list</h1><p></p><ol><li><p>grapes</p></li><li><p>apples</p></li><li><p>butter</p></li><li><p>ice cream</p></li><li><p>eggs</p></li><li><p>instant noodles</p></li><li><p>dog food</p></li><li><p>yogurt</p></li></ol><p></p><blockquote><p>ps: i love you 🤍</p></blockquote>"
                        staticAnimal="cow"
                        customStyles="pb-6 max-w-xs text-start rounded-md text-black bg-fuchsia-200"
                    />
                </Card>
                <Card
                    clockWise={false}
                    customStyles="bg-red-400 text-d-primary mt-6 md:translate-x-6"
                >
                    <AnimalMessage
                        staticMessage="<p>🇧🇷</p><p>vou deixar a rua me levar</p><p>ver a cidade se acender</p><p>a lua vai banhar esse lugar</p><p>e eu vou lembrar você</p>"
                        staticAnimal="cow"
                        customStyles="pb-6 max-w-xs text-start rounded-md text-white bg-red-400"
                    />
                </Card>
            </div>
        </section>
    );
}
