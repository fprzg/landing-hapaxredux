import Image from "next/image";
import React from "react";

interface ImgProps {
    alt?: string;
    src: string;
    width: number;
    height?: number;
    style?: Object;
}

const Img: React.FC<ImgProps> = ({ alt = "", src, width, height = 0, style }: ImgProps) => {
    return (
        <Image
            alt={alt}
            src={src}
            width={width} height={height}
            style={{ width: `${width}px`, height: 'auto', }}
        />
    );
};

export { Img };