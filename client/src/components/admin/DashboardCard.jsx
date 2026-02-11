import { ArrowUp, ArrowDown } from 'lucide-react';

const DashboardCard = ({ title, value, icon, change, changeType, color }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full ${color} bg-opacity-10 text-opacity-100`}>
                    <div className={`${color.replace('bg-', 'text-')}`}>
                        {icon}
                    </div>
                </div>
                {change && (
                    <div className={`flex items-center gap-1 text-sm font-medium ${changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                        }`}>
                        {changeType === 'increase' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                        <span>{change}%</span>
                    </div>
                )}
            </div>
            <div>
                <p className="text-gray-500 text-sm font-medium">{title}</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">{value}</h3>
            </div>
        </div>
    );
};

export default DashboardCard;
