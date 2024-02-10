import Button from "@/components/Button";
import Dialog from "@/components/Dialog";
import Input from "@/components/Input";
import Tooltip from "@/components/Tooltip";
import ShareButtons from "@/components/site/ShareButtons";
import { ChevronRight, Hash } from "lucide-react";
import Link from "next/link";


export default function Page() {
    return (
        <div className="py-10 mt-3 px-5 max-w-2xl mx-auto">
            <div className="grid gap-2">
                <div className="text-xs font-normal flex items-center gap-1 opacity-70">
                    <Link href="/">home</Link>
                    <ChevronRight className="w-[1rem] h-[1rem] opacity-70" />
                    <Link href="/components">components</Link>
                </div>
                <div>
                    <h1 className="text-xl font-bold">All Components</h1>
                    <p className="text-sm font-normal -mt-1 opacity-80">All components with demo and source code.</p>
                </div>
                <ShareButtons />
            </div>

            <div id="button" className="group mb-4 flex justify-between items-center mt-10">
                <div>
                    <h1 className="text-xl font-bold -mb-1">Button</h1>
                    <p className="text-xs">Button and their variants.</p>
                </div>
                <Link className="hidden group-hover:block" href="#button"><Hash className="w-[1rem] h-[1rem]" /></Link>
            </div>
            <div className="relative h-[300px] max-w-2xl mx-auto flex border dark:border-secondary border-border items-center justify-center p-4 w-full bg-background rounded-lg">
                <div className="flex items-center justify-between w-full absolute top-0 right-0 p-2 px-3 border-b dark:border-secondary border-border">
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
                <div className="flex items-center justify-center flex-wrap gap-2">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                </div>
            </div>

            <div id="button-w/icons" className="group mb-4 flex justify-between items-center mt-10">
                <div>
                    <h1 className="text-xl font-bold -mb-1">Button w/Icons</h1>
                    <p className="text-xs">Button w/Icons and their variants.</p>
                </div>
                <Link className="hidden group-hover:block" href="#button-w/icons"><Hash className="w-[1rem] h-[1rem]" /></Link>
            </div>
            <div className="relative h-[300px] max-w-2xl mx-auto flex border dark:border-secondary border-border items-center justify-center p-4 w-full bg-background rounded-lg">
                <div className="flex items-center justify-between w-full absolute top-0 right-0 p-2 px-3 border-b dark:border-secondary border-border">
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
                    <Button icon><Hash className="w-[1rem] h-[1rem]" /></Button>
                    <Button icon variant="secondary"><Hash className="w-[1rem] h-[1rem]" /></Button>
                    <Button icon variant="outline"><Hash className="w-[1rem] h-[1rem]" /></Button>
                    <Button icon variant="ghost"><Hash className="w-[1rem] h-[1rem]" /></Button>
                </div>
            </div>

            <div id="input" className="group mb-4 flex justify-between items-center mt-10">
                <div>
                    <h1 className="text-xl font-bold -mb-1">Input</h1>
                    <p className="text-xs">Input and their variants.</p>
                </div>
                <Link className="hidden group-hover:block" href="#input"><Hash className="w-[1rem] h-[1rem]" /></Link>
            </div>
            <div className="relative h-[300px] max-w-2xl mx-auto flex border dark:border-secondary border-border items-center justify-center p-4 w-full bg-background rounded-lg">
                <div className="flex items-center justify-between w-full absolute top-0 right-0 p-2 px-3 border-b dark:border-secondary border-border">
                    <span className="text-xs">Input.jsx</span>
                    <div className="flex gap-2 items-center">
                        <Tooltip content="Live preview">
                            <Button className="text-xs h-6">preview</Button>
                        </Tooltip>
                        <Tooltip content="Source code">
                            <Button variant="secondary" className="text-xs h-6" asLink href="https://github.com/r2hu1/mor-ui/blob/master/components/Input.tsx">code</Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="grid gap-2">
                    <Input type="text" placeholder="Text" />
                    <Input type="password" placeholder="Password" />
                    <Input type="Number" placeholder="00" />
                </div>
            </div>

            <div id="tooltip" className="group mb-4 flex justify-between items-center mt-10">
                <div>
                    <h1 className="text-xl font-bold -mb-1">Tooltip</h1>
                    <p className="text-xs">Tooltip and their variants.</p>
                </div>
                <Link className="hidden group-hover:block" href="#tooltip"><Hash className="w-[1rem] h-[1rem]" /></Link>
            </div>
            <div className="relative h-[300px] max-w-2xl mx-auto flex border dark:border-secondary border-border items-center justify-center p-4 w-full bg-background rounded-lg">
                <div className="flex items-center justify-between w-full absolute top-0 right-0 p-2 px-3 border-b dark:border-secondary border-border">
                    <span className="text-xs">Tooltip.jsx</span>
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

            <div id="dialog" className="group mb-4 flex justify-between items-center mt-10">
                <div>
                    <h1 className="text-xl font-bold -mb-1">Diaog/Modal</h1>
                    <p className="text-xs">Diaog/Modal and their variants.</p>
                </div>
                <Link className="hidden group-hover:block" href="#dialog"><Hash className="w-[1rem] h-[1rem]" /></Link>
            </div>
            <div className="relative h-[300px] max-w-2xl mx-auto flex border dark:border-secondary border-border items-center justify-center p-4 w-full bg-background rounded-lg">
                <div className="flex items-center justify-between w-full absolute top-0 right-0 p-2 px-3 border-b dark:border-secondary border-border">
                    <span className="text-xs">Dialog.jsx</span>
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
                    <Dialog />
                </div>
            </div>
        </div>
    )
}
