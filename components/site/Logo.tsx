import { Wheat } from "lucide-react";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex items-center gap-1 select-none">
                <Wheat className="w-[1.2rem] h-[1.2rem]" />
                <h1 className="font-bold text-base hidden md:flex">MorUI</h1>
            </div>
        </Link>
    )
}