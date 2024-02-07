import Button from "../Button";
import Tooltip from "../Tooltip";

export default function Hero() {
    return (
        <div className="text-center grid px-5">
            <h1 className="text-3xl md:text-4xl font-bold">Reuseable set of UI components</h1>
            <p className="md:text-base text-sm mt-2 mx-auto max-w-xs md:max-w-md">Fully customizeable, reuseable components for your next project.</p>
            <div className="flex items-center gap-2 justify-center">
                <Tooltip content="Sites Built Using MorUI">
                    <Button className="mt-5">Components</Button>
                </Tooltip>
                <Tooltip content="Documentation">
                    <Button className="mt-5" variant="secondary">Docs</Button>
                </Tooltip>
            </div>
            <div className="relative h-[300px] flex border border-secondary items-center justify-center gap-2 p-4 w-full bg-secondary/70 mt-16 rounded-lg">
                <div className="flex gap-2 absolute top-2 right-2">
                    <Tooltip content="Live preview">
                        <Button className="text-xs h-6">preview</Button>
                    </Tooltip>
                    <Tooltip content="Source code">
                        <Button variant="secondary" className="text-xs h-6" asLink href="https://github.com/r2hu1/mor-ui/blob/master/components/Button.tsx">code</Button>
                    </Tooltip>
                </div>
                <Button>Button</Button>
            </div>
        </div>
    )
}