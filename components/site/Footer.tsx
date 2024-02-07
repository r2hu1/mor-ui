export default function Footer() {
    return(
        <footer className="py-10 grid gap-1">
            <div className="flex items-center justify-center gap-2">
                <span className="text-sm">Mor-UI</span>
                <span className="text-xs">|</span>
                <span className="text-sm">{new Date().getFullYear()}</span>
            </div>
            <p className="text-center text-xs">Built by <a className="opacity-70" href="https://github.com/r2hu1">r2hu1</a></p>
        </footer>
    )
}