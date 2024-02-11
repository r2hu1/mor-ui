export default function Tooltip({
    children,
    content,
}: Readonly<{
    children: React.ReactNode;
    content: React.ReactNode;
}>) {
    return (
        <div className="group relative transition-all">
            <div className="h-3 w-3 bg-secondary backdrop-blur-3xl -bottom-5 rotate-[45deg] absolute left-1/2 transition -translate-x-1/2 scale-0 group-hover:scale-100 delay-150 origin-top z-50"></div>
            <div className="text-xs bg-secondary backdrop-blur-3xl min-w-max text-secondary-foreground px-3 py-2 rounded-xl absolute -bottom-11 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 delay-150 origin-top z-50 transition">{content}</div>
            {children}
        </div>
    )
}
