import Button from "@/components/Button";
import Input from "@/components/Input";
import { BadgeInfoIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-20 px-6 -mt-5 grid gap-4 max-w-2xl mx-auto">
      <h3 className="-mb-2 mt-1 opacity-75 font-medium text-base">Button</h3>
      <div className="flex gap-3 flex-wrap">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <h3 className="-mb-2 mt-1 opacity-75 font-medium text-base">Button w/Icons</h3>
      <div className="flex gap-3 flex-wrap">
        <Button icon><BadgeInfoIcon className="w-[1rem] h-[1rem]"/></Button>
        <Button icon variant="secondary"><BadgeInfoIcon className="w-[1rem] h-[1rem]"/></Button>
        <Button icon variant="outline"><BadgeInfoIcon className="w-[1rem] h-[1rem]"/></Button>
        <Button icon variant="ghost"><BadgeInfoIcon className="w-[1rem] h-[1rem]"/></Button>
      </div>
      <h3 className="-mb-2 mt-1 opacity-75 font-medium text-base">Input</h3>
      <div className="grid gap-3">
        <Input type="text" placeholder="Text Input"/>
        <Input type="number" placeholder="Number Input"/>
        <Input type="date"/>
      </div>
    </div>
  );
}
