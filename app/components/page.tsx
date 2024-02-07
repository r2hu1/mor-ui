import Button from "@/components/Button";
import Dialog from "@/components/Dialog";
import Tooltip from "@/components/Tooltip";
import { Hash } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <div className="py-10 mt-3 px-5 max-w-2xl mx-auto">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-medium">All Components</h1>
                <div className="text-xs flex gap-2">
                    <Link href="/">home</Link>
                    <span>/</span>
                    <Link href="/components">components</Link>
                </div>
            </div>

            <div className="mb-4 flex justify-between items-center mt-10">
                <div>
                    <h1 className="text-2xl font-bold -mb-1">Button</h1>
                    <p className="text-xs">Button and their variants.</p>
                </div>
                <Link href="/"><Hash className="w-[1.2rem] h-[1.2rem]" /></Link>
            </div>
            <div className="relative h-[300px] max-w-2xl mx-auto flex border border-secondary items-center justify-center p-4 w-full bg-background rounded-lg">
                <div className="flex items-center justify-between w-full absolute top-0 right-0 p-2 px-3 border-b border-secondary">
                    <span className="text-xs">Button.jsx</span>
                    <div className="flex gap-2 items-center">
                        <Tooltip content="Live preview">
                            <Button className="text-xs h-6">preview</Button>
                        </Tooltip>
                        <Tooltip content="Source code">
                            <Button variant="secondary" className="text-xs h-6" asLink href="https://github.com/r2hu1/mor-ui/blob/master/components/Button.tsx">code</Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                </div>
            </div>

            <div className="mb-4 flex justify-between items-center mt-10">
                <div>
                    <h1 className="text-2xl font-bold -mb-1">Button w/Icons</h1>
                    <p className="text-xs">Button w/Icons and their variants.</p>
                </div>
                <Link href="/"><Hash className="w-[1.2rem] h-[1.2rem]" /></Link>
            </div>
            <div className="relative h-[300px] max-w-2xl mx-auto flex border border-secondary items-center justify-center p-4 w-full bg-background rounded-lg">
                <div className="flex items-center justify-between w-full absolute top-0 right-0 p-2 px-3 border-b border-secondary">
                    <span className="text-xs">Button.jsx</span>
                    <div className="flex gap-2 items-center">
                        <Tooltip content="Live preview">
                            <Button className="text-xs h-6">preview</Button>
                        </Tooltip>
                        <Tooltip content="Source code">
                            <Button variant="secondary" className="text-xs h-6" asLink href="https://github.com/r2hu1/mor-ui/blob/master/components/Button.tsx">code</Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Button icon><Hash className="w-[1.2rem] h-[1.2rem]"/></Button>
                    <Button icon variant="secondary"><Hash className="w-[1.2rem] h-[1.2rem]"/></Button>
                    <Button icon variant="outline"><Hash className="w-[1.2rem] h-[1.2rem]"/></Button>
                    <Button icon variant="ghost"><Hash className="w-[1.2rem] h-[1.2rem]"/></Button>
                </div>
            </div>

            <div className="mb-4 flex justify-between items-center mt-10">
                <div>
                    <h1 className="text-2xl font-bold -mb-1">Tooltip</h1>
                    <p className="text-xs">Tooltip and their variants.</p>
                </div>
                <Link href="/"><Hash className="w-[1.2rem] h-[1.2rem]" /></Link>
            </div>
            <div className="relative h-[300px] max-w-2xl mx-auto flex border border-secondary items-center justify-center p-4 w-full bg-background rounded-lg">
                <div className="flex items-center justify-between w-full absolute top-0 right-0 p-2 px-3 border-b border-secondary">
                    <span className="text-xs">Button.jsx</span>
                    <div className="flex gap-2 items-center">
                        <Tooltip content="Live preview">
                            <Button className="text-xs h-6">preview</Button>
                        </Tooltip>
                        <Tooltip content="Source code">
                            <Button variant="secondary" className="text-xs h-6" asLink href="https://github.com/r2hu1/mor-ui/blob/master/components/Tooltip.tsx">code</Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Tooltip content="Hovered!">
                        <Button>Hover Me</Button>
                    </Tooltip>
                </div>
            </div>

            <div className="mb-4 flex justify-between items-center mt-10">
                <div>
                    <h1 className="text-2xl font-bold -mb-1">Diaog/Modal</h1>
                    <p className="text-xs">Diaog/Modal and their variants.</p>
                </div>
                <Link href="/"><Hash className="w-[1.2rem] h-[1.2rem]" /></Link>
            </div>
            <div className="relative h-[300px] max-w-2xl mx-auto flex border border-secondary items-center justify-center p-4 w-full bg-background rounded-lg">
                <div className="flex items-center justify-between w-full absolute top-0 right-0 p-2 px-3 border-b border-secondary">
                    <span className="text-xs">Button.jsx</span>
                    <div className="flex gap-2 items-center">
                        <Tooltip content="Live preview">
                            <Button className="text-xs h-6">preview</Button>
                        </Tooltip>
                        <Tooltip content="Source code">
                            <Button variant="secondary" className="text-xs h-6" asLink href="https://github.com/r2hu1/mor-ui/blob/master/components/Dialog.tsx">code</Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Dialog/>
                </div>
            </div>
        </div>
    )
}