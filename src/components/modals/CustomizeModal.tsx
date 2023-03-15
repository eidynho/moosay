import { useState } from "react";
import { Palette } from "phosphor-react";

import { BaseModal } from "../headless-ui/BaseModal";

export function CustomizeModal() {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggleModal() {
        setIsOpen((state) => !state);
    }

    return (
        <>
            <button
                onClick={handleToggleModal}
                className="flex items-center gap-2 py-3 px-5 rounded-lg text-sm font-medium text-secondary border border-secondary transition-all
                hover:enabled:bg-secondary hover:enabled:text-d-primary
                disabled:cursor-not-allowed disabled:brightness-75"
            >
                <Palette size={24} />
                <span>Customize</span>
            </button>

            <BaseModal
                size="max-w-lg"
                title="Customize"
                isOpen={isOpen}
                toggleModal={handleToggleModal}
            >
                {/* Modal body */}
                <div className="p-6 text-gray-900">customize modal</div>
            </BaseModal>
        </>
    );
}
