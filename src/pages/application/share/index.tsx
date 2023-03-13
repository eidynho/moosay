import { useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PaperPlaneTilt } from "phosphor-react";

import { AnimalContext } from "@/contexts/AnimalContext";
import { MessageContext } from "@/contexts/MessageContext";

import { decodeString } from "@/utils/encoderDecoder";
import { AnimalMessage } from "@/components/AnimalMessage";

export default function Share() {
    const router = useRouter();

    const { updateMessage } = useContext(MessageContext);
    const { updateAnimal } = useContext(AnimalContext);

    useEffect(() => {
        const messageDecoded = decodeString(router.query.message as string);
        const animalDecoded = decodeString(router.query.animal as string);

        updateMessage(messageDecoded);
        updateAnimal(animalDecoded);
    }, [router.query]);

    return (
        <main className="md:container mx-auto">
            <div className="flex flex-col items-center">
                <div className="min-w-1/2">
                    <Link
                        href="/application"
                        className="flex items-center gap-2 py-3 px-8 rounded-lg text-lg font-medium text-secondary border border-secondary transition-all
                    hover:enabled:bg-secondary hover:enabled:text-d-primary
                    disabled:cursor-not-allowed disabled:brightness-75"
                    >
                        <PaperPlaneTilt size={24} weight="bold" />
                        <span>Send a message back</span>
                    </Link>
                    <AnimalMessage />
                </div>
            </div>
        </main>
    );
}
