import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Users,
  TrendingUp,
  Target,
  Star,
  Quote,
} from "lucide-react";
import HeroBackground from "../assets/hero-background.jpg";

const Home = () => {
  const services = [
    {
      icon: Users,
      title: "Authentic Creators",
      description:
        "Handpicked influencers who connect with your audience and bring authentic storytelling to your brand.",
    },
    {
      icon: TrendingUp,
      title: "Viral Content",
      description:
        "UGC that converts & drives sales with proven strategies that make your content go viral.",
    },
    {
      icon: Target,
      title: "Data-Driven Results",
      description:
        "Optimized campaigns for maximum ROI with detailed analytics and performance tracking.",
    },
  ];

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "40+", label: "Expert Employees" },
    { number: "105+", label: "Happy Clients" },
  ];

  const testimonials = [
    {
      text: "NFLUZ transformed our social media presence completely. Their UGC campaigns generated 300% more engagement than our previous strategies.",
      author: "Saad",
      position: "Marketing Director, TechCorp",
    },
    {
      text: "The team at NFLUZ understands our brand vision perfectly. Their influencer partnerships have driven incredible results for our campaigns.",
      author: "Imdad",
      position: "Brand Manager, FashionForward",
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HeroBackground})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Background gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-black to-blue-400">
        </div> */}

        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-accent-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="font-display font-bold text-3xl sm:text-6xl lg:text-6xl xl:text-7xl leading-tight mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empower Your Brand with{" "}
              <span className="gradient-text">Authentic UGC</span>
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your brand with cutting-edge UGC and influencer
              marketing that drives real results. We create authentic
              connections that convert.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/get-in-touch"
                className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/portfolio"
                className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4"
              >
                <Play size={20} />
                <span>View Our Work</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl lg:text-6xl font-bold text-gray-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Media Section */}
      <section
        className="py-20 lg:py-32  
      border-y border-[#1a1a1a]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
                Creating{" "}
                <span className="gradient-text">Digital Excellence</span>{" "}
                Through Innovation
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We combine creativity with data-driven strategies to deliver
                campaigns that not only look amazing but drive real business
                results. Our team of experts crafts each campaign with precision
                and passion.
              </p>
              <Link
                to="/portfolio"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>View Our Portfolio</span>
                <ArrowRight size={18} />
              </Link>
            </div>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl border border-white/10 p-8 flex items-center justify-center">
                <Play size={64} className="text-accent-400" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
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
              About <span className="gradient-text">NFLUZ</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a cutting-edge marketing agency specializing in UGC and
              influencer marketing. Our mission is to help brands connect with
              their audience through authentic, engaging content that drives
              real results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="glass-card p-8 text-center group hover:border-accent-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="font-semibold text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary-900/10 to-accent-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="font-display font-bold text-4xl lg:text-6xl xl:text-7xl leading-tight mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What are <span className="gradient-text">UGC's</span>
            <br />
            and How They <span className="gradient-text">Help Brands</span>
          </motion.h2>
          <motion.p
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            User-Generated Content (UGC) is authentic content created by real
            users about your brand. It builds trust, increases engagement, and
            drives conversions by showcasing genuine experiences and
            testimonials.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
            >
              <span>Learn More About Our Services</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-display font-bold text-4xl lg:text-5xl text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What Our <span className="gradient-text">Clients Say</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Quote className="text-accent-400 mb-6" size={32} />
                <p className="text-lg text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.position}
                    </div>
                  </div>
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
            Ready to Transform Your Brand?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's create something amazing together. Get in touch with our team
            and discover how we can help your business grow.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/get-in-touch"
              className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Get Started Now</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/work-with-us"
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              Join Our Network
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
