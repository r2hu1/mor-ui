import Button from "../Button";
import Tooltip from "../Tooltip";

export default function Hero() {
    return (
        <div className="text-center grid px-5">
            <h1 className="text-3xl md:text-5xl font-bold">Reuseable set of UI components</h1>
            <p className="md:text-base text-sm mt-2 mx-auto max-w-xs md:max-w-md">Fully customizeable, reuseable components for your next project.</p>
            <div className="flex items-center gap-2 justify-center">
                <Tooltip content="Sites Built Using MorUI">
                    <Button className="mt-5">Examples</Button>
                </Tooltip>
                <Tooltip content="Documentation">
                    <Button className="mt-5" variant="secondary">Docs</Button>
                </Tooltip>
            </div>
        </div>
    )
}