import { useState } from 'react';
import DataTable from '../../components/admin/DataTable';
import { Plus } from 'lucide-react';
import DepartmentForm from '../../components/admin/forms/DepartmentForm';
import { useToast } from '../../context/ToastContext';

const ManageDepartments = () => {
    const [departments, setDepartments] = useState([
        { id: 1, name: 'Computer Science', code: 'CSE', head: 'Dr. Smith' },
        { id: 2, name: 'Mechanical Engineering', code: 'ME', head: 'Dr. Johnson' },
        { id: 3, name: 'Civil Engineering', code: 'CE', head: 'Dr. Williams' },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentDept, setCurrentDept] = useState(null);
    const { addToast } = useToast();

    const columns = [
        { header: 'Department', accessor: 'name' },
        { header: 'Code', accessor: 'code' },
        { header: 'Head', accessor: 'head' },
    ];

    const handleAdd = () => {
        setCurrentDept(null);
        setIsModalOpen(true);
    };

    const handleEdit = (item) => {
        setCurrentDept(item);
        setIsModalOpen(true);
    };

    const handleDelete = (item) => {
        if (window.confirm('Are you sure you want to delete this department?')) {
            setDepartments(departments.filter((d) => d.id !== item.id));
            addToast('Department deleted successfully', 'success');
        }
    };

    const handleSubmit = (formData) => {
        if (currentDept) {
            setDepartments(departments.map((d) => (d.id === currentDept.id ? { ...d, ...formData } : d)));
            addToast('Department updated successfully', 'success');
        } else {
            setDepartments([...departments, { id: Date.now(), ...formData }]);
            addToast('Department created successfully', 'success');
        }
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Manage Departments</h1>
                <button
                    onClick={handleAdd}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Plus size={20} />
                    <span>Add Department</span>
                </button>
            </div>

            <DataTable
                columns={columns}
                data={departments}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            {isModalOpen && (
                <DepartmentForm
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleSubmit}
                    initialData={currentDept}
                />
            )}
        </div>
    );
};

export default ManageDepartments;
