import { useContext, useEffect, useState } from "react";
import { Image } from "phosphor-react";
import html2canvas from "html2canvas";

import { MessageContext } from "@/contexts/MessageContext";
import { BaseModal } from "./headless-ui/BaseModal";

export function DownloadModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
    const [typeFile, setTypeFile] = useState("png");

    const { message } = useContext(MessageContext);

    useEffect(() => {
        if (isOpen) {
            generateCanvas();
        }
    }, [isOpen]);

    async function generateCanvas() {
        const animalPictureRef = document.getElementById("animalPicture");
        if (animalPictureRef) {
            const generatedCanvas = await html2canvas(animalPictureRef, {
                backgroundColor: "#121214",
            });

            setCanvas(generatedCanvas);
        }
    }

    async function handleDownloadPicture() {
        if (!canvas) return;

        const downloadLink = document.createElement("a");
        // set the href and download attributes
        downloadLink.href = canvas.toDataURL(`image/${typeFile}`);

        // set filename based on timestamp
        const timestampNewDate = +new Date();
        downloadLink.download = `vachesay-${timestampNewDate}.${typeFile}`;

        // click the download link to download the screenshot
        downloadLink.click();
    }

    function handleToggleModal() {
        setIsOpen((state) => !state);
    }

    return (
        <>
            <button
                disabled={!message}
                onClick={handleToggleModal}
                className="flex align-center justify-center gap-2 py-2 px-4 rounded bg-yellow-500 text-gray-900 transition-colors 
                enabled:hover:bg-yellow-600
                disabled:brightness-75 disabled:cursor-not-allowed"
            >
                <Image size={24} />
                <span>Generate picture</span>
            </button>

            <BaseModal
                title="Generate picture"
                isOpen={isOpen}
                toggleModal={handleToggleModal}
            >
                {/* Modal body */}
                <div className="p-6 text-gray-900">
                    <div className="flex justify-center mb-5">
                        {canvas && (
                            <img
                                src={canvas.toDataURL()}
                                alt="captured content"
                            />
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <select
                            className="border border-gray-400 text-zinc-900 py-2 px-4 rounded-lg outline-none"
                            onChange={(e) => setTypeFile(e.target.value)}
                        >
                            <option value="png">PNG</option>
                            <option value="jpg">JPG</option>
                        </select>
                        <button
                            onClick={handleDownloadPicture}
                            className="flex align-center justify-center gap-2 py-2 px-4 rounded bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition-colors"
                        >
                            <Image size={24} />
                            <span>Download as {typeFile.toUpperCase()}</span>
                        </button>
                    </div>
                </div>
            </BaseModal>
        </>
    );
}
