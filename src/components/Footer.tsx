export default function Footer() {
    return (
        <footer className="mt-auto py-8 px-6 border-t border-neutral-800">
            <div className="max-w-6xl mx-auto text-center text-neutral-500 text-sm space-y-2">
                <p>© {new Date().getFullYear()} Naeman Khatib</p>
                <p>
                    Built by{" "}
                    <a
                        href="https://pryce-tharpe.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400/70 hover:text-amber-400 transition-colors"
                    >
                        Pryce Tharpe
                    </a>
                </p>
            </div>
        </footer>
    );
}
