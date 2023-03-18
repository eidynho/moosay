import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PaperPlaneTilt } from "phosphor-react";

import { decodeString } from "@/utils/encoderDecoder";
import { AnimalMessage } from "@/components/AnimalMessage";

export default function Share() {
    const router = useRouter();
    const [messageDecoded, setMessageDecoded] = useState("");
    const [animalDecoded, setAnimalDecoded] = useState("");
    const [stylesDecoded, setStylesDecoded] = useState("");

    useEffect(() => {
        const messageDecodedString = decodeString(
            router.query.message as string,
        );
        setMessageDecoded(messageDecodedString);

        const animalDecodedString = decodeString(router.query.animal as string);
        setAnimalDecoded(animalDecodedString);

        const stylesDecodedString = decodeString(router.query.styles as string);
        setStylesDecoded(stylesDecodedString);
    }, [router.query]);

    return (
        <main className="md:container mx-auto">
            <div className="flex flex-col items-center gap-4">
                <Link
                    href="/application"
                    className="flex items-center gap-2 py-2 sm:py-3 px-3 sm:px-5 rounded-lg text-sm font-medium text-secondary border border-secondary transition-all
                        hover:enabled:bg-secondary hover:enabled:text-d-primary
                        disabled:cursor-not-allowed disabled:brightness-75 disabled:border-gray-400 disabled:text-gray-400"
                >
                    <PaperPlaneTilt size={24} weight="bold" />
                    <span>Send a message back</span>
                </Link>
                <AnimalMessage
                    staticMessage={messageDecoded}
                    staticAnimal={animalDecoded}
                    customStyles={stylesDecoded}
                />
            </div>
        </main>
    );
}
