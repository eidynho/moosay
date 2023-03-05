import { useState } from "react";
import {
    Copy,
    EnvelopeSimple,
    Share,
    TwitterLogo,
    WhatsappLogo,
    X,
} from "phosphor-react";

export function ShareModal() {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggleModal() {
        setIsOpen((state) => !state);
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
                    className="relative w-full h-full max-w-2xl md:h-auto"
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

                            <div className="border rounded py-3 px-5 relative">
                                <div className="max-w-lg truncate text-gray-800">
                                    link
                                </div>
                                <button className="absolute top-1 right-2 flex items-center gap-1 py-2 px-4 rounded bg-green-400 text-gray-900 transition-colors hover:bg-green-500">
                                    <Copy size={24} />
                                    <span>Copy</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
