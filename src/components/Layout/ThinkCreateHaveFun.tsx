import Link from "next/link";
import { ArrowCircleUpRight } from "phosphor-react";

export function ThinkCreateHaveFun() {
    return (
        <section className="lg:max-w-5xl mx-auto my-16 flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0">
            <div className="sm:w-[36rem] text-l-primary mx-6 sm:mx-0">
                <div className="flex flex-col gap-2 text-5xl font-extrabold mb-6 md:flex-row">
                    <span className="relative block">
                        <span
                            className="
                            before:content-['Think.'] before:bg-clip-text before:absolute before:top-0 before:left-0 before:bg-l-primary before:opacity-5"
                        >
                            <span
                                className="animate-gradient-text-fade-1 bg-clip-text text-transparent bg-300% bg-gradient-to-r
                            from-[#007CF0] to-[#00DFD8]"
                            >
                                Think.
                            </span>
                        </span>
                    </span>

                    <span className="relative block">
                        <span
                            className="
                            before:content-['Create.'] before:bg-clip-text before:absolute before:top-0 before:left-0 before:bg-l-primary before:opacity-5"
                        >
                            <span
                                className="animate-gradient-text-fade-2 bg-clip-text text-transparent bg-300% bg-gradient-to-r
                                from-[#7928CA] to-[#FF0080]"
                            >
                                Create.
                            </span>
                        </span>
                    </span>

                    <span className="relative block">
                        <span
                            className="
                            before:content-['Have_fun.'] before:bg-clip-text before:absolute before:top-0 before:left-0 before:bg-l-primary before:opacity-5"
                        >
                            <span
                                className="animate-gradient-text-fade-3 bg-clip-text text-transparent bg-300% bg-gradient-to-r
                                from-[#FF4D4D] to-[#F9CB28]"
                            >
                                Have fun.
                            </span>
                        </span>
                    </span>
                </div>
                <p className="leading-7">
                    Moosay is easy-to-use and flexible cowsay generator with
                    multiple animals and free text to share with friends,
                    download, have a laugh - whatever, really.
                </p>
            </div>
            <div className="relative">
                <span
                    aria-hidden="true"
                    className="animate-gradient-text-fade-1 bg-gradient-to-r
                    from-[#007CF0] to-[#00DFD8] absolute h-full w-full -z-10 rounded-md"
                ></span>
                <span
                    aria-hidden="true"
                    className="animate-gradient-text-fade-2 bg-gradient-to-r
                    from-[#7928CA] to-[#FF0080] absolute h-full w-full -z-10 rounded-md"
                ></span>
                <span
                    aria-hidden="true"
                    className="animate-gradient-text-fade-3 bg-gradient-to-r
                    from-[#FF4D4D] to-[#F9CB28] absolute h-full w-full -z-10 rounded-md"
                ></span>
                <Link
                    href="/application"
                    className="flex items-center gap-2 py-3 px-8 rounded-lg text-lg font-medium text-l-primary border border-transparent bg-ghost bg-clip-padding transition-all"
                >
                    <ArrowCircleUpRight size={24} weight="fill" />
                    Get started
                </Link>
            </div>
        </section>
    );
}
