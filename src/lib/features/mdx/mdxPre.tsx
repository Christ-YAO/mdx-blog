import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

export type MdxPreProps = ComponentPropsWithoutRef<"pre"> & {
    "data-language"?: string;
    "data-file-name"?: string;
}

export const mdxPre = ({ children, className, ...props }: MdxPreProps) => {
    return (
        <div className="mb-2 rounded-lg bg-accent">
            <div className="px-2 py-2 flex items-center justify-between gap-2">
                <div className="flex items-center space-x-1.5">
                    <span className="block size-2.5 rounded-full bg-yellow-500"></span>
                    <span className="block size-2.5 rounded-full bg-green-500"></span>
                    <span className="block size-2.5 rounded-full bg-red-500"></span>
                </div>
                {props["data-language"] && (
                    <code className="text-accent-foreground">
                        {props["data-file-name"]}
                    </code>
                )}
            </div>
            <pre className={cn("relative mt-0 overflow-auto lg:text-base", className)}
                {...props}
            >
                {children}
            </pre>
        </div>
    )
}
