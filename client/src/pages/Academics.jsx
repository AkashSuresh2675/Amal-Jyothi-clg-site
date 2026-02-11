import React from 'react';
import { BookOpen, Code, Cpu, Globe, Database } from 'lucide-react';

const Academics = () => {
    const programs = [
        {
            id: 1,
            title: "Computer Science & Engineering",
            degree: "B.Tech",
            duration: "4 Years",
            icon: <Code className="w-8 h-8 text-blue-600" />,
            description: "Comprehensive curriculum covering algorithms, software development, AI, and deeper computer systems.",
            demoLink: "#"
        },
        {
            id: 2,
            title: "Information Technology",
            degree: "B.Tech",
            duration: "4 Years",
            icon: <Globe className="w-8 h-8 text-green-600" />,
            description: "Focus on network systems, web technologies, and information management strategies.",
            demoLink: "#"
        },
        {
            id: 3,
            title: "Electronics & Communication",
            degree: "B.Tech",
            duration: "4 Years",
            icon: <Cpu className="w-8 h-8 text-purple-600" />,
            description: "Study of electronic circuits, communication systems, and embedded technologies.",
            demoLink: "#"
        },
        {
            id: 4,
            title: "Master of Computer Applications",
            degree: "MCA",
            duration: "2 Years",
            icon: <Database className="w-8 h-8 text-orange-600" />,
            description: "Advanced post-graduate program focusing on application development and enterprise software.",
            demoLink: "#"
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-primary-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Academic Programs</h1>
                    <p className="text-xl text-center text-primary-100 max-w-2xl mx-auto">
                        Discover our diverse range of undergraduate and postgraduate programs designed to shape the future of technology.
                    </p>
                </div>
            </div>

            {/* Programs Grid */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {programs.map((program) => (
                        <div key={program.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                            <div className="p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        {program.icon}
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                                        {program.degree}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                                <div className="flex items-center text-gray-500 text-sm mb-4">
                                    <BookOpen className="w-4 h-4 mr-2" />
                                    <span>{program.duration}</span>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    {program.description}
                                </p>
                                <button className="w-full bg-white border border-primary-600 text-primary-600 font-semibold py-2 px-4 rounded-lg hover:bg-primary-50 transition-colors">
                                    View Curriculum
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Demo Programs Section */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Demo Programs Showcase</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explore some of the student projects and demo applications created by our students.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Demo Item 1 */}
                        <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-48 flex items-center justify-center">
                                <span className="text-white text-2xl font-bold">AI Chatbot</span>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                                <h3 className="text-white text-xl font-bold mb-2">AI Assistance Bot</h3>
                                <p className="text-gray-200 text-sm mb-4">A natural language processing bot for student queries.</p>
                                <button className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-200">Try Demo</button>
                            </div>
                        </div>

                        {/* Demo Item 2 */}
                        <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer">
                            <div className="bg-gradient-to-r from-green-500 to-teal-600 h-48 flex items-center justify-center">
                                <span className="text-white text-2xl font-bold">Smart Campus</span>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                                <h3 className="text-white text-xl font-bold mb-2">IoT Dashboard</h3>
                                <p className="text-gray-200 text-sm mb-4">Real-time monitoring of campus energy consumption.</p>
                                <button className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-200">View Live</button>
                            </div>
                        </div>

                        {/* Demo Item 3 */}
                        <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer">
                            <div className="bg-gradient-to-r from-orange-500 to-red-600 h-48 flex items-center justify-center">
                                <span className="text-white text-2xl font-bold">E-Library</span>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                                <h3 className="text-white text-xl font-bold mb-2">Digital Library</h3>
                                <p className="text-gray-200 text-sm mb-4">Access thousands of research papers and books online.</p>
                                <button className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-200">Browse</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academics;
