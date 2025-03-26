import Link from "next/link";
import React from "react";
import Image from "next/image";

export interface CardHoverOverlayProps {
    title: string;
    categories: Array<"web" | "mobile">;
    href?: string;
    img?: string
}

interface SingleCategoryCardProps extends Omit<CardHoverOverlayProps, "categories"> {
    category?: string;
}

const CardHoverOverlay: React.FC<SingleCategoryCardProps> = ({ title, category, href = "", img = "https://placehold.co/600x400" }) => {
    return (
        <div className="group relative overflow-hidden rounded-lg cursor-pointer shadow-md">
            <div className="aspect-video bg-gray-200 w-full">
                <Link href={href}>
                    <Image
                        className="w-full h-full object-cover"
                        src={img}
                        alt={title}
                        fill
                    />
                </Link>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{title}</h3>
                <p className="text-gray-200">{category}</p>
            </div>
        </div>
    );
};


export { CardHoverOverlay };