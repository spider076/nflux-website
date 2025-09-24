import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const portfolioImages = [
    {
      src: '/api/placeholder/800/600',
      title: 'Fashion Brand Campaign',
      description: 'Viral UGC campaign that increased brand awareness by 250%',
      category: 'Fashion',
    },
    {
      src: '/api/placeholder/800/600',
      title: 'Healthcare Innovation',
      description: 'Authentic storytelling that built trust and credibility',
      category: 'Healthcare',
    },
    {
      src: '/api/placeholder/800/600',
      title: 'Fitness Transformation',
      description: 'Influencer partnerships driving 300% ROI',
      category: 'Fitness',
    },
    {
      src: '/api/placeholder/800/600',
      title: 'Beauty Revolution',
      description: 'UGC content that converted viewers to loyal customers',
      category: 'Beauty',
    },
  ];

  const testimonials = [
    {
      text: "Working with NFLUZ was a game-changer. Their UGC strategy helped us reach millions and convert 40% more customers.",
      author: "Jessica Martinez",
      position: "CEO, BeautyBrand",
      platform: "Instagram",
      rating: 5
    },
    {
      text: "The influencer partnerships they arranged were perfect for our brand. Authentic, engaging, and results-driven.",
      author: "David Thompson",
      position: "Marketing Director, FitLife",
      platform: "WhatsApp",
      rating: 5
    },
    {
      text: "NFLUZ delivered beyond our expectations. Their creative approach and execution was flawless.",
      author: "Sarah Chen",
      position: "Brand Manager, TechStart",
      platform: "Facebook",
      rating: 5
    },
    {
      text: "The ROI from our campaigns with NFLUZ has been incredible. Highly recommend their services!",
      author: "Michael Rodriguez",
      position: "CMO, EcoFriendly",
      platform: "Instagram",
      rating: 5
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-black to-accent-900/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-display font-bold text-5xl lg:text-7xl mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="gradient-text">WHAT WE DO</span>
          </motion.h1>
          
          <motion.p
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We transform your brand into a digital powerhouse through cutting-edge UGC and influencer marketing strategies
          </motion.p>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-10 lg:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-video lg:aspect-[21/9] rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-3xl border border-white/10 relative overflow-hidden">
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/50 to-accent-600/50"></div>
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                      <div className="p-8 lg:p-12">
                        <span className="inline-block px-4 py-2 bg-accent-500 text-black font-semibold rounded-full text-sm mb-4">
                          {portfolioImages[currentSlide].category}
                        </span>
                        <h3 className="font-display font-bold text-3xl lg:text-4xl mb-4 text-white">
                          {portfolioImages[currentSlide].title}
                        </h3>
                        <p className="text-xl text-gray-300 max-w-2xl">
                          {portfolioImages[currentSlide].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {portfolioImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-accent-400' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
              Client <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real feedback from real clients who've experienced the NFLUZ difference
            </p>
          </motion.div>

          {/* Draggable testimonials container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 lg:p-8 cursor-grab active:cursor-grabbing hover:border-accent-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                drag="y"
                dragConstraints={{ top: -10, bottom: 10 }}
                dragElastic={0.1}
              >
                {/* Platform badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    testimonial.platform === 'Instagram' 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                      : testimonial.platform === 'WhatsApp'
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-500 text-white'
                  }`}>
                    {testimonial.platform}
                  </span>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-accent-400 fill-current" />
                    ))}
                  </div>
                </div>

                <Quote className="text-accent-400 mb-4" size={32} />
                <p className="text-gray-300 text-lg mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.position}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/get-in-touch" className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4">
              <span>Get Started</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid Preview */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
              Our <span className="gradient-text">Recent Work</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((item, index) => (
              <motion.div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary-500/30 to-accent-500/30 border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-accent-500 text-black font-semibold rounded-full text-sm mb-2">
                        {item.category}
                      </span>
                      <h3 className="font-semibold text-xl text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;