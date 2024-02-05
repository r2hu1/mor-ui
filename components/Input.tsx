import { cn } from "@/lib/utils";

export default function Input({
    type = "text",
    className = "",
    ...props
}){

    return (
        <input
            type={type}
            className={cn("w-full accent-primary rounded-xl border border-border bg-secondary/40 text-foreground text-sm px-4 flex items-center h-12 outline-none transition focus:ring-2 ring-primary/80", className)}
            {...props}
        />
    )
}