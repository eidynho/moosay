import { TextAa } from "phosphor-react";

const animalColorsList = [
    {
        className: "text-white",
        iconColor: "bg-white",
    },
    {
        className: "text-black",
        iconColor: "bg-black",
    },
    {
        className: "text-red-200",
        iconColor: "text-red-100 from-red-200 to-red-300",
    },
    {
        className: "text-orange-200",
        iconColor: "text-orange-100 from-orange-200 to-orange-300",
    },
    {
        className: "text-amber-200",
        iconColor: "text-amber-100 from-amber-200 to-amber-300",
    },
    {
        className: "text-yellow-200",
        iconColor: "text-yellow-100 from-yellow-200 to-yellow-300",
    },
    {
        className: "text-lime-200",
        iconColor: "text-lime-100 from-lime-200 to-lime-300",
    },
    {
        className: "text-green-200",
        iconColor: "text-green-100 from-green-200 to-green-300",
    },
    {
        className: "text-emerald-200",
        iconColor: "text-emerald-100 from-emerald-200 to-emerald-300",
    },
    {
        className: "text-teal-200",
        iconColor: "text-teal-100 from-teal-200 to-teal-300",
    },
    {
        className: "text-cyan-200",
        iconColor: "text-cyan-100 from-cyan-200 to-cyan-300",
    },
    {
        className: "text-sky-200",
        iconColor: "text-sky-100 from-sky-200 to-sky-300",
    },
    {
        className: "text-blue-200",
        iconColor: "text-blue-100 from-blue-200 to-blue-300",
    },
    {
        className: "text-indigo-200",
        iconColor: "text-indigo-100 from-indigo-200 to-indigo-300",
    },
    {
        className: "text-violet-200",
        iconColor: "text-violet-100 from-violet-200 to-violet-300",
    },
    {
        className: "text-purple-200",
        iconColor: "text-purple-100 from-purple-200 to-purple-300",
    },
    {
        className: "text-fuchsia-200",
        iconColor: "text-fuchsia-100 from-fuchsia-200 to-fuchsia-300",
    },
    {
        className: "text-pink-200",
        iconColor: "text-pink-100 from-pink-200 to-pink-300",
    },
    {
        className: "text-rose-200",
        iconColor: "text-rose-100 from-rose-200 to-rose-300",
    },
];

interface AnimalColorProps {
    updateAnimalColor: (newValue: string) => void;
}

export function AnimalColor({ updateAnimalColor }: AnimalColorProps) {
    return (
        <div className="rounded-3xl max-w-2xl py-1">
            <h4 className="font-bold mb-3">Animal color</h4>
            <div className="flex flex-wrap items-center gap-3">
                {animalColorsList.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => updateAnimalColor(item.className)}
                        className={`${item.iconColor} inline-flex p-0.5 rounded-md group bg-gradient-to-br`}
                    >
                        <span className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 transition-all ease-in bg-d-primary rounded-md group-hover:bg-opacity-0">
                            <TextAa size={20} />
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
