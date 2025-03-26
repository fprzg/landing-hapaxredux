import React from 'react';

type PricingTableRow = {
    service: string;
    price: string;
}

interface PricingTableProps {
    services: PricingTableRow[];
}

const PricingTable: React.FC<PricingTableProps> = ({ services }) => {
    return (
        <div className="w-[95%] lg:w-[75%] xl:w-[60%] mx-auto">
            <table className="w-full bg-white shadow-md rounded-2xl">
                <thead>
                    <tr className="bg-blue-600 text-white">
                        <th className="py-3 px-4 text-left">Servicio</th>
                        <th className="py-3 px-4 text-right">Costo</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((item, index) => (
                        <tr
                            key={index}
                            className={`
                ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} 
                hover:bg-gray-100 
                transition-colors 
                duration-200
              `}
                        >
                            <td className="py-3 px-4 text-gray-800">{item.service}</td>
                            <td className="py-3 px-4 text-right font-semibold">{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default PricingTable;