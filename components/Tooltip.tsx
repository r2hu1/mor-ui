export default function Tooltip({
    children,
    content,
}: Readonly<{
    children: React.ReactNode;
    content: React.ReactNode;
}>) {
    return (
        <div className="group relative transition-all">
            <div className="text-xs bg-secondary/50 backdrop-blur-md min-w-max text-secondary-foreground px-3 py-2 rounded-xl absolute -bottom-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 delay-150 origin-top z-50 transition">{content}</div>
            {children}
        </div>
    )
}