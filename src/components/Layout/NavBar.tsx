import Link from "next/link";

export function NavBarComponent() {
    return (
        <div className="md:container mx-auto">
            <nav className="flex items-center justify-between gap-3 w-full px-4 sm:px-16 h-20 font-mono">
                <Link href="/" className="font-extrabold">
                    Moosay
                </Link>

                <span className="text-sm text-end">
                    Built by{" "}
                    <a
                        href="https://www.linkedin.com/in/eidy/"
                        target="_blank"
                        className="underline"
                    >
                        Vinicius Eidy Okuda
                    </a>
                </span>
            </nav>
        </div>
    );
}
