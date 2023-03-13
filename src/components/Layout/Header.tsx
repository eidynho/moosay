import Link from "next/link";
import { ArrowCircleUpRight } from "phosphor-react";

import { AnimalMessage } from "@/components/AnimalMessage";
import { GradientBox } from "../GradientBox";

export function Header() {
    return (
        <header className="lg:max-w-5xl mx-auto min-h-[80vh] flex">
            <div className="mx-6 mt-6 w-full flex flex-col items-center justify-center gap-8 lg:mt-0 lg:gap-0 lg:flex-row lg:justify-between">
                <div className="sm:w-[36rem] text-l-primary">
                    <div className="relative flex items-center gap-3 w-36 text-sm bg-d-secondary py-2 pl-2 mb-2 rounded-full">
                        <span
                            className="flex items-center justify-center w-7 h-7 text-d-primary rounded-full font-bold bg-primary
                            before:content-[''] before:absolute before:animate-badge-ping before:w-7 before:h-7 before:bg-primary before:rounded-full"
                        >
                            β
                        </span>
                        Beta version
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold">
                        Create funny ASCII Art in seconds with Moosay
                    </h1>
                    <p className="my-8 text-lg">
                        Moosay is easy-to-use and flexible cowsay generator with
                        multiple animals and custom messages to share with
                        friends, download, have a laugh - whatever, really.
                    </p>

                    <div className="flex justify-center lg:justify-start">
                        <GradientBox>
                            <Link
                                href="/application"
                                className="flex items-center gap-2 py-3 px-8 rounded-lg text-lg font-medium text-l-primary border border-transparent bg-ghost bg-clip-padding transition-all"
                            >
                                <ArrowCircleUpRight size={24} weight="fill" />
                                Get started
                            </Link>
                        </GradientBox>
                    </div>
                </div>
                <GradientBox>
                    <AnimalMessage
                        staticMessage="hello world, i am moosay     ~(=^‥^)ノ"
                        staticAnimal="cow"
                        customStyles="px-4 py-8 max-w-xs text-start pointer-events-none rounded-lg border border-transparent bg-ghost bg-clip-padding transition-all bg-d-primary"
                    />
                </GradientBox>
            </div>
        </header>
    );
}
