import React from 'react';
import { BookOpen, FlaskConical, Users, Award, ExternalLink } from 'lucide-react';

const Research = () => {
    const stats = [
        { label: "Publications", value: "250+", icon: BookOpen },
        { label: "Research Centers", value: "10+", icon: FlaskConical },
        { label: "Ph.D. Scholars", value: "40+", icon: Users },
        { label: "Patents", value: "15+", icon: Award }
    ];

    const centers = [
        {
            title: "Center for Advanced Computing",
            description: "Focusing on AI, Machine Learning, and Data Science research.",
            head: "Dr. John Doe",
            projects: 12
        },
        {
            title: "Renewable Energy Research Center",
            description: "Dedicated to sustainable energy solutions and solar power innovations.",
            head: "Dr. Jane Smith",
            projects: 8
        },
        {
            title: "Material Science Lab",
            description: "Researching nanomaterials and their applications in engineering.",
            head: "Dr. Robert Wilson",
            projects: 15
        },
        {
            title: "Robotics & Automation Hub",
            description: "Developing autonomous systems and industrial automation solutions.",
            head: "Dr. Sarah Brown",
            projects: 10
        }
    ];

    const publications = [
        {
            title: "Deep Learning Approaches for Medical Imaging",
            authors: "A. Kumar, B. Singh, C. Thomas",
            journal: "International Journal of Computer Vision",
            year: 2023
        },
        {
            title: "Sustainable Concrete using Industrial Waste",
            authors: "D. Mathew, E. George",
            journal: "Journal of Sustainable Materials",
            year: 2023
        },
        {
            title: "IoT based Smart Farming System",
            authors: "F. Joseph, G. Nair",
            journal: "IEEE Internet of Things Journal",
            year: 2022
        }
    ];

    return (
        <div className="pt-16 min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-primary-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Research & Innovation</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Fostering a culture of inquiry and innovation to solve real-world challenges through cutting-edge research.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 -mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                                    <stat.icon size={24} />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Research Centers */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Centers</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {centers.map((center, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-primary-700 mb-2">{center.title}</h3>
                                <p className="text-gray-600 mb-4">{center.description}</p>
                                <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4">
                                    <span>Head: <span className="font-medium text-gray-900">{center.head}</span></span>
                                    <span>{center.projects} Ongoing Projects</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Publications */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Publications</h2>
                    <div className="space-y-4">
                        {publications.map((pub, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{pub.title}</h3>
                                    <p className="text-sm text-gray-600 mb-1">{pub.authors}</p>
                                    <p className="text-sm text-primary-600 italic">{pub.journal} • {pub.year}</p>
                                </div>
                                <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <button className="text-primary-600 font-medium hover:text-primary-700">View All Publications →</button>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Research Team</h2>
                    <p className="text-gray-600 mb-8">
                        Are you passionate about research? We offer Ph.D. programs and research fellowships in various disciplines.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors">
                            Apply for Ph.D.
                        </button>
                        <button className="bg-white text-primary-600 border border-primary-600 px-6 py-3 rounded-md font-medium hover:bg-primary-50 transition-colors">
                            Contact Dean (Research)
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Research;
