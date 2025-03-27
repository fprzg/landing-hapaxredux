import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";

interface RedirectButtonProps {
    text: string;
    href: string;
}

const RedirectButton: React.FC<RedirectButtonProps> = ({ text, href }: RedirectButtonProps) => {
    return (
        <Link href={href}>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-800 p-0">
                {text} →
            </Button>
        </Link>
    );
};
export default RedirectButton;