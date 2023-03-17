import { GradientBox } from "@/components/GradientBox";

const bgColorsList = [
    {
        className: "bg-white",
        iconColor: "bg-white",
    },
    {
        className: "bg-black",
        iconColor: "bg-black",
    },
    {
        className: "bg-red-200",
        iconColor: "from-red-200 to-red-300",
    },
    {
        className: "bg-orange-200",
        iconColor: "from-orange-200 to-orange-300",
    },
    {
        className: "bg-amber-200",
        iconColor: "from-amber-200 to-amber-300",
    },
    {
        className: "bg-yellow-200",
        iconColor: "from-yellow-200 to-yellow-300",
    },
    {
        className: "bg-lime-200",
        iconColor: "from-lime-200 to-lime-300",
    },
    {
        className: "bg-green-200",
        iconColor: "from-green-200 to-green-300",
    },
    {
        className: "bg-emerald-200",
        iconColor: "from-emerald-200 to-emerald-300",
    },
    {
        className: "bg-teal-200",
        iconColor: "from-teal-200 to-teal-300",
    },
    {
        className: "bg-cyan-200",
        iconColor: "from-cyan-200 to-cyan-300",
    },
    {
        className: "bg-sky-200",
        iconColor: "from-sky-200 to-sky-300",
    },
    {
        className: "bg-blue-200",
        iconColor: "from-blue-200 to-blue-300",
    },
    {
        className: "bg-indigo-200",
        iconColor: "from-indigo-200 to-indigo-300",
    },
    {
        className: "bg-violet-300",
        iconColor: "from-violet-300 to-violet-400",
    },
    {
        className: "bg-purple-300",
        iconColor: "from-purple-300 to-purple-400",
    },
    {
        className: "bg-fuchsia-300",
        iconColor: "from-fuchsia-300 to-fuchsia-400",
    },
    {
        className: "bg-pink-300",
        iconColor: "from-pink-300 to-pink-400",
    },
    {
        className: "bg-rose-300",
        iconColor: "from-rose-300 to-rose-400",
    },
];

interface BackgroundColorProps {
    updateBgColor: (newValue: string) => void;
}

export function BackgroundColor({ updateBgColor }: BackgroundColorProps) {
    return (
        <div className="rounded-3xl px-8 py-6">
            <h4 className="font-bold mb-3">Background color</h4>
            <div className="flex flex-wrap items-center gap-3">
                <GradientBox>
                    <div
                        onClick={() =>
                            updateBgColor(
                                "border border-transparent bg-clip-padding transition-all",
                            )
                        }
                        className="w-12 h-12 cursor-pointer border border-transparent bg-clip-padding transition-all"
                        title="Add custom color"
                    ></div>
                </GradientBox>
                <GradientBox>
                    <div
                        onClick={() =>
                            updateBgColor(
                                "border border-transparent bg-ghost bg-clip-padding transition-all",
                            )
                        }
                        className="w-12 h-12 rounded-md cursor-pointer border border-transparent bg-ghost bg-clip-padding transition-all"
                        title="Add custom color"
                    ></div>
                </GradientBox>
                {bgColorsList.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => updateBgColor(item.className)}
                        className={`${item.iconColor} inline-flex p-0.5 rounded-md group bg-gradient-to-br`}
                    >
                        <span className="w-11 h-11 transition-all ease-in bg-d-primary rounded-md bg-opacity-0"></span>
                    </button>
                ))}
            </div>
        </div>
    );
}
