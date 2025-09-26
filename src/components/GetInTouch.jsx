import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, ArrowRight } from 'lucide-react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    brandname: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual email service integration
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+919008173623'; // Replace with your actual WhatsApp number
    const message = encodeURIComponent('Hi! I\'m interested in your marketing services and would like to discuss a potential project.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-black to-accent-900/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-display font-bold text-5xl lg:text-7xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let's Build Something <br />
            <span className="gradient-text">Together</span>
          </motion.h1>
          
          <motion.p
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to transform your brand with cutting-edge UGC and influencer marketing? 
            Get in touch with our team and let's create something amazing.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-3xl lg:text-4xl mb-8">
                Send us a <span className="gradient-text">Message</span>
              </h2>
              
              {submitted ? (
                <motion.div
                  className="glass-card p-8 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <motion.svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-gray-400 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Brand Name *
                    </label>
                    <input
                      type="text"
                      id="brandname"
                      name="brandname"
                      value={formData.brandname}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-accent-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-accent-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-accent-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-accent-500 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                      placeholder="Tell us about your project and goals..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center space-x-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Info & WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display font-bold text-3xl lg:text-4xl mb-8">
                  Get in <span className="gradient-text">Touch</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  We're here to help you succeed. Choose the method that works best for you, 
                  and we'll get back to you as soon as possible.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <motion.div
                  className="glass-card p-6 flex items-start space-x-4 group hover:border-accent-500/50 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                    <p className="text-gray-400 mb-2">Send us a detailed message and we'll respond within 24 hours.</p>
                    <a href="mailto:hello@NFLUZ.agency" className="text-accent-400 hover:text-accent-300 transition-colors">
                      nfluxmedia@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="glass-card p-6 flex items-start space-x-4 group hover:border-accent-500/50 transition-all duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  onClick={handleWhatsAppClick}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">WhatsApp Direct</h3>
                    <p className="text-gray-400 mb-2">Chat with us directly for immediate responses and quick questions.</p>
                    <span className="text-green-400 hover:text-green-300 transition-colors flex items-center space-x-2">
                      <span>Start Chat</span>
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </motion.div>

                {/* <motion.div
                  className="glass-card p-6 flex items-start space-x-4 group hover:border-accent-500/50 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Schedule a Call</h3>
                    <p className="text-gray-400 mb-2">Book a free consultation call to discuss your project in detail.</p>
                    <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                      Book Meeting
                    </a>
                  </div>
                </motion.div> */}
              </div>

              {/* Office Info */}
              {/* <motion.div
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Office</h3>
                    <p className="text-gray-400">
                      123 Marketing Street<br />
                      Digital District, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long does it take to see results from UGC campaigns?",
                answer: "Typically, you'll start seeing engagement within the first week, with significant results becoming apparent within 30-60 days depending on your campaign goals and industry."
              },
              {
                question: "What's the minimum budget for working with NFLUZ?",
                answer: "Our campaigns start at $5,000 per month, which includes strategy development, content creation, and campaign management. We'll work with you to create a custom package that fits your budget."
              },
              {
                question: "Do you work with businesses in all industries?",
                answer: "We work with most industries, with particular expertise in fashion, beauty, fitness, healthcare, FMCG, and wellness. We'd be happy to discuss your specific industry requirements."
              },
              {
                question: "How do you measure campaign success?",
                answer: "We track comprehensive metrics including reach, engagement, conversions, ROI, brand sentiment, and custom KPIs specific to your business goals. You'll receive detailed monthly reports."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;