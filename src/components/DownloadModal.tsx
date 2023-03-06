import { useEffect, useState } from "react";
import { Image, X } from "phosphor-react";
import html2canvas from "html2canvas";

import { defaultTheme } from "../styles/themes/default";

export function DownloadModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
    const [typeFile, setTypeFile] = useState("png");

    useEffect(() => {
        if (isOpen) {
            generateCanvas();
        }
    }, [isOpen]);

    async function generateCanvas() {
        const animalPictureRef = document.getElementById("animalPicture");
        if (animalPictureRef) {
            const generatedCanvas = await html2canvas(animalPictureRef, {
                backgroundColor: defaultTheme["gray-900"],
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
                onClick={handleToggleModal}
                className="flex align-center justify-center gap-2 py-2 px-4 rounded bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition-colors"
            >
                <Image size={24} />
                <span>Generate picture</span>
            </button>

            {/* Main modal */}
            <div
                id="downloadModal"
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
                    className="relative w-full h-auto max-w-lg"
                >
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Generate picture
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
                                    onChange={(e) =>
                                        setTypeFile(e.target.value)
                                    }
                                >
                                    <option value="png">PNG</option>
                                    <option value="jpg">JPG</option>
                                </select>
                                <button
                                    onClick={handleDownloadPicture}
                                    className="flex align-center justify-center gap-2 py-2 px-4 rounded bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition-colors"
                                >
                                    <Image size={24} />
                                    <span>
                                        Download as {typeFile.toUpperCase()}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
