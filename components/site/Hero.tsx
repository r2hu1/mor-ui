import Button from "../Button";
import Tooltip from "../Tooltip";

export default function Hero() {
    return (
        <div className="text-center grid px-5">
            <h1 className="text-3xl md:text-4xl font-bold">Reuseable set of UI components</h1>
            <p className="md:text-base text-sm mt-2 mx-auto max-w-xs md:max-w-md">Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.</p>
            <div className="flex items-center gap-2 justify-center">
                <Tooltip content="Components">
                    <Button className="mt-5" asLink href="/components">Components</Button>
                </Tooltip>
                <Tooltip content="Documentation">
                    <Button className="mt-5" variant="secondary" asLink href="/components">Docs</Button>
                </Tooltip>
            </div>
            <div className="relative h-[300px] max-w-2xl mx-auto flex border border-secondary items-center justify-center p-4 w-full bg-background mt-20 rounded-lg">
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
                <div className="flex flex-wrap items-center justify-center gap-2">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                </div>
            </div>
        </div>
    )
}
