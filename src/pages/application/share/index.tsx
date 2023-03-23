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
        console.log(animalDecodedString);
        setAnimalDecoded(animalDecodedString);

        const stylesDecodedString = decodeString(router.query.styles as string);
        setStylesDecoded(stylesDecodedString);
    }, [router.query]);

    return (
        <main className="md:container mx-auto">
            <div className="flex flex-col items-center gap-4">
                <Link
                    href="/application"
                    className="flex items-center gap-2 py-3 px-5 rounded-md text-sm font-medium text-pink-200 border border-pink-200 transition-all
                hover:enabled:bg-pink-200 hover:enabled:text-pink-700
                disabled:cursor-not-allowed disabled:brightness-75"
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
