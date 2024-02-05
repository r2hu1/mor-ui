import { Star } from "lucide-react";
import Button from "../Button";

export default function Header() {
    return (
        <header className="sticky top-0 bg-secondary/40 backdrop-blur-xl z-10 border-b border-border/80 flex items-center justify-between py-3 px-6 md:px-20 lg:px-32">
            <div>
                <h1 className="text-2xl font-semibold">Mor-UI</h1>
            </div>
            <div className="flex items-center gap-2">
                <Button asLink href="https://github.com/r2hu1">Github</Button>
                <Button icon variant="secondary" asLink href="https://github.com/r2hu1/mor-ui"><Star className="w-[1rem] h-[1rem]"/></Button>
            </div>
        </header>
    )
}