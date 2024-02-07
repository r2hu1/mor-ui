"use client"
import { MoonStar, SunMedium } from "lucide-react";
import Button from "../Button";
import { useTheme } from "next-themes";
import Input from "../Input";
import { FaGithub } from "react-icons/fa";
import Tooltip from "../Tooltip";
import Logo from "./Logo";

export default function Header() {
    const { setTheme, resolvedTheme } = useTheme();
    return (
        <header className="border-b border-border/80 gap-2 flex items-center justify-between py-3 px-5 md:px-20 lg:px-32">
            <Logo />
            <div className="flex items-center gap-2">
                <Input type="text" placeholder="Search..." />
                <Tooltip content="GitHub">
                    <Button variant="primary" asLink href="https://github.com/r2hu1" icon><FaGithub className="w-[1.2rem] h-[1.2rem]" /></Button>
                </Tooltip>
                <Tooltip content={resolvedTheme === "dark" ? "Light" : "Dark"}>
                    <Button variant="secondary" icon onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
                        {resolvedTheme === "dark" ? <MoonStar className="w-[1.2rem] h-[1.2rem]" /> : <SunMedium className="w-[1.2rem] h-[1.2rem]" />}
                    </Button>
                </Tooltip>
            </div>
        </header>
    )
}