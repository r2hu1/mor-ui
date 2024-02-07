"use client"
import { MoonStar, SunMedium, X } from "lucide-react";
import Button from "../Button";
import { useTheme } from "next-themes";
import Input from "../Input";
import { FaGithub } from "react-icons/fa";
import Tooltip from "../Tooltip";
import Logo from "./Logo";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Header() {
    const { setTheme, resolvedTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const componentsLink = [
        {
            name: "Button",
            href: "/components#button",
            description: "Button and their variants.",
        },
        {
            name: "Button w/Icons",
            href: "/components#button-w/icons",
            description: "Button with icons and their variants.",
        },
        {
            name: "Input",
            href: "/components#input",
            description: "Input and their variants.",
        },
        {
            name: "Tooltip",
            href: "/components#tooltip",
            description: "Tooltip and their variants.",
        },
        {
            name: "Dialog",
            href: "/components#dialog",
            description: "Dialog and their variants.",
        },
    ];

    const [searchItem, setSearchItem] = useState<any>([]);

    const handleSearch = (e: any) => {
        for (let i = 0; i < componentsLink.length; i++) {
            if (componentsLink[i].name.toLowerCase().includes(e.target.value.toLowerCase())) {
                setSearchItem(componentsLink[i]);
            }
        }
    };
    return (
        <header className="border-b border-border/80 gap-3 flex items-center justify-between py-3 px-5 md:px-20 lg:px-32">
            <Logo />
            <div className="flex items-center gap-2">
                <div className="relative">
                    <Input placeholder="Search.." type="text" disabled />
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-transparent" onClick={toggle}></div>
                </div>
                <div className={cn("fixed flex items-center justify-center px-5 inset-0 z-50 bg-black/80 transition", isOpen ? "opacity-100 visible transition" : "transition opacity-0 invisible")}>
                    <div className="bg-background w-full border border-secondary rounded-xl p-4 max-w-lg relative">
                        <h1 className="text-base font-bold mt-2 mb-2">All Components</h1>
                        <div>
                            {/* <Input onChange={handleSearch} className="w-full" placeholder="Component name.." type="text" /> */}
                            <X className="w-[1rem] h-[1rem] absolute top-3 right-3 opacity-95" onClick={toggle} />
                        </div>
                        <div className="mt-4">
                            <ul className="grid gap-2">
                                {componentsLink.map((link) => (
                                    <Link href={link.href} key={link.name}>
                                        <li className="bg-secondary/40 py-2 rounded-xl px-4 hover:bg-secondary/60 transition border border-secondary">
                                            <h1 className="text-sm">{link.name}</h1>
                                            <p className="text-xs font-light">{link.description}</p>
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-4">
                            <div className="w-full">
                                <Button className="w-full" onClick={toggle}>Close</Button>
                            </div>
                        </div>
                    </div>
                </div>
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