import Link from "next/link";

export default function NotFound() {
    return (
        <main className="text-ink min-h-screen flex items-center justify-center px-6">
            <div className="text-center">
                <h1 className="text-6xl font-bold font-mono text-teal mb-4">404</h1>
                <p className="text-xl text-ink-mid mb-8">Page not found</p>
                <Link
                    href="/"
                    className="px-6 py-3 bg-teal hover:bg-teal-dark text-cream font-semibold rounded-lg transition-colors"
                >
                    Go Home
                </Link>
            </div>
        </main>
    );
}
