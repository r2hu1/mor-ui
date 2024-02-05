import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Button({
    children,
    variant = "primary",
    border = false,
    icon = false,
    asLink,
    href = "#",
    className,
}: Readonly<{
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    border?: true | false;
    className?: string,
    icon?: true | false,
    asLink?: true | false,
    href?: string
}>) {
    const isBorder = border ? "border border-border" : "border-none";
    const variants = {
        primary: "transition rounded-xl text-sm h-10 px-4 w-fit transition bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "transition rounded-xl text-sm h-10 px-4 w-fit transition bg-secondary/90 text-secondary-foreground hover:bg-secondary/70",
        outline: "transition rounded-xl text-sm h-10 px-4 w-fit transition text-foreground outline outline-secondary outline-[1px] hover:bg-accent hover:text-accent-foreground",
        ghost: "transition rounded-xl text-sm h-10 px-4 w-fit transition hover:bg-accent hover:text-accent-foreground",
    };
    const isIcon = icon ? "h-10 w-10 rounded-xl px-0 flex items-center justify-center" : "";
    return (
        <>
            <button className={cn(variants[variant], isBorder, isIcon, className, asLink && "hidden")}>{children}</button>
            {asLink && (
                <Link href={href}><button className={cn(variants[variant], isBorder, isIcon, className)}>{children}</button></Link>
            )}
        </>
    )
}