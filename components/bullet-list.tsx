import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface BulletListProps {
    items: string[];
    className?: string;
}

const BulletList: React.FC<BulletListProps> = ({ items, className }: BulletListProps) => {
    return (
        <div className={`max-w-md p-6 bg-white rounded-lg shadow-md ${className}`}>
            <ul className="space-y-4">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BulletList;