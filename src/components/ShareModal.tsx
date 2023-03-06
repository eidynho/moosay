import { useContext, useEffect, useState } from "react";
import {
    CheckCircle,
    Copy,
    EnvelopeSimple,
    Share,
    TwitterLogo,
    WhatsappLogo,
    X,
} from "phosphor-react";

import { MessageContext } from "../contexts/MessageContext";
import { AnimalContext } from "../contexts/AnimalContext";

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
                className="flex align-center justify-center gap-2 py-2 px-4 rounded bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition-colors"
            >
                <Share size={24} />
                <span>Share</span>
            </button>

            {/* Main modal */}
            <div
                id="shareModal"
                onClick={handleToggleModal}
                className={
                    !isOpen
                        ? "hidden"
                        : "" +
                          "fixed top-0 left-0 flex items-center justify-center z-50 w-full bg-black bg-opacity-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
                }
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full h-auto max-w-2xl"
                >
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Share
                            </h3>
                            <button
                                onClick={handleToggleModal}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                data-modal-hide="defaultModal"
                            >
                                <X size={18} />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        {/* Modal body */}
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
                    </div>
                </div>
            </div>
        </>
    );
}
