import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = ['All', 'Fashion', 'FMCG', 'Fitness', 'Beauty', 'Wellness', 'Healthcare'];
  
  const campaigns = [
    {
      id: 1,
      title: 'Fashion Forward Campaign',
      category: 'Fashion',
      description: 'Luxury fashion brand campaign featuring micro-influencers across Instagram and TikTok',
      metrics: { views: '2.5M', engagement: '8.3%', conversions: '12.5K' },
      thumbnail: '/api/placeholder/600/400',
      videoUrl: '#'
    },
    {
      id: 2,
      title: 'Wellness Journey',
      category: 'Wellness',
      description: 'Authentic wellness brand storytelling with real customer transformation stories',
      metrics: { views: '1.8M', engagement: '12.1%', conversions: '8.7K' },
      thumbnail: '/api/placeholder/600/400',
      videoUrl: '#'
    },
    {
      id: 3,
      title: 'FMCG Product Launch',
      category: 'FMCG',
      description: 'Multi-platform launch campaign for new consumer product with UGC integration',
      metrics: { views: '3.2M', engagement: '6.8%', conversions: '15.3K' },
      thumbnail: '/api/placeholder/600/400',
      videoUrl: '#'
    },
    {
      id: 4,
      title: 'Fitness Transformation',
      category: 'Fitness',
      description: 'Inspiring fitness journey campaign with before/after transformations',
      metrics: { views: '4.1M', engagement: '15.2%', conversions: '22.1K' },
      thumbnail: '/api/placeholder/600/400',
      videoUrl: '#'
    },
    {
      id: 5,
      title: 'Beauty Revolution',
      category: 'Beauty',
      description: 'Inclusive beauty campaign celebrating diversity with authentic user content',
      metrics: { views: '5.8M', engagement: '18.7%', conversions: '31.2K' },
      thumbnail: '/api/placeholder/600/400',
      videoUrl: '#'
    },
    {
      id: 6,
      title: 'Healthcare Awareness',
      category: 'Healthcare',
      description: 'Educational healthcare campaign with medical professionals and patient stories',
      metrics: { views: '1.2M', engagement: '9.4%', conversions: '6.8K' },
      thumbnail: '/api/placeholder/600/400',
      videoUrl: '#'
    }
  ];

  const filteredCampaigns = activeCategory === 'All' 
    ? campaigns 
    : campaigns.filter(campaign => campaign.category === activeCategory);

  const VideoModal = ({ video, onClose }) => (
    <motion.div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-4xl w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* TV Frame Effect */}
        <div className="absolute inset-0 border-8 border-gray-800 rounded-2xl">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-700 rounded-full"></div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-gray-800 rounded-full"></div>
        </div>
        
        {/* Video Content Placeholder */}
        <div className="w-full h-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center">
          <div className="text-center">
            <Play size={64} className="text-white mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-white mb-2">{video.title}</h3>
            <p className="text-white/80">{video.description}</p>
          </div>
        </div>
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  );

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
            Our <span className="gradient-text">Creative Work</span>
          </motion.h1>
          
          <motion.p
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            UGC & Influencer Marketing Campaign Case Studies that showcase our expertise in creating viral, converting content across industries.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                    : 'bg-white/5 border border-white/20 text-gray-300 hover:border-accent-500/50 hover:text-accent-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredCampaigns.map((campaign, index) => (
                <motion.div
                  key={campaign.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedVideo(campaign)}
                  whileHover={{ y: -10 }}
                >
                  <div className="glass-card overflow-hidden group-hover:border-accent-500/50 transition-all duration-300">
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video bg-gradient-to-br from-primary-500/30 to-accent-500/30 overflow-hidden">
                      {/* Placeholder for video thumbnail */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/50 to-accent-600/50"></div>
                      
                      {/* Play button overlay */}
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                        <motion.div
                          className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-accent-500 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Play size={24} className="text-white ml-1" />
                        </motion.div>
                      </div>

                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                          {campaign.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3 group-hover:text-accent-400 transition-colors">
                        {campaign.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {campaign.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-accent-400 font-bold text-lg">{campaign.metrics.views}</div>
                          <div className="text-gray-500 text-xs uppercase tracking-wide">Views</div>
                        </div>
                        <div>
                          <div className="text-accent-400 font-bold text-lg">{campaign.metrics.engagement}</div>
                          <div className="text-gray-500 text-xs uppercase tracking-wide">Engagement</div>
                        </div>
                        <div>
                          <div className="text-accent-400 font-bold text-lg">{campaign.metrics.conversions}</div>
                          <div className="text-gray-500 text-xs uppercase tracking-wide">Conversions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 lg:py-16 bg-gradient-to-r from-primary-900/10 to-accent-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
              Campaign <span className="gradient-text">Performance</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50M+', label: 'Total Reach', icon: '👥' },
              { number: '15.7%', label: 'Avg. Engagement', icon: '❤️' },
              { number: '200+', label: 'Campaigns', icon: '🚀' },
              { number: '95%', label: 'Client Satisfaction', icon: '⭐' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center glass-card p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
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
            Ready for Your Success Story?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join the brands that are winning with our proven UGC and influencer marketing strategies. 
            Let's create your next viral campaign.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/get-in-touch" className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <span>Start Your Campaign</span>
              <ArrowRight size={20} />
            </Link>
            <Link to="/portfolio" className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300">
              View More Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <VideoModal 
            video={selectedVideo} 
            onClose={() => setSelectedVideo(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurWork;