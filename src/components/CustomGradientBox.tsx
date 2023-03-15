import { ReactNode } from "react";

interface GradientBoxProps {
    children: ReactNode;
}

export function GradientBox({ children }: GradientBoxProps) {
    return (
        <div className="relative">
            <span
                aria-hidden="true"
                className="animate-gradient-text-fade-1 bg-gradient-to-bl
                    from-[#007CF0] to-[#00DFD8] absolute h-full w-full -z-10 rounded-md
                    before:content-[''] before:border-[0.75rem] before:border-solid before:border-transparent before:opacity-20 before:bg-clip-padding before:blur-xl before:h-full before:w-full before:absolute before:-z-10 before:bg-gradient-to-bl before:from-[#007CF0] before:to-[#00DFD8]"
            ></span>
            <span
                aria-hidden="true"
                className="animate-gradient-text-fade-2 bg-gradient-to-bl
                    from-[#7928CA] to-[#FF0080] absolute h-full w-full -z-10 rounded-md
                    before:content-[''] before:border-[0.75rem] before:border-solid before:border-transparent before:opacity-20 before:bg-clip-padding before:blur-xl before:h-full before:w-full before:absolute before:-z-10 before:bg-gradient-to-bl before:from-[#7928CA] before:to-[#FF0080]"
            ></span>
            <span
                aria-hidden="true"
                className="animate-gradient-text-fade-3 bg-gradient-to-bl
                    from-[#FF4D4D] to-[#F9CB28] absolute h-full w-full -z-10 rounded-md
                    before:content-[''] before:border-[0.75rem] before:border-solid before:border-transparent before:opacity-20 before:bg-clip-padding before:blur-xl before:h-full before:w-full before:absolute before:-z-10 before:bg-gradient-to-bl before:from-[#FF4D4D] before:to-[#F9CB28]"
            ></span>
            {children}
        </div>
    );
}
