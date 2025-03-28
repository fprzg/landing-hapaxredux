import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";

interface RedirectButtonProps {
    href?: string;
    className?: string;
    children?: React.ReactNode | undefined;
}

const RedirectButton: React.FC<RedirectButtonProps> = ({ href = "", className, children }: RedirectButtonProps) => {
    return (
        <Link href={href} className={className}>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-800 p-0">
                {children} →
            </Button>
        </Link>
    );
};
export default RedirectButton;