// ===== AJCE WEBSITE DATA LAYER =====

export interface Department {
    slug: string;
    name: string;
    shortName: string;
    tagline: string;
    description: string;
    icon: string;
    level: 'btech' | 'mtech' | 'mca';
    highlights: string[];
    labs: string[];
    hod: string;
}

export interface NewsItem {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: 'academic' | 'event' | 'placement' | 'achievement';
    image?: string;
}

export interface EventItem {
    id: string;
    title: string;
    date: string;
    time: string;
    venue: string;
    category: string;
}

export interface Testimonial {
    id: string;
    name: string;
    batch: string;
    department: string;
    quote: string;
    role: string;
    company: string;
    avatar?: string;
}

export interface Recruiter {
    name: string;
    logo?: string;
}

export interface Stat {
    label: string;
    value: number;
    suffix: string;
}

// ===== NAVIGATION =====
export const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
        name: 'Academics',
        href: '/academics',
        children: [
            { name: 'All Programs', href: '/academics' },
            { name: 'B.Tech Programs', href: '/academics#btech' },
            { name: 'M.Tech Programs', href: '/academics#mtech' },
            { name: 'MCA', href: '/academics/mca' },
        ],
    },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Campus Life', href: '/campus-life' },
    { name: 'Research', href: '/research' },
    { name: 'Placements', href: '/placements' },
    { name: 'Contact', href: '/contact' },
];

// ===== STATS =====
export const stats: Stat[] = [
    { label: 'Years of Excellence', value: 25, suffix: '+' },
    { label: 'Students & Alumni', value: 5000, suffix: '+' },
    { label: 'Placement Rate', value: 95, suffix: '%' },
    { label: 'Departments', value: 9, suffix: '' },
    { label: 'Faculty Members', value: 200, suffix: '+' },
    { label: 'Research Papers', value: 500, suffix: '+' },
];

// ===== DEPARTMENTS =====
export const departments: Department[] = [
    // B.Tech Programs
    {
        slug: 'automobile-engineering',
        name: 'Automobile Engineering',
        shortName: 'AU',
        tagline: 'Driving the future of mobility',
        description: 'Our Automobile Engineering program prepares students for careers in the rapidly evolving automotive industry. From electric vehicles to autonomous driving, our curriculum covers cutting-edge technologies that are reshaping transportation.',
        icon: 'Car',
        level: 'btech',
        highlights: ['Electric Vehicle Lab', 'SAE Club', 'Industry Partnerships with Tata Motors & Maruti'],
        labs: ['IC Engine Lab', 'Automobile Chassis Lab', 'EV Research Center', 'CAD/CAE Lab'],
        hod: 'Dr. Thomas Mathew',
    },
    {
        slug: 'civil-engineering',
        name: 'Civil Engineering',
        shortName: 'CE',
        tagline: 'Building the foundations of tomorrow',
        description: 'Civil Engineering at AJCE focuses on sustainable construction, smart infrastructure, and environmental engineering. Students gain hands-on experience through real-world projects and industry collaborations.',
        icon: 'Building2',
        level: 'btech',
        highlights: ['Green Building Research', 'Smart City Projects', 'ASCE Student Chapter'],
        labs: ['Structural Engineering Lab', 'Geotechnical Lab', 'Environmental Engineering Lab', 'Surveying Lab'],
        hod: 'Dr. Mary Joseph',
    },
    {
        slug: 'chemical-engineering',
        name: 'Chemical Engineering',
        shortName: 'CH',
        tagline: 'Innovating through matter and energy',
        description: 'Chemical Engineering at AJCE bridges chemistry and engineering to solve real-world problems in energy, materials, and pharmaceuticals. Our program emphasizes process optimization and sustainable manufacturing.',
        icon: 'FlaskConical',
        level: 'btech',
        highlights: ['Process Simulation Lab', 'Petrochemical Research', 'Green Chemistry Initiatives'],
        labs: ['Process Control Lab', 'Heat Transfer Lab', 'Mass Transfer Lab', 'Chemical Reaction Engineering Lab'],
        hod: 'Dr. Sajan George',
    },
    {
        slug: 'computer-science-engineering',
        name: 'Computer Science & Engineering',
        shortName: 'CSE',
        tagline: 'Coding the digital frontier',
        description: 'CSE at AJCE is our flagship program, producing top-tier software engineers and tech innovators. With a curriculum aligned to industry needs, students master AI/ML, cloud computing, cybersecurity, and full-stack development.',
        icon: 'Code2',
        level: 'btech',
        highlights: ['AI/ML Research Center', 'Hackathon Champions', '100% Placement Record', 'Google DSC'],
        labs: ['AI & Machine Learning Lab', 'Cloud Computing Lab', 'Cybersecurity Lab', 'Software Engineering Lab', 'IoT Lab'],
        hod: 'Dr. Anitha Sebastian',
    },
    {
        slug: 'electronics-communication-engineering',
        name: 'Electronics & Communication Engineering',
        shortName: 'ECE',
        tagline: 'Connecting the world',
        description: 'ECE at AJCE prepares students for the interconnected world of 5G, IoT, and embedded systems. Our program combines theoretical foundations with practical skills in communication systems and VLSI design.',
        icon: 'Radio',
        level: 'btech',
        highlights: ['5G Research Lab', 'VLSI Design Center', 'IEEE Student Branch'],
        labs: ['Communication Systems Lab', 'VLSI Lab', 'Microprocessor Lab', 'Signal Processing Lab'],
        hod: 'Dr. Philip Jacob',
    },
    {
        slug: 'electrical-electronics-engineering',
        name: 'Electrical & Electronics Engineering',
        shortName: 'EEE',
        tagline: 'Powering innovation',
        description: 'EEE at AJCE focuses on power systems, renewable energy, and smart grid technologies. Students learn to design sustainable energy solutions and advanced electrical systems.',
        icon: 'Zap',
        level: 'btech',
        highlights: ['Solar Energy Research', 'Smart Grid Lab', 'Power Electronics Center'],
        labs: ['Power Systems Lab', 'Electrical Machines Lab', 'Power Electronics Lab', 'Control Systems Lab'],
        hod: 'Dr. Binu Mathew',
    },
    {
        slug: 'information-technology',
        name: 'Information Technology',
        shortName: 'IT',
        tagline: 'Mastering information systems',
        description: 'IT at AJCE focuses on the practical application of technology in business and society. From web technologies to database management, students develop skills to drive digital transformation.',
        icon: 'Monitor',
        level: 'btech',
        highlights: ['Web Technologies Lab', 'Data Analytics Center', 'Industry-Ready Curriculum'],
        labs: ['Network Lab', 'Database Lab', 'Web Development Lab', 'Mobile Computing Lab'],
        hod: 'Dr. Sonia Jose',
    },
    {
        slug: 'mechanical-engineering',
        name: 'Mechanical Engineering',
        shortName: 'ME',
        tagline: 'Engineering in motion',
        description: 'Mechanical Engineering at AJCE combines classical engineering principles with modern technologies like 3D printing, robotics, and CAD/CAM. Students build machines that shape the future.',
        icon: 'Cog',
        level: 'btech',
        highlights: ['3D Printing Lab', 'Robotics Club', 'SAE Baja Team', 'Industry 4.0 Center'],
        labs: ['Manufacturing Lab', 'Thermal Engineering Lab', 'Fluid Mechanics Lab', 'CAD/CAM Lab', 'Robotics Lab'],
        hod: 'Dr. John Kurian',
    },
    {
        slug: 'metallurgy',
        name: 'Metallurgy',
        shortName: 'MT',
        tagline: 'Forging new possibilities',
        description: 'Metallurgy at AJCE explores the science of metals and materials. From nanomaterials to advanced alloys, students learn to engineer materials that enable technological progress.',
        icon: 'Hammer',
        level: 'btech',
        highlights: ['Materials Testing Lab', 'Nanomaterials Research', 'Industry Collaboration with ISRO'],
        labs: ['Materials Testing Lab', 'Metallography Lab', 'Foundry Lab', 'Heat Treatment Lab'],
        hod: 'Dr. Reji Varghese',
    },

    // M.Tech Programs
    {
        slug: 'mtech-communication-engineering',
        name: 'Communication Engineering',
        shortName: 'M.Tech CE',
        tagline: 'Advanced communication technologies',
        description: 'M.Tech in Communication Engineering offers advanced study in wireless communications, signal processing, and network design.',
        icon: 'Wifi',
        level: 'mtech',
        highlights: ['Research Publications', 'Industry Projects', 'Ph.D. Pathway'],
        labs: ['Advanced Communication Lab', 'Antenna Design Lab'],
        hod: 'Dr. Philip Jacob',
    },
    {
        slug: 'mtech-computer-science',
        name: 'Computer Science & Engineering (PG)',
        shortName: 'M.Tech CSE',
        tagline: 'Research-driven computing',
        description: 'M.Tech CSE focuses on advanced topics in AI, data science, and distributed computing with emphasis on research methodology.',
        icon: 'BrainCircuit',
        level: 'mtech',
        highlights: ['AI Research', 'Publications in Top Journals', 'Industry Collaboration'],
        labs: ['Advanced Computing Lab', 'Research Lab'],
        hod: 'Dr. Anitha Sebastian',
    },
    {
        slug: 'mtech-energy-systems',
        name: 'Energy Systems',
        shortName: 'M.Tech ES',
        tagline: 'Sustainable energy solutions',
        description: 'M.Tech in Energy Systems covers renewable energy technologies, energy management, and sustainable development.',
        icon: 'Sun',
        level: 'mtech',
        highlights: ['Solar Research', 'Renewable Energy Projects', 'Industry Partnerships'],
        labs: ['Renewable Energy Lab', 'Energy Audit Lab'],
        hod: 'Dr. Binu Mathew',
    },
    {
        slug: 'mtech-structural-engineering',
        name: 'Structural Engineering & Construction Management',
        shortName: 'M.Tech SE',
        tagline: 'Building resilient structures',
        description: 'M.Tech in Structural Engineering focuses on advanced structural analysis, earthquake engineering, and construction project management.',
        icon: 'Construction',
        level: 'mtech',
        highlights: ['Earthquake Research', 'BIM Integration', 'Consultancy Projects'],
        labs: ['Advanced Structures Lab', 'Construction Materials Lab'],
        hod: 'Dr. Mary Joseph',
    },
    {
        slug: 'mtech-machine-design',
        name: 'Machine Design',
        shortName: 'M.Tech MD',
        tagline: 'Designing the machines of tomorrow',
        description: 'M.Tech in Machine Design covers advanced topics in mechanical design, FEA, and product development.',
        icon: 'Settings',
        level: 'mtech',
        highlights: ['FEA Research', 'Product Design Projects', 'CAD/CAE Expertise'],
        labs: ['Advanced CAD Lab', 'FEA Lab'],
        hod: 'Dr. John Kurian',
    },
    {
        slug: 'mtech-power-electronics',
        name: 'Power Electronics & Power Systems',
        shortName: 'M.Tech PE',
        tagline: 'Advanced power technologies',
        description: 'M.Tech in Power Electronics focuses on advanced power conversion, smart grid technologies, and electric drives.',
        icon: 'PlugZap',
        level: 'mtech',
        highlights: ['Smart Grid Research', 'EV Power Systems', 'Industry Projects'],
        labs: ['Power Electronics Lab', 'Smart Grid Lab'],
        hod: 'Dr. Binu Mathew',
    },
    {
        slug: 'mtech-nanotechnology',
        name: 'Nano Technology',
        shortName: 'M.Tech NT',
        tagline: 'Engineering at the nanoscale',
        description: 'M.Tech in Nanotechnology explores the fascinating world of nanomaterials, nanodevices, and their applications across industries.',
        icon: 'Atom',
        level: 'mtech',
        highlights: ['Nanomaterials Research', 'Publications in Nature', 'Inter-disciplinary Projects'],
        labs: ['Nano Characterization Lab', 'Nano Fabrication Lab'],
        hod: 'Dr. Reji Varghese',
    },

    // MCA
    {
        slug: 'mca',
        name: 'Master of Computer Applications',
        shortName: 'MCA',
        tagline: 'Application-focused computing excellence',
        description: 'The MCA program at AJCE offers a comprehensive curriculum in software development, data science, and IT management. Available in 2-Year, Dual Degree, and Integrated formats.',
        icon: 'AppWindow',
        level: 'mca',
        highlights: ['2-Year / Dual Degree / Integrated Options', 'Full-Stack Development', '100% Placement Assistance'],
        labs: ['Software Development Lab', 'Mobile App Lab', 'Cloud Computing Lab', 'Data Science Lab'],
        hod: 'Dr. Sonia Jose',
    },
];

// ===== NEWS =====
export const newsItems: NewsItem[] = [
    {
        id: '1',
        title: 'AJCE Secures NAAC A++ Accreditation',
        excerpt: 'Amal Jyothi College of Engineering has been awarded A++ grade by NAAC, reflecting the institution\'s commitment to academic excellence.',
        date: '2026-02-05',
        category: 'academic',
    },
    {
        id: '2',
        title: 'TCS Recruits 120 Students in Campus Drive',
        excerpt: 'TCS conducted its annual recruitment drive at AJCE, offering positions to 120 final-year students across multiple departments.',
        date: '2026-01-28',
        category: 'placement',
    },
    {
        id: '3',
        title: 'National Level Hackathon "CodeStorm 2026"',
        excerpt: 'AJCE\'s CSE department hosted CodeStorm 2026 with participation from over 500 students across India.',
        date: '2026-01-20',
        category: 'event',
    },
    {
        id: '4',
        title: 'AJCE Research Paper Accepted in IEEE Conference',
        excerpt: 'Faculty members from ECE department have published groundbreaking research on 5G communication protocols.',
        date: '2026-01-15',
        category: 'achievement',
    },
];

// ===== EVENTS =====
export const events: EventItem[] = [
    {
        id: '1',
        title: 'Tech Fest "Dyuthi 2026"',
        date: '2026-03-15',
        time: '9:00 AM',
        venue: 'Main Auditorium',
        category: 'Festival',
    },
    {
        id: '2',
        title: 'Industry Expert Talk: AI in Healthcare',
        date: '2026-02-20',
        time: '2:00 PM',
        venue: 'Seminar Hall',
        category: 'Seminar',
    },
    {
        id: '3',
        title: 'Inter-College Sports Championship',
        date: '2026-03-01',
        time: '8:00 AM',
        venue: 'Sports Complex',
        category: 'Sports',
    },
    {
        id: '4',
        title: 'International Conference on Nano Materials',
        date: '2026-04-10',
        time: '10:00 AM',
        venue: 'Conference Hall',
        category: 'Conference',
    },
];

// ===== TESTIMONIALS =====
export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Arjun Krishnan',
        batch: '2022',
        department: 'Computer Science & Engineering',
        quote: 'AJCE transformed my career. The faculty mentorship and hands-on projects prepared me for a role at Google. The campus culture is truly inspiring.',
        role: 'Software Engineer',
        company: 'Google',
    },
    {
        id: '2',
        name: 'Sneha Thomas',
        batch: '2021',
        department: 'Electronics & Communication',
        quote: 'The ECE department at AJCE gave me the foundation to innovate. From lab experiments to my current role developing IoT solutions, every lesson mattered.',
        role: 'IoT Solutions Architect',
        company: 'Bosch',
    },
    {
        id: '3',
        name: 'Rahul Menon',
        batch: '2023',
        department: 'Mechanical Engineering',
        quote: 'The practical exposure and industry connections at AJCE are unmatched. I got placed at Tata Motors through campus recruitment in my 7th semester.',
        role: 'Design Engineer',
        company: 'Tata Motors',
    },
    {
        id: '4',
        name: 'Aadhira Nair',
        batch: '2020',
        department: 'Information Technology',
        quote: 'AJCE\'s IT department encouraged me to pursue my passion for data science. Today I lead a data team at Amazon, and I owe it to the foundation I built here.',
        role: 'Data Science Lead',
        company: 'Amazon',
    },
];

// ===== RECRUITERS =====
export const topRecruiters: Recruiter[] = [
    { name: 'TCS' },
    { name: 'Infosys' },
    { name: 'Wipro' },
    { name: 'Google' },
    { name: 'Amazon' },
    { name: 'Microsoft' },
    { name: 'Cognizant' },
    { name: 'Accenture' },
    { name: 'Bosch' },
    { name: 'Tata Motors' },
    { name: 'L&T' },
    { name: 'UST Global' },
    { name: 'IBS Software' },
    { name: 'Federal Bank' },
    { name: 'ISRO' },
    { name: 'HCL' },
];

// ===== CAMPUS FACILITIES =====
export const facilities = [
    { name: 'Central Library', description: 'Over 60,000 books, digital resources, and quiet study spaces', icon: 'BookOpen' },
    { name: 'Sports Complex', description: 'Olympic-standard track, indoor courts, and gymnasium', icon: 'Trophy' },
    { name: 'Hostels', description: 'Separate hostels for men and women with modern amenities', icon: 'Home' },
    { name: 'Auditorium', description: '2000-seat auditorium with state-of-the-art acoustics', icon: 'Theater' },
    { name: 'Cafeteria', description: 'Multi-cuisine cafeteria with healthy food options', icon: 'UtensilsCrossed' },
    { name: 'Innovation Hub', description: 'Incubation center for student startups and projects', icon: 'Lightbulb' },
    { name: 'Medical Center', description: '24/7 medical facility with qualified healthcare professionals', icon: 'HeartPulse' },
    { name: 'Wi-Fi Campus', description: 'High-speed internet across the entire campus', icon: 'Wifi' },
];

// ===== CLUBS =====
export const clubs = [
    { name: 'Google Developer Student Club', category: 'Technical' },
    { name: 'IEEE Student Branch', category: 'Technical' },
    { name: 'SAE Collegiate Club', category: 'Technical' },
    { name: 'Robotics Club', category: 'Technical' },
    { name: 'Literary Club', category: 'Cultural' },
    { name: 'Music Club', category: 'Cultural' },
    { name: 'Dance Crew', category: 'Cultural' },
    { name: 'Drama Club', category: 'Cultural' },
    { name: 'NSS', category: 'Service' },
    { name: 'NCC', category: 'Service' },
    { name: 'Entrepreneurship Cell', category: 'Innovation' },
    { name: 'Photography Club', category: 'Creative' },
];

// ===== RESEARCH AREAS =====
export const researchAreas = [
    { name: 'Artificial Intelligence & Machine Learning', papers: 85, projects: 12 },
    { name: 'Renewable Energy Systems', papers: 62, projects: 8 },
    { name: 'Nanotechnology', papers: 45, projects: 6 },
    { name: 'IoT & Smart Systems', papers: 55, projects: 10 },
    { name: '5G & Communication', papers: 38, projects: 5 },
    { name: 'Structural Engineering', papers: 42, projects: 7 },
    { name: 'Green Chemistry', papers: 30, projects: 4 },
    { name: 'Advanced Materials', papers: 35, projects: 5 },
];

// ===== ADMISSION INFO =====
export const admissionSteps = [
    { step: 1, title: 'Check Eligibility', description: 'Review qualification requirements for your desired program.' },
    { step: 2, title: 'Online Application', description: 'Fill out the online application form with required documents.' },
    { step: 3, title: 'Entrance Exam', description: 'Appear for KEAM / entrance exam as applicable.' },
    { step: 4, title: 'Counselling', description: 'Attend counselling session and select your preferred branch.' },
    { step: 5, title: 'Fee Payment', description: 'Complete fee payment and confirm your admission.' },
    { step: 6, title: 'Welcome to AJCE!', description: 'Begin your journey at Amal Jyothi College of Engineering.' },
];

// ===== LEADERSHIP =====
export const leadership = [
    { name: 'Rev. Fr. Dr. Saji Mathew', title: 'Director', qualification: 'Ph.D. in Management' },
    { name: 'Dr. Joseph V. Thomas', title: 'Principal', qualification: 'Ph.D. in Computer Science' },
    { name: 'Dr. Mary Abraham', title: 'Vice Principal', qualification: 'Ph.D. in Electronics' },
];

// ===== ACCREDITATIONS =====
export const accreditations = [
    { name: 'NAAC', grade: 'A++', description: 'National Assessment and Accreditation Council' },
    { name: 'NBA', grade: 'Accredited', description: 'National Board of Accreditation' },
    { name: 'AICTE', grade: 'Approved', description: 'All India Council for Technical Education' },
    { name: 'KTU', grade: 'Affiliated', description: 'APJ Abdul Kalam Technological University' },
];

// ===== SOCIAL LINKS =====
export const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ajce', icon: 'Facebook' },
    { name: 'Instagram', href: 'https://instagram.com/ajce', icon: 'Instagram' },
    { name: 'Twitter', href: 'https://twitter.com/ajce', icon: 'Twitter' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ajce', icon: 'Linkedin' },
    { name: 'YouTube', href: 'https://youtube.com/ajce', icon: 'Youtube' },
];

// ===== CONTACT INFO =====
export const contactInfo = {
    address: 'Amal Jyothi College of Engineering, Kanjirapally, Kottayam District, Kerala - 686518, India',
    phone: ['+91 4828 249000', '+91 4828 249001'],
    email: ['info@ajce.in', 'admissions@ajce.in'],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.8476!2d76.7891!3d9.5678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzQnMDQuMSJOIDc2wrA0NycyMS42IkU!5e0!3m2!1sen!2sin!4v1234567890',
};
