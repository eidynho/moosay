import { Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "phosphor-react";
import { spaceMono } from "@/pages/_app";

interface BaseModalTypes {
    children: ReactNode;
    size?: string;
    title: string;
    description?: string;
    isOpen: boolean;
    toggleModal: () => void;
}

export function BaseModal({
    children,
    size,
    title,
    description,
    isOpen,
    toggleModal,
}: BaseModalTypes) {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className={`relative z-10 ${spaceMono.variable}`}
                    onClose={toggleModal}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className={`${
                                        size ? size : "max-w-md"
                                    } w-full transform overflow-hidden rounded-2xl bg-d-primary/70 backdrop-blur text-l-primary p-6 text-left align-middle shadow-xl transition-all`}
                                >
                                    <div className="flex items-center justify-between">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6"
                                        >
                                            {title}
                                        </Dialog.Title>
                                        <button
                                            onClick={toggleModal}
                                            className="text-l-primary bg-transparent hover:bg-gray-100/10 hover:text-gray-100 rounded-md text-sm p-1.5 ml-auto inline-flex items-center"
                                            data-modal-hide="defaultModal"
                                        >
                                            <X size={24} />
                                        </button>
                                    </div>
                                    {description && (
                                        <Dialog.Description>
                                            {description}
                                        </Dialog.Description>
                                    )}
                                    {children}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
