import { useEffect, useState } from "react";
import { X } from "phosphor-react";
import Link from "next/link";

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
            <Link
                href="/application"
                className="text-d-primary font-bold underline text-center max-w-[18rem] sm:max-w-sm"
            >
                Now you can customize animal color - try it out 🎈
            </Link>
            <X
                size={16}
                weight="bold"
                onClick={handleCloseAnnouncement}
                className="absolute right-4 cursor-pointer text-d-primary"
            />
        </div>
    );
}
