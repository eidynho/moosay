import { X } from "phosphor-react";
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
                    : "relative flex items-center justify-center h-12 bg-primary transition-all hover:brightness-90"
            }`}
        >
            <div className="flex items-center gap-2">
                <a
                    href="https://github.com/eidynho/moosay"
                    target="_blank"
                    className="flex items-center gap-2 font-bold text-sm sm:text-base text-d-primary hover:underline"
                >
                    Moosay is open source — Contribute here 🎈
                </a>
            </div>
            <X
                size={16}
                weight="bold"
                onClick={handleCloseAnnouncement}
                className="absolute right-4 cursor-pointer text-d-primary"
            />
        </div>
    );
}
