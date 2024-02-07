"use client";
import { useState } from "react";
import Button from "./Button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Dialog() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Button onClick={toggle} className="w-fit">Click Me</Button>
            <div className={cn("fixed flex items-center justify-center px-5 inset-0 z-50 bg-black/80 transition", isOpen ? "opacity-100 visible transition" : "transition opacity-0 invisible")}>
                <div className="bg-background border border-secondary rounded-xl p-4 max-w-lg relative">
                    <div className="flex items-center justify-center font-bold">
                        <h1 className="text-lg">Dialog</h1>
                        <X className="w-[1rem] h-[1rem] absolute top-3 right-3 opacity-95" onClick={toggle} />
                    </div>
                    <div className="mt-2">
                        <p className="text-sm opacity-75 font-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vitae cupiditate consequatur consequuntur in ipsum
                            alias, ad, obcaecati unde ab, facere natus accusamus magni sunt sequi? Maiores voluptatum quibusdam molestias.
                        </p>
                    </div>
                    <div className="mt-4">
                        <div className="flex gap-2 items-center w-full">
                            <Button className="w-full" onClick={toggle}>Continue</Button>
                            <Button className="w-full" variant="secondary" onClick={toggle}>Close</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};