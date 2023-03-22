export function Footer() {
    return (
        <footer className="mx-4">
            <hr className="h-1 my-4" />
            <div className="flex flex-col md:flex-row items-end justify-between gap-3 py-2 mb-4 font-mono text-end text-sm">
                <span>Copyright © 2023 Moosay</span>
                <span>
                    Built by{" "}
                    <a
                        href="https://www.linkedin.com/in/eidy/"
                        target="_blank"
                        className="underline"
                    >
                        Vinicius Eidy Okuda
                    </a>
                </span>
            </div>
        </footer>
    );
}
