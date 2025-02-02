import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-5 backdrop-blur-3xl mt-8 px-6 md:px-20 lg:px-32">
            {/* <div>
                <h1 className="text-xl font-bold">Music<span className="opacity-50">hub</span></h1>
            </div> */}
            <p className="text-center text-muted-foreground text-sm mt-2 max-w-lg font-light">💡 Enjoy seamless music streaming with WaveTune! 🎧🔥</p>
            <p className="text-center text-sm text-muted-foreground">Deployed with ♥ by <a className="underline text-primary hover:text-primary" href="https://github.com/4nuxd">r2hu1</a>.</p>
            <p className="text-center text-sm text-muted-foreground">Credits 🧑‍💻<a className="underline text-primary hover:text-primary" href="https://github.com/r2hu1">r2hu1</a>.</p>
            <div className="flex gap-3 items-center justify-center mt-3">
                <Link target="_blank" className="text-sm opacity-80 font-light underline hover:opacity-100" href="https://github.com/4nuxd/wavetune">Source Code</Link>
                <Link target="_blank" className="text-sm opacity-80 font-light underline hover:opacity-100" href="https://4nuxd.me">Portfolio</Link>
                <Link target="_blank" className="text-sm opacity-80 font-light underline hover:opacity-100" href="https://instagram.com/4nuxd">Instagram</Link>
            </div>
        </footer>
    )
}