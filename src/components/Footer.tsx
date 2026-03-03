export default function Footer() {
    return (
        <footer className="mt-auto py-8 px-6 border-t border-warm-line">
            <div className="max-w-6xl mx-auto text-center text-ink-faint text-sm space-y-2">
                <p>© {new Date().getFullYear()} Naeman Khatib</p>
                <p>
                    Built by{" "}
                    <a
                        href="https://pryce-tharpe.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal/70 hover:text-teal transition-colors"
                    >
                        Pryce Tharpe
                    </a>
                </p>
            </div>
        </footer>
    );
}
