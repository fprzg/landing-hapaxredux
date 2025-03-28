import React from "react";

interface CommonProps {
    children?: React.ReactNode;
    className?: string;
}

const HorizontallyCentered: React.FC<CommonProps> = ({ children, className }: CommonProps) => {
    return (
        <div className={`flex flex-row justify-center ${className}`}>
            {children}
        </div>
    );
};

const VerticallyCentered: React.FC<CommonProps> = ({ children, className }: CommonProps) => {
    return (
        <div className={`flex flex-col items-center ${className}`}>
            {children}
        </div>
    );
};

export { HorizontallyCentered, VerticallyCentered };