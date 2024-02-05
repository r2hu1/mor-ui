export default function Tooltip({
    children,
    content,
}: Readonly<{
    children: React.ReactNode;
    content: React.ReactNode;
}>) {
    return (
        <div className="group relative transition-all">
            <div className="invisible group-hover:visible absolute bottom-12 text-center left-1/2 -translate-x-1/2 backdrop-blur-3xl px-3 py-1 w-full max-w-[200px] bg-secondary/80 text-secondary-foreground rounded-xl"><span className="text-xs">{content}</span></div>
            {children}
        </div>
    )
}