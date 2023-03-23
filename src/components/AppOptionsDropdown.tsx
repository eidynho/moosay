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

    const menuItemsList = [
        {
            icon: <Share size={24} />,
            title: "Share",
            onClick: handleToggleShareModal,
        },
        {
            icon: <Image size={24} />,
            title: "Generate picture",
            onClick: handleToggleDownloadModal,
        },
    ];

    return (
        <>
            <BaseDropdown>
                {menuItemsList.map((item) => (
                    <Menu.Item>
                        <button
                            onClick={item.onClick}
                            className="text-l-primary group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm hover:bg-pink-200 hover:text-pink-700"
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </button>
                    </Menu.Item>
                ))}
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
