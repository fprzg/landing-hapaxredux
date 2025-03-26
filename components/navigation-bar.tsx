import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { ReactNode } from "react";

type Section = {
    label: string;
    href: string;
}

interface NavigationBarProps {
    sections?: Section[];
    cta?: {
        label: string;
        href: string;
    }
}

const NavigationBar: React.FC<NavigationBarProps> = ({ sections, cta }) => {
    return (
        <nav className="bg-white border-b py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
            <Link href="/">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-md"></div>
                    <span className="text-xl font-bold">HapaxRedux</span>
                </div>
            </Link>
            <div className="hidden md:flex space-x-6">
                {sections?.map((section, index) => (
                    <a key={index}
                        href={section.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors">
                        {section.label}
                    </a>
                ))}
            </div>

            {cta && (
                <Link href={cta.href}>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                        {cta.label}
                    </Button>
                </Link>
            )}
        </nav>
    );
};

export default NavigationBar;