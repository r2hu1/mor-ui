"use client"
import { FaXTwitter } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
import Button from "@/components/Button";
import Tooltip from "../Tooltip";

export default function ShareButtons() {
    const share = () => {
        try {
            navigator.share({
                title: "MorUI",
                text: "Fully customizeable, reuseable components for your next project.",
                url: "https://morui.vercel.app"
            });
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex items-center gap-2 mt-1">
            <Tooltip content="Share">
                <Button onClick={share} icon><IoIosShareAlt className="w-[1.1rem] h-[1.1rem]" /></Button>
            </Tooltip>
            <Tooltip content="Share on Twitter">
                <Button asLink href="https://x.com/intent/tweet?text=I+found+a+great+set+of+components,+Check+out+MorUI!.&url=https://morui.vercel.app" variant="secondary">Post on <FaXTwitter className="w-[1rem] h-[1rem]" /></Button>
            </Tooltip>
        </div>
    )
}