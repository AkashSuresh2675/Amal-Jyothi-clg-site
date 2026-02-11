import { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

const Toast = ({ type = 'info', message, onClose, duration = 3000 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const icons = {
        success: <CheckCircle size={20} className="text-green-500" />,
        error: <AlertCircle size={20} className="text-red-500" />,
        info: <Info size={20} className="text-blue-500" />,
    };

    const bgColors = {
        success: 'bg-green-50 border-green-200',
        error: 'bg-red-50 border-red-200',
        info: 'bg-blue-50 border-blue-200',
    };

    return (
        <div className={`flex items-center gap-3 px-4 py-3 rounded-lg border shadow-md min-w-[300px] animate-slide-in ${bgColors[type]}`}>
            {icons[type]}
            <p className="flex-1 text-sm font-medium text-gray-800">{message}</p>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <X size={16} />
            </button>
        </div>
    );
};

export default Toast;
