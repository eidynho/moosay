import { useState } from "react";
import { Menu } from "@headlessui/react";
import { Image, Share } from "phosphor-react";

import { BaseDropdown } from "./headless-ui/BaseDropdown";
import { DownloadModal } from "./modals/DownloadModal";
import { ShareModal } from "./modals/ShareModal";

export function AppOptionsDropdown() {
    const [shareModalIsOpen, setShareModalIsOpen] = useState(false);
    const [downloadModalIsOpen, setDownloadModalIsOpen] = useState(false);

    function handleToggleShareModal() {
        setShareModalIsOpen((state) => !state);
    }

    function handleToggleDownloadModal() {
        setDownloadModalIsOpen((state) => !state);
    }

    return (
        <>
            <BaseDropdown title="More">
                <>
                    <Menu.Item>
                        <button
                            onClick={handleToggleShareModal}
                            className="text-gray-900 group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm hover:bg-secondary hover:text-white"
                        >
                            <Share size={24} />
                            <span>Share</span>
                        </button>
                    </Menu.Item>

                    <Menu.Item>
                        <button
                            onClick={handleToggleDownloadModal}
                            className="text-gray-900 group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm hover:bg-secondary hover:text-white
                        disabled:cursor-not-allowed disabled:brightness-75"
                        >
                            <Image size={24} />
                            <span>Generate picture</span>
                        </button>
                    </Menu.Item>
                </>
            </BaseDropdown>

            <ShareModal
                isOpen={shareModalIsOpen}
                handleToggleModal={handleToggleShareModal}
            />
            <DownloadModal
                isOpen={downloadModalIsOpen}
                handleToggleModal={handleToggleDownloadModal}
            />
        </>
    );
}
