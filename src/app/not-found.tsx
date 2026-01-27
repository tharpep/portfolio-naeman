import Link from "next/link";

export default function NotFound() {
    return (
        <main className="text-neutral-100 min-h-screen flex items-center justify-center px-6">
            <div className="text-center">
                <h1 className="text-6xl font-bold font-mono text-amber-400 mb-4">404</h1>
                <p className="text-xl text-neutral-300 mb-8">Page not found</p>
                <Link
                    href="/"
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-900 font-semibold rounded-lg transition-colors"
                >
                    Go Home
                </Link>
            </div>
        </main>
    );
}
