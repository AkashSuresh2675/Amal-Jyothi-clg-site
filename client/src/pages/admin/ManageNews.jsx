import { useState } from 'react';
import DataTable from '../../components/admin/DataTable';
import { Plus } from 'lucide-react';
import NewsForm from '../../components/admin/forms/NewsForm';
import { useToast } from '../../context/ToastContext';

const ManageNews = () => {
    const [news, setNews] = useState([
        { id: 1, title: 'College Fest 2024', date: '2024-03-15', author: 'Admin' },
        { id: 2, title: 'New Research Center Opening', date: '2024-02-28', author: 'Editor' },
        { id: 3, title: 'Exam Schedule Released', date: '2024-02-20', author: 'Admin' },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentNews, setCurrentNews] = useState(null);
    const { addToast } = useToast();

    const columns = [
        { header: 'Title', accessor: 'title' },
        { header: 'Date', accessor: 'date' },
        { header: 'Author', accessor: 'author' },
    ];

    const handleAdd = () => {
        setCurrentNews(null);
        setIsModalOpen(true);
    };

    const handleEdit = (item) => {
        setCurrentNews(item);
        setIsModalOpen(true);
    };

    const handleDelete = (item) => {
        if (window.confirm('Are you sure you want to delete this news item?')) {
            setNews(news.filter((n) => n.id !== item.id));
            addToast('News item deleted successfully', 'success');
        }
    };

    const handleSubmit = (formData) => {
        if (currentNews) {
            // Update existing
            setNews(news.map((n) => (n.id === currentNews.id ? { ...n, ...formData } : n)));
            addToast('News updated successfully', 'success');
        } else {
            // Add new
            setNews([...news, { id: Date.now(), ...formData, author: 'Admin' }]);
            addToast('News created successfully', 'success');
        }
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Manage News</h1>
                <button
                    onClick={handleAdd}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Plus size={20} />
                    <span>Add News</span>
                </button>
            </div>

            <DataTable
                columns={columns}
                data={news}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            {isModalOpen && (
                <NewsForm
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleSubmit}
                    initialData={currentNews}
                />
            )}
        </div>
    );
};

export default ManageNews;
