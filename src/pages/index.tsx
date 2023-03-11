import Link from "next/link";
import { ArrowCircleUpRight } from "phosphor-react";

import { AnimalMessage } from "@/components/AnimalMessage";

export default function Home() {
    return (
        <header className="lg:max-w-5xl mx-auto h-3/4 flex">
            <div className="mx-6 w-full flex flex-col items-center justify-center gap-8 lg:gap-0 lg:flex-row lg:justify-between">
                <div className="sm:w-[36rem] text-l-primary">
                    <h1 className="text-5xl leading-[3.5rem] font-light">
                        Create funny ASCII Art in seconds with Moosay
                    </h1>
                    <p className="my-8 text-lg">
                        Moosay is easy-to-use and flexible cowsay generator with
                        multiple animals and free text to share with friends,
                        download, have a laugh - whatever, really.
                    </p>

                    <div className="flex justify-center lg:justify-start">
                        <Link
                            href="/application"
                            className="flex items-center gap-2 py-3 px-8 rounded-lg text-lg font-medium text-d-primary bg-secondary transition-all
                            hover:brightness-90"
                        >
                            <ArrowCircleUpRight size={24} weight="fill" />
                            Get started
                        </Link>
                    </div>
                </div>
                <AnimalMessage
                    staticMessage="hello world, i am moosay     ~(=^‥^)ノ"
                    staticAnimal="cow"
                />
            </div>
        </header>
    );
}
