import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Integrate with API
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Amal Jyothi College of Engineering', 'Koovappally P.O, Kottayam', 'Kerala - 686518, India'],
      color: 'bg-blue-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 4828 20 3000', '+91 4828 20 3001', 'Fax: +91 4828 20 3002'],
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@ajce.in', 'admission@ajce.in', 'placement@ajce.in'],
      color: 'bg-purple-500'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Closed'],
      color: 'bg-orange-500'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-100">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center p-6">
              <div className={`${info.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <info.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                {info.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Contact Form & Map */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Map & Additional Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us</h2>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 mb-6 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.0!2d76.6!3d9.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzYnMDAuMCJOIDc2wrAzNicwMC4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="AJCE Location"
              ></iframe>
            </div>

            {/* Quick Contact */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Admissions</h4>
                  <p className="text-gray-600 text-sm">Phone: +91 4828 20 3010</p>
                  <p className="text-gray-600 text-sm">Email: admission@ajce.in</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Placement Cell</h4>
                  <p className="text-gray-600 text-sm">Phone: +91 4828 20 3020</p>
                  <p className="text-gray-600 text-sm">Email: placement@ajce.in</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">General Inquiries</h4>
                  <p className="text-gray-600 text-sm">Phone: +91 4828 20 3000</p>
                  <p className="text-gray-600 text-sm">Email: info@ajce.in</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
