import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Star, TrendingUp, Award, Check, ArrowRight, Instagram, Youtube, Camera } from 'lucide-react';

const WorkWithUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    followers: '',
    niche: '',
    experience: '',
    portfolio: '',
    why: ''
  });

  const benefits = [
    {
      icon: Star,
      title: 'Premium Brand Partnerships',
      description: 'Work with top-tier brands in fashion, beauty, wellness, and lifestyle.'
    },
    {
      icon: TrendingUp,
      title: 'Fair Compensation',
      description: 'Competitive rates and long-term partnerships that value your creativity.'
    },
    {
      icon: Users,
      title: 'Creative Community',
      description: 'Join a network of like-minded creators and collaborate on exciting projects.'
    },
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Access to workshops, training, and resources to grow your personal brand.'
    }
  ];

  const requirements = [
    'Authentic engagement with your audience',
    '1K+ followers on your primary platform',
    'High-quality content creation skills',
    'Professional communication and reliability',
    'Alignment with brand values and aesthetics',
    'Consistent posting schedule'
  ];

  const platforms = [
    { name: 'Instagram', icon: Instagram, color: 'from-pink-500 to-purple-500' },
    { name: 'TikTok', icon: Camera, color: 'from-gray-800 to-black' },
    { name: 'YouTube', icon: Youtube, color: 'from-red-500 to-red-600' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Creator application submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-black to-accent-900/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-display font-bold text-5xl lg:text-7xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Join Our <span className="gradient-text">Creators Network</span>
          </motion.h1>
          
          <motion.p
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Partner with premium brands, earn competitive rates, and grow your influence. 
            We connect authentic creators with meaningful brand partnerships.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#apply" className="btn-primary flex items-center space-x-2 text-lg px-8 py-4">
              <span>Apply Now</span>
              <ArrowRight size={20} />
            </a>
            <a href="#benefits" className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4">
              <Users size={20} />
              <span>Learn More</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Platforms Section */}
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
              Multi-Platform <span className="gradient-text">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We work with creators across all major social media platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                className="glass-card p-8 text-center group hover:border-accent-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <platform.icon size={32} className="text-white" />
                </div>
                <h3 className="font-semibold text-2xl">{platform.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
              Why <span className="gradient-text">Creators</span> Choose Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're committed to supporting our creators with the best opportunities and resources
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="glass-card p-8 group hover:border-accent-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon size={32} className="text-white" />
                </div>
                <h3 className="font-semibold text-2xl mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Requirements */}
          <motion.div
            className="glass-card p-8 lg:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display font-bold text-3xl mb-8 text-center">
              What We're Looking For
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-gray-300">{requirement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 lg:py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
              Ready to <span className="gradient-text">Join Us</span>?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Fill out the application below and we'll be in touch within 48 hours
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass-card p-8 lg:p-12 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-300 mb-2">
                  Primary Social Handle *
                </label>
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-accent-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                  placeholder="@yourusername"
                />
              </div>
              
              <div>
                <label htmlFor="followers" className="block text-sm font-medium text-gray-300 mb-2">
                  Follower Count *
                </label>
                <select
                  id="followers"
                  name="followers"
                  value={formData.followers}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-accent-500 focus:outline-none transition-colors text-white"
                >
                  <option value="">Select range</option>
                  <option value="1k-10k">1K - 10K</option>
                  <option value="10k-50k">10K - 50K</option>
                  <option value="50k-100k">50K - 100K</option>
                  <option value="100k-500k">100K - 500K</option>
                  <option value="500k+">500K+</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="niche" className="block text-sm font-medium text-gray-300 mb-2">
                  Content Niche *
                </label>
                <select
                  id="niche"
                  name="niche"
                  value={formData.niche}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-accent-500 focus:outline-none transition-colors text-white"
                >
                  <option value="">Select your niche</option>
                  <option value="fashion">Fashion & Style</option>
                  <option value="beauty">Beauty & Skincare</option>
                  <option value="fitness">Fitness & Health</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="travel">Travel</option>
                  <option value="food">Food & Cooking</option>
                  <option value="tech">Tech & Gadgets</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
                  Brand Collaboration Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-accent-500 focus:outline-none transition-colors text-white"
                >
                  <option value="">Select experience level</option>
                  <option value="none">No prior experience</option>
                  <option value="beginner">1-5 collaborations</option>
                  <option value="intermediate">5-20 collaborations</option>
                  <option value="experienced">20+ collaborations</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="portfolio" className="block text-sm font-medium text-gray-300 mb-2">
                Portfolio/Media Kit URL
              </label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-accent-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                placeholder="https://your-portfolio.com"
              />
            </div>

            <div>
              <label htmlFor="why" className="block text-sm font-medium text-gray-300 mb-2">
                Why do you want to work with NFLUZ? *
              </label>
              <textarea
                id="why"
                name="why"
                value={formData.why}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-accent-500 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                placeholder="Tell us about your goals and why you'd be a great fit for our creator network..."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full btn-primary flex items-center justify-center space-x-2 py-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Submit Application</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Success Stories */}
      {/* <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
              Creator <span className="gradient-text">Success Stories</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Emma Rodriguez",
                handle: "@emma_style",
                niche: "Fashion",
                achievement: "Grew from 5K to 50K followers in 6 months through our brand partnerships"
              },
              {
                name: "Marcus Johnson",
                handle: "@fit_marcus",
                niche: "Fitness",
                achievement: "Earned $25K+ in first year working with premium fitness brands"
              },
              {
                name: "Sofia Chen",
                handle: "@beauty_by_sofia",
                niche: "Beauty",
                achievement: "Became brand ambassador for 3 major beauty companies"
              }
            ].map((creator, index) => (
              <motion.div
                key={creator.name}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {creator.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{creator.name}</h3>
                <p className="text-accent-400 text-sm mb-2">{creator.handle}</p>
                <span className="inline-block px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-xs mb-4">
                  {creator.niche}
                </span>
                <p className="text-gray-400 text-sm leading-relaxed">{creator.achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default WorkWithUs;