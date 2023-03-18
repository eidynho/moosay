import { Fragment, ReactNode } from "react";
import { Menu, Transition } from "@headlessui/react";
import { CaretDown } from "phosphor-react";

interface BaseDropdownProps {
    children: ReactNode;
    title: string;
}

export function BaseDropdown({ children, title }: BaseDropdownProps) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-black bg-opacity-20 px-6 py-4 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none">
                    {title}
                    <CaretDown size={16} />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="z-20 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1">{children}</div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
