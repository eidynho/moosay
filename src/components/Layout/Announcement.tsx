import { ArrowSquareOut, X } from "phosphor-react";
import { useEffect, useState } from "react";

export function Announcement() {
    const [announcementVisibility, setAnnouncementVisibility] = useState<
        "visible" | "hidden"
    >("hidden");

    const isVisible = announcementVisibility === "visible";

    useEffect(() => {
        const announcementStorage = localStorage.getItem(
            "moosay-announcement-1.0.0",
        );

        if (announcementStorage === "hidden") {
            setAnnouncementVisibility("hidden");
        } else {
            setAnnouncementVisibility("visible");
        }
    }, []);

    function handleCloseAnnouncement() {
        localStorage.setItem("moosay-announcement-1.0.0", "hidden");
        setAnnouncementVisibility("hidden");
    }

    return (
        <div
            className={`${
                !isVisible
                    ? "hidden"
                    : "relative flex items-center justify-center h-12 bg-primary text-d-primary font-bold"
            }`}
        >
            <div className="flex items-center gap-2">
                <span>Moosay is under development —</span>
                <a
                    href="https://github.com/eidynho/moosay"
                    target="_blank"
                    className="flex items-center gap-2 hover:underline"
                >
                    Contribute here
                    <ArrowSquareOut size={24} />
                </a>
            </div>
            <X
                size={16}
                weight="bold"
                onClick={handleCloseAnnouncement}
                className="absolute right-4 cursor-pointer"
            />
        </div>
    );
}
