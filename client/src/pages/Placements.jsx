import React from 'react';
import { Trophy, TrendingUp, Users, Building, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Placements = () => {
    const placementStats = [
        {
            icon: Trophy,
            value: "95%",
            label: "Placement Rate",
            description: "Consistent placement record over the last 5 years"
        },
        {
            icon: TrendingUp,
            value: "12 LPA",
            label: "Highest Package",
            description: "Offered to our students in the current academic year"
        },
        {
            icon: Users,
            value: "500+",
            label: "Offers Made",
            description: "Across various engineering disciplines"
        },
        {
            icon: Building,
            value: "100+",
            label: "Recruiters",
            description: "Top MNCs and Core companies visit annually"
        }
    ];

    const topRecruiters = [
        "TCS", "Infosys", "Wipro", "Cognizant", "IBM", "Accenture",
        "UST Global", "Speridian", "Experion", "Gadgeon", "QBurst", "Poornam"
    ];

    return (
        <div className="pt-16 min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-primary-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Placement Cell
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Bridge between Industry and Academia. We ensure our students are industry-ready and placed in top organizations.
                    </motion.p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 -mt-10 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {placementStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
                            >
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                                    <stat.icon size={24} />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                                <p className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</p>
                                <p className="text-sm text-gray-500">{stat.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Placement Cell */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Placement & Training Cell</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                The Placement and Training Cell at Amal Jyothi College of Engineering is dedicated to ensuring that our students are well-prepared for their professional careers. We act as a catalyst in bridging the gap between the academic curriculum and industry requirements.
                            </p>
                            <p>
                                Our comprehensive training programs include soft skills development, aptitude training, group discussions, and mock interviews. We also facilitate internships and industrial visits to provide practical exposure to our students.
                            </p>
                        </div>

                        <div className="mt-8 grid md:grid-cols-3 gap-6">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-semibold text-lg mb-2">Pre-Placement Training</h3>
                                <p className="text-sm text-gray-600">Rigorous training sessions from first year onwards focusing on aptitude and communication.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-semibold text-lg mb-2">Industry Interaction</h3>
                                <p className="text-sm text-gray-600">Regular tech talks, workshops, and seminars by industry experts.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-semibold text-lg mb-2">Career Guidance</h3>
                                <p className="text-sm text-gray-600">Personalized counseling to help students choose the right career path.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Recruiters */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Top Recruiters</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                        {topRecruiters.map((company, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gray-50 p-6 rounded-lg flex items-center justify-center border border-gray-100 shadow-sm"
                            >
                                <span className="font-semibold text-gray-600 text-lg">{company}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Placement Cell</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 text-primary-600">
                                <Phone size={24} />
                            </div>
                            <p className="font-medium text-gray-900">Phone</p>
                            <p className="text-gray-600">+91 4828 305 555</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 text-primary-600">
                                <Mail size={24} />
                            </div>
                            <p className="font-medium text-gray-900">Email</p>
                            <p className="text-gray-600">placement@ajce.in</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 text-primary-600">
                                <MapPin size={24} />
                            </div>
                            <p className="font-medium text-gray-900">Location</p>
                            <p className="text-gray-600">Main Block, Ground Floor</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Placements;
