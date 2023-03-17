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
        iconColor: "from-red-200 to-red-300",
    },
    {
        className: "text-orange-200",
        iconColor: "from-orange-200 to-orange-300",
    },
    {
        className: "text-amber-200",
        iconColor: "from-amber-200 to-amber-300",
    },
    {
        className: "text-yellow-200",
        iconColor: "from-yellow-200 to-yellow-300",
    },
    {
        className: "text-lime-200",
        iconColor: "from-lime-200 to-lime-300",
    },
    {
        className: "text-green-200",
        iconColor: "from-green-200 to-green-300",
    },
    {
        className: "text-emerald-200",
        iconColor: "from-emerald-200 to-emerald-300",
    },
    {
        className: "text-teal-200",
        iconColor: "from-teal-200 to-teal-300",
    },
    {
        className: "text-cyan-200",
        iconColor: "from-cyan-200 to-cyan-300",
    },
    {
        className: "text-sky-200",
        iconColor: "from-sky-200 to-sky-300",
    },
    {
        className: "text-blue-200",
        iconColor: "from-blue-200 to-blue-300",
    },
    {
        className: "text-indigo-200",
        iconColor: "from-indigo-200 to-indigo-300",
    },
    {
        className: "text-violet-300",
        iconColor: "from-violet-300 to-violet-400",
    },
    {
        className: "text-purple-300",
        iconColor: "from-purple-300 to-purple-400",
    },
    {
        className: "text-fuchsia-300",
        iconColor: "from-fuchsia-300 to-fuchsia-400",
    },
    {
        className: "text-pink-300",
        iconColor: "from-pink-300 to-pink-400",
    },
    {
        className: "text-rose-300",
        iconColor: "from-rose-300 to-rose-400",
    },
];

interface AnimalColorProps {
    updateAnimalColor: (newValue: string) => void;
}

export function AnimalColor({ updateAnimalColor }: AnimalColorProps) {
    return (
        <div className="rounded-3xl px-8 py-6">
            <h4 className="font-bold mb-3">Animal color</h4>
            <div className="flex flex-wrap items-center gap-3">
                {animalColorsList.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => updateAnimalColor(item.className)}
                        className={`${item.iconColor} inline-flex p-0.5 rounded-md group bg-gradient-to-br`}
                    >
                        <span className="w-11 h-11 transition-all ease-in bg-d-primary rounded-md bg-opacity-0"></span>
                    </button>
                ))}
            </div>
        </div>
    );
}
