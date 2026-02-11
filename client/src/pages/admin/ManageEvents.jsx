import { useState } from 'react';
import DataTable from '../../components/admin/DataTable';
import { Plus } from 'lucide-react';
import EventForm from '../../components/admin/forms/EventForm';
import { useToast } from '../../context/ToastContext';

const ManageEvents = () => {
    const [events, setEvents] = useState([
        { id: 1, title: 'Tech Symposium', date: '2024-04-10', location: 'Main Auditorium' },
        { id: 2, title: 'Annual Sports Meet', date: '2024-03-25', location: 'College Ground' },
        { id: 3, title: 'Alumni Meet', date: '2024-05-01', location: 'Conference Hall' },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(null);
    const { addToast } = useToast();

    const columns = [
        { header: 'Event Title', accessor: 'title' },
        { header: 'Date', accessor: 'date' },
        { header: 'Location', accessor: 'location' },
    ];

    const handleAdd = () => {
        setCurrentEvent(null);
        setIsModalOpen(true);
    };

    const handleEdit = (item) => {
        setCurrentEvent(item);
        setIsModalOpen(true);
    };

    const handleDelete = (item) => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            setEvents(events.filter((e) => e.id !== item.id));
            addToast('Event deleted successfully', 'success');
        }
    };

    const handleSubmit = (formData) => {
        if (currentEvent) {
            setEvents(events.map((e) => (e.id === currentEvent.id ? { ...e, ...formData } : e)));
            addToast('Event updated successfully', 'success');
        } else {
            setEvents([...events, { id: Date.now(), ...formData }]);
            addToast('Event created successfully', 'success');
        }
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Manage Events</h1>
                <button
                    onClick={handleAdd}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Plus size={20} />
                    <span>Add Event</span>
                </button>
            </div>

            <DataTable
                columns={columns}
                data={events}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            {isModalOpen && (
                <EventForm
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleSubmit}
                    initialData={currentEvent}
                />
            )}
        </div>
    );
};

export default ManageEvents;
