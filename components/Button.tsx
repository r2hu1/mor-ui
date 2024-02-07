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
    ...props
}: Readonly<{
    children?: React.ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    border?: true | false;
    className?: string,
    icon?: true | false,
    asLink?: true | false,
    href?: string,
    onClick?: () => void
}>) {
    const isBorder = border ? "border border-border" : "border-none";
    const variants = {
        primary: "bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "bg-secondary dark:bg-secondary/90 text-secondary-foreground hover:bg-secondary/70",
        outline: "text-foreground outline outline-secondary outline-[1px] hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
    };
    const stylB = "h-10 px-4 inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    const isIcon = icon ? "min-h-10 min-w-10 rounded-xl px-0 flex items-center justify-center" : "";
    return (
        <>
            <button {...props} className={cn(stylB,variants[variant], isBorder, isIcon, className, asLink && "hidden")}>{children}</button>
            {asLink && (
                <Link {...props} href={href}><button className={cn(variants[variant], isBorder, isIcon, className)}>{children}</button></Link>
            )}
        </>
    )
}