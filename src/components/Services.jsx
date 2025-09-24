import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Target, Zap, BarChart3, Crown, Play, ArrowRight, Instagram, Youtube, Facebook, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: Users,
      title: 'UGC Content Creation',
      description: 'Authentic user-generated content that resonates with your audience and builds genuine connections.',
      features: [
        'Authentic storytelling',
        'Real customer experiences',
        'Platform-optimized content',
        'Brand-aligned messaging'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Influencer Marketing',
      description: 'Strategic partnerships with influencers who align with your brand values and target audience.',
      features: [
        'Micro & macro influencers',
        'Cross-platform campaigns',
        'Performance tracking',
        'ROI optimization'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Brand Strategy',
      description: 'Comprehensive brand positioning and messaging that cuts through the noise and drives results.',
      features: [
        'Brand positioning',
        'Message development',
        'Audience research',
        'Competitive analysis'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Social Media Management',
      description: 'Full-service social media management that keeps your brand active, engaging, and growing.',
      features: [
        'Content planning',
        'Community management',
        'Engagement optimization',
        'Social listening'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'Performance Marketing',
      description: 'Data-driven campaigns optimized for maximum ROI and measurable business growth.',
      features: [
        'Conversion tracking',
        'A/B testing',
        'Campaign optimization',
        'Analytics reporting'
      ],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Crown,
      title: 'Premium Consulting',
      description: 'Strategic consulting services for enterprise brands looking to scale their digital presence.',
      features: [
        'Executive workshops',
        'Strategic planning',
        'Digital transformation',
        'Growth strategy'
      ],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-black to-accent-900/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
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
            Content is <span className="gradient-text">King</span>
          </motion.h1>
          
          <motion.p
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We offer comprehensive digital marketing services that drive results. From authentic UGC creation to strategic influencer partnerships, we've got your brand covered.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -10 }}
              >
                <div className="glass-card p-8 h-full relative overflow-hidden transition-all duration-500 group-hover:border-white/30">
                  {/* Background gradient that appears on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-2xl mb-4 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-400 group-hover:text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: hoveredCard === index ? 1 : 0.7,
                          x: hoveredCard === index ? 0 : -10 
                        }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-3" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover arrow */}
                  <motion.div
                    className="flex items-center text-accent-400 font-medium"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: hoveredCard === index ? 1 : 0,
                      x: hoveredCard === index ? 0 : -10 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} className="ml-2" />
                  </motion.div>

                  {/* Floating elements */}
                  {hoveredCard === index && (
                    <div className="absolute top-4 right-4">
                      <motion.div
                        className="w-2 h-2 bg-accent-400 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We follow a proven methodology to ensure every campaign delivers exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your brand, goals, and target audience' },
              { step: '02', title: 'Strategy', description: 'Developing a custom marketing strategy tailored to your needs' },
              { step: '03', title: 'Execution', description: 'Implementing campaigns with precision and creativity' },
              { step: '04', title: 'Optimization', description: 'Continuous monitoring and optimization for maximum ROI' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="font-semibold text-xl mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                
                {/* Connecting line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-accent-400 to-transparent opacity-30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Platforms We <span className="gradient-text">Master</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'Instagram', icon: Instagram, color: 'from-pink-500 to-purple-500' },
              { name: 'YouTube', icon: Youtube, color: 'from-red-500 to-red-600' },
              { name: 'Facebook', icon: Facebook, color: 'from-blue-500 to-blue-600' },
              { name: 'LinkedIn', icon: Linkedin, color: 'from-blue-600 to-blue-700' },
              { name: 'Twitter', icon: Twitter, color: 'from-sky-400 to-sky-500' },
              { name: 'TikTok', icon: MessageCircle, color: 'from-black to-gray-800' }
            ].map((platform, index) => (
              <motion.div
                key={platform.name}
                className="glass-card p-6 text-center group hover:border-accent-500/50 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                {/* Floating background elements */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-accent-400/20 rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        x: [-5, 5, -5],
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                {/* Platform icon with floating animation */}
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                  animate={{
                    y: [0, -3, 0],
                    rotate: [0, 1, -1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <platform.icon size={28} className="text-white" />
                </motion.div>

                {/* Platform name with floating text effect */}
                <motion.span 
                  className="text-sm font-medium relative z-10"
                  animate={{
                    y: [0, -1, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  {platform.name}
                </motion.span>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-400/10 to-primary-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-display font-bold text-4xl lg:text-5xl mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Dominate Your Market?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's create a custom strategy that puts your brand ahead of the competition. 
            Get in touch with our team today.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/get-in-touch" className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </Link>
            <Link to="/portfolio" className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300">
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;