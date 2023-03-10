import { useContext, useEffect, useState } from "react";
import {
    CheckCircle,
    Copy,
    EnvelopeSimple,
    Share,
    TwitterLogo,
    WhatsappLogo,
} from "phosphor-react";

import { MessageContext } from "../contexts/MessageContext";
import { AnimalContext } from "../contexts/AnimalContext";
import { BaseModal } from "./headless-ui/BaseModal";

export function ShareModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [shareLink, setShareLink] = useState("");
    const [shareLinkIsCopied, setShareLinkIsCopied] = useState(false);

    const { animal } = useContext(AnimalContext);
    const { message } = useContext(MessageContext);

    useEffect(() => {
        // generate link to share
        if (isOpen) {
            const encodedMessage = encodeURI(message);
            const encodedAnimal = encodeURI(animal);
            const queryParams = `/share?message=${encodedMessage}&animal=${encodedAnimal}`;
            setShareLink(document.location.origin + queryParams);
        }

        setShareLinkIsCopied(false);
    }, [isOpen]);

    function handleToggleModal() {
        setIsOpen((state) => !state);
    }

    async function handleCopyShareLink() {
        try {
            await navigator.clipboard.writeText(shareLink);
            setShareLinkIsCopied(true);
        } catch (err) {
            throw new Error("Error: Failed to write text to clipboard.");
        }
    }

    return (
        <>
            <button
                onClick={handleToggleModal}
                className="flex items-center gap-2 py-3 px-8 rounded-lg text-lg font-medium text-gray-300 border border-gray-300 transition-all
                hover:bg-gray-300 hover:text-d-primary"
            >
                <Share size={24} />
                <span>Share</span>
            </button>

            <BaseModal
                size="max-w-md"
                title="Share"
                isOpen={isOpen}
                toggleModal={handleToggleModal}
            >
                <div className="p-6">
                    <div className="flex items-center gap-4 mb-5">
                        <div className="flex flex-col items-center gap-2">
                            <div
                                title="Whatsapp"
                                className="border rounded-full p-3 cursor-pointer bg-[#25D366] text-gray-100 transition-colors hover:bg-green-500"
                            >
                                <WhatsappLogo size={32} />
                            </div>
                            <span className="text-gray-900 text-xs">
                                Whatsapp
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div
                                title="Twitter"
                                className="border rounded-full p-3 cursor-pointer bg-[#1DA1F2] text-gray-100 transition-colors hover:bg-sky-600"
                            >
                                <TwitterLogo size={32} />
                            </div>
                            <span className="text-gray-900 text-xs">
                                Twitter
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div
                                title="Email"
                                className="border rounded-full p-3 cursor-pointer bg-gray-400 text-gray-100 transition-colors hover:bg-gray-500"
                            >
                                <EnvelopeSimple size={32} />
                            </div>
                            <span className="text-gray-900 text-xs">
                                E-mail
                            </span>
                        </div>
                    </div>

                    <div
                        onClick={handleCopyShareLink}
                        className={
                            !shareLinkIsCopied
                                ? "border border-gray-300 rounded py-3 px-5 relative cursor-pointer"
                                : "border border-green-500 rounded py-3 px-5 relative cursor-pointer"
                        }
                    >
                        <div
                            title={shareLink}
                            className="max-w-[90%] truncate text-gray-800"
                        >
                            {shareLink}
                        </div>
                        <span
                            title="Copy snippet"
                            className="absolute top-1 right-2 flex items-center gap-1 p-2 rounded text-gray-900 transition-colors focus:outline-none active:outline-none"
                        >
                            {!shareLinkIsCopied ? (
                                <Copy size={24} />
                            ) : (
                                <CheckCircle
                                    size={24}
                                    className="text-green-700"
                                />
                            )}
                        </span>
                    </div>
                </div>
            </BaseModal>
        </>
    );
}
