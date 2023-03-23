import { useEffect, useState } from "react";
import { Image } from "phosphor-react";
import html2canvas from "html2canvas";

import { BaseModal } from "../headless-ui/BaseModal";
import { AnimalMessage } from "../AnimalMessage";

interface DownloadModalProps {
    isOpen: boolean;
    handleToggleModal: () => void;
}

export function DownloadModal({
    isOpen,
    handleToggleModal,
}: DownloadModalProps) {
    const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
    const [fileType, setFileType] = useState("png");

    useEffect(() => {
        if (isOpen) {
            generateCanvas();
        }
    }, [isOpen]);

    async function generateCanvas() {
        const animalPictureRef = document.getElementById("animalPicture");
        if (animalPictureRef) {
            const generatedCanvas = await html2canvas(animalPictureRef, {
                backgroundColor: "#1E1919",
            });

            setCanvas(generatedCanvas);
        }
    }

    async function handleDownloadPicture() {
        if (!canvas) return;

        const downloadLink = document.createElement("a");
        // set the href and download attributes
        downloadLink.href = canvas.toDataURL(`image/${fileType}`);

        // set filename based on timestamp
        const timestampNewDate = +new Date();
        downloadLink.download = `moosay-${timestampNewDate}.${fileType}`;

        // click the download link to download the screenshot
        downloadLink.click();
    }

    function toggleModal() {
        handleToggleModal();
    }

    return (
        <BaseModal
            size="max-w-lg"
            title="Generate picture"
            isOpen={isOpen}
            toggleModal={toggleModal}
        >
            {/* Modal body */}
            <div className="p-4 text-l-primary">
                <div className="flex flex-col items-center justify-center mb-5">
                    {canvas ? (
                        <img src={canvas.toDataURL()} alt="captured content" />
                    ) : (
                        <AnimalMessage
                            staticMessage="no message was typed :("
                            customStyles="px-4 pt-6 pb-8 max-w-xs text-start pointer-events-none rounded-md text-red-400 border border-red-400"
                        />
                    )}
                    <span className="max-w-xs mt-1 ml-2 text-xs text-gray-400">
                        * Gradient background colors won't be reflected in
                        generated picture
                    </span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <select
                        className="border border-gray-400 text-zinc-900 py-2 px-4 rounded-md outline-none text-sm"
                        onChange={(e) => setFileType(e.target.value)}
                    >
                        <option value="png">PNG</option>
                        <option value="jpg">JPG</option>
                    </select>

                    <button
                        disabled={!canvas}
                        onClick={handleDownloadPicture}
                        className="flex items-center gap-2 py-2 sm:py-3 px-3 sm:px-5 rounded-md text-sm font-medium text-pink-200 border border-pink-200 transition-all
                        hover:enabled:bg-pink-200 hover:enabled:text-pink-700
                        disabled:cursor-not-allowed disabled:brightness-75 disabled:border-gray-400 disabled:text-gray-400"
                    >
                        <Image size={24} />
                        <span>Download as {fileType.toUpperCase()}</span>
                    </button>
                </div>
            </div>
        </BaseModal>
    );
}
