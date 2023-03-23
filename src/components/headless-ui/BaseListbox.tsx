import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CaretDoubleDown, Check } from "phosphor-react";

interface listItemsOption {
    value: string;
    text: string;
}

interface BaseListboxTypes {
    listItems: listItemsOption[];
    selected: string;
    updateSelected: (item: string) => void;
    customClasses: string;
}

export function BaseListbox({
    listItems,
    selected,
    updateSelected,
    customClasses,
}: BaseListboxTypes) {
    function handleUpdateSelected(selected: string) {
        updateSelected(selected);
    }

    return (
        <Listbox value={selected} onChange={handleUpdateSelected}>
            <div className={`relative ${customClasses}`}>
                <Listbox.Button className="relative w-full cursor-default rounded-md border bg-transparent text-l-primary py-[0.875rem] pl-3 pr-10 text-sm font-medium text-left focus:outline-none">
                    <span className="block truncate">{selected}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <CaretDoubleDown size={16} />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-d-primary opacity-95 py-1 shadow-lg focus:outline-none text-sm">
                        {listItems.map((item, index) => (
                            <Listbox.Option
                                key={index}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active
                                            ? "bg-pink-200 text-pink-700"
                                            : "text-l-primary"
                                    }`
                                }
                                value={item.value}
                            >
                                {({ selected }) => (
                                    <>
                                        <span
                                            className={`block truncate ${
                                                selected
                                                    ? "font-medium"
                                                    : "font-normal"
                                            }`}
                                        >
                                            {item.text}
                                        </span>
                                        {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-pink-700">
                                                <Check size={16} />
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
}
