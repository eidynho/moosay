const borderColorsList = [
    {
        className: "border border-white",
        iconColor: "from-white to-white",
    },
    {
        className: "border border-black",
        iconColor: "from-black to-black",
    },
    {
        className: "border border-red-200",
        iconColor: "from-red-200 to-red-300",
    },
    {
        className: "border border-orange-200",
        iconColor: "from-orange-200 to-orange-300",
    },
    {
        className: "border border-amber-200",
        iconColor: "from-amber-200 to-amber-300",
    },
    {
        className: "border border-yellow-200",
        iconColor: "from-yellow-200 to-yellow-300",
    },
    {
        className: "border border-lime-200",
        iconColor: "from-lime-200 to-lime-300",
    },
    {
        className: "border border-green-200",
        iconColor: "from-green-200 to-green-300",
    },
    {
        className: "border border-emerald-200",
        iconColor: "from-emerald-200 to-emerald-300",
    },
    {
        className: "border border-teal-200",
        iconColor: "from-teal-200 to-teal-300",
    },
    {
        className: "border border-cyan-200",
        iconColor: "from-cyan-200 to-cyan-300",
    },
    {
        className: "border border-sky-200",
        iconColor: "from-sky-200 to-sky-300",
    },
    {
        className: "border border-blue-200",
        iconColor: "from-blue-200 to-blue-300",
    },
    {
        className: "border border-indigo-200",
        iconColor: "from-indigo-200 to-indigo-300",
    },
    {
        className: "border border-violet-200",
        iconColor: "from-violet-200 to-violet-300",
    },
    {
        className: "border border-purple-200",
        iconColor: "from-purple-200 to-purple-300",
    },
    {
        className: "border border-fuchsia-200",
        iconColor: "from-fuchsia-200 to-fuchsia-300",
    },
    {
        className: "border border-pink-200",
        iconColor: "from-pink-200 to-pink-300",
    },
    {
        className: "border border-rose-200",
        iconColor: "from-rose-200 to-rose-300",
    },
];

interface BorderColorProps {
    updateBorderColor: (newValue: string) => void;
}

export function BorderColor({ updateBorderColor }: BorderColorProps) {
    return (
        <div className="rounded-3xl max-w-2xl py-1">
            <h4 className="font-bold mb-3">Border color</h4>
            <div className="flex flex-wrap items-center gap-3">
                {borderColorsList.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => updateBorderColor(item.className)}
                        className={`${item.iconColor} inline-flex p-0.5 rounded-md group bg-gradient-to-br`}
                    >
                        <span className="w-10 h-10 sm:w-11 sm:h-11 transition-all ease-in bg-d-primary rounded-md group-hover:bg-opacity-0"></span>
                    </button>
                ))}
            </div>
        </div>
    );
}
