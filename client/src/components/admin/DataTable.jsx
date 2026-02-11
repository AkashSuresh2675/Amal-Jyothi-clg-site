import { Edit, Trash2 } from 'lucide-react';

const DataTable = ({ columns, data, onEdit, onDelete, actions = true }) => {
    return (
        <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-100">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                        {columns.map((col, index) => (
                            <th key={index} className="p-4 font-semibold text-gray-600 text-sm">
                                {col.header}
                            </th>
                        ))}
                        {actions && <th className="p-4 font-semibold text-gray-600 text-sm text-right">Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((row, rowIndex) => (
                            <tr key={rowIndex} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                {columns.map((col, colIndex) => (
                                    <td key={colIndex} className="p-4 text-sm text-gray-700">
                                        {col.render ? col.render(row) : row[col.accessor]}
                                    </td>
                                ))}
                                {actions && (
                                    <td className="p-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            {onEdit && (
                                                <button
                                                    onClick={() => onEdit(row)}
                                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                    title="Edit"
                                                >
                                                    <Edit size={16} />
                                                </button>
                                            )}
                                            {onDelete && (
                                                <button
                                                    onClick={() => onDelete(row)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length + (actions ? 1 : 0)} className="p-8 text-center text-gray-500">
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
