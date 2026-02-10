import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Arjun Krishnan',
      role: 'Software Engineer, Google',
      batch: 'CSE 2020',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      quote: 'AJCE provided me with not just technical knowledge, but also the problem-solving mindset needed to excel in the tech industry. The faculty support and industry exposure were exceptional.'
    },
    {
      name: 'Priya Menon',
      role: 'Data Scientist, Microsoft',
      batch: 'CSE 2019',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      quote: 'The research opportunities and modern labs at AJCE helped me develop practical skills. The college truly prepares you for real-world challenges and competitive environments.'
    },
    {
      name: 'Rahul Sharma',
      role: 'Embedded Systems Engineer, Bosch',
      batch: 'ECE 2021',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      quote: 'The hands-on training and project-based learning at AJCE gave me a competitive edge. The placement cell\'s support was instrumental in landing my dream job.'
    },
    {
      name: 'Sneha Thomas',
      role: 'Structural Engineer, L&T',
      batch: 'CE 2020',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      quote: 'AJCE fostered my passion for sustainable building design. The faculty mentorship and industry internships shaped my career path in civil engineering.'
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Alumni Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our successful graduates about their AJCE experience
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-primary-200">
              <Quote className="h-16 w-16" />
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Image */}
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary-100"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary-600 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].batch}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-gray-700 hover:text-primary-600 transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-gray-700 hover:text-primary-600 transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
