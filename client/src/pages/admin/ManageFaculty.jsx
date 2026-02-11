import { useState } from 'react';
import DataTable from '../../components/admin/DataTable';
import { Plus } from 'lucide-react';
import FacultyForm from '../../components/admin/forms/FacultyForm';
import { useToast } from '../../context/ToastContext';

const ManageFaculty = () => {
    const [faculty, setFaculty] = useState([
        { id: 1, name: 'John Doe', department: 'CSE', designation: 'Professor', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', department: 'ME', designation: 'Assistant Professor', email: 'jane@example.com' },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentFaculty, setCurrentFaculty] = useState(null);
    const { addToast } = useToast();

    const columns = [
        { header: 'Name', accessor: 'name' },
        { header: 'Department', accessor: 'department' },
        { header: 'Designation', accessor: 'designation' },
        { header: 'Email', accessor: 'email' },
    ];

    const handleAdd = () => {
        setCurrentFaculty(null);
        setIsModalOpen(true);
    };

    const handleEdit = (item) => {
        setCurrentFaculty(item);
        setIsModalOpen(true);
    };

    const handleDelete = (item) => {
        if (window.confirm('Are you sure you want to delete this faculty member?')) {
            setFaculty(faculty.filter((f) => f.id !== item.id));
            addToast('Faculty deleted successfully', 'success');
        }
    };

    const handleSubmit = (formData) => {
        if (currentFaculty) {
            setFaculty(faculty.map((f) => (f.id === currentFaculty.id ? { ...f, ...formData } : f)));
            addToast('Faculty updated successfully', 'success');
        } else {
            setFaculty([...faculty, { id: Date.now(), ...formData }]);
            addToast('Faculty created successfully', 'success');
        }
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Manage Faculty</h1>
                <button
                    onClick={handleAdd}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Plus size={20} />
                    <span>Add Faculty</span>
                </button>
            </div>

            <DataTable
                columns={columns}
                data={faculty}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            {isModalOpen && (
                <FacultyForm
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleSubmit}
                    initialData={currentFaculty}
                />
            )}
        </div>
    );
};

export default ManageFaculty;
