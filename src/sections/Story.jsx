import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaHeart, 
  FaMapMarkerAlt, 
  FaCalendarDay, 
  FaRing,
  FaGlassCheers,
  FaUsers,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { 
  GiHeartBeats, 
  GiBigDiamondRing 
} from "react-icons/gi";
import coupleImg1 from "../assets/image/img1.jpg";
import coupleImg2 from "../assets/image/img2.jpg";
import coupleImg3 from "../assets/image/img3.jpg";
import { useSwipeable } from "react-swipeable";

const Story = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const storyTimeline = [
    {
      year: "2018",
      title: "The First Meeting",
      description: "We met at a mutual friend's art exhibition in Lagos. David was showing his photography, and Dorcas was there supporting her best friend. We talked for hours about art, travel, and our shared love for Italian food.",
      icon: <FaHeart className="text-2xl text-accent" />,
      image: coupleImg1,
    },
    {
      year: "2020",
      title: "The First Date",
      description: "Our first official date was at The Sky Restaurant. Despite David's nerves making him spill wine, we laughed through it all. That night, we both knew this was something special.",
      icon: <GiHeartBeats className="text-2xl text-secondary" />,
      image: coupleImg2,
    },
    {
      year: "2022",
      title: "Moving In Together",
      description: "We got our first apartment together in Lekki Phase 1. Decorating every corner, cooking our first meals, and building our home together strengthened our bond every day.",
      icon: <FaMapMarkerAlt className="text-2xl text-primary" />,
      image: coupleImg3,
    },
    {
      year: "2023",
      title: "The Proposal",
      description: "On a trip to Obudu Mountain Resort, David proposed at sunrise. With misty mountains as our witness, he got down on one knee. Dorcas said 'Yes!' before he could even finish the question.",
      icon: <GiBigDiamondRing className="text-2xl text-accent" />,
      image: coupleImg1,
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % storyTimeline.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [autoPlay, storyTimeline.length]);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentSlide((prev) => (prev + 1) % storyTimeline.length);
      setAutoPlay(false);
      setTimeout(() => setAutoPlay(true), 10000); // Resume auto-play after 10s
    },
    onSwipedRight: () => {
      setCurrentSlide((prev) => (prev - 1 + storyTimeline.length) % storyTimeline.length);
      setAutoPlay(false);
      setTimeout(() => setAutoPlay(true), 10000);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
  });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % storyTimeline.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + storyTimeline.length) % storyTimeline.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  return (
    <section id="story" className="py-20 bg-light">
      <div className="container px-4 mx-auto md:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-white rounded-full shadow-sm">
            <FaHeart className="text-primary" />
            <span className="text-sm text-gray-600 font-playfair">Our Journey</span>
          </div>
          <h2 className="mb-6 text-4xl md:text-5xl font-playfair text-dark">
            Our Love Story
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-playfair">
            From strangers to soulmates, every moment has been a chapter in our beautiful story.
          </p>
        </motion.div>

        {/* Desktop Timeline - Hidden on mobile */}
        <div className="hidden md:block">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="absolute w-1 h-full transform -translate-x-1/2 left-1/2 bg-gradient-to-b from-primary via-secondary to-accent"></div>

            {storyTimeline.map((item, index) => (
              <div
                key={index}
                className={`relative mb-20 flex items-center ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="absolute z-10 w-6 h-6 transform -translate-x-1/2 bg-white border-4 rounded-full shadow-lg left-1/2 border-primary"></div>

                <div className={`w-5/12 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-8 bg-white border border-gray-100 shadow-xl rounded-2xl"
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-light">
                      <FaCalendarDay className="text-primary" />
                      <span className="font-semibold font-playfair text-primary">{item.year}</span>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-full bg-light">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-playfair text-dark">{item.title}</h3>
                    </div>

                    <p className="mb-6 text-gray-600 font-playfair">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                <div className={`w-5/12 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="relative overflow-hidden shadow-xl rounded-2xl"
                  >
                    <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden" {...handlers}>
          <div className="relative max-w-lg mx-auto">
            <AnimatePresence mode="wait" custom={currentSlide}>
              <motion.div
                key={currentSlide}
                custom={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative"
              >
                {/* Story Card */}
                <div className="overflow-hidden bg-white border border-gray-100 shadow-2xl rounded-3xl">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={storyTimeline[currentSlide].image}
                      alt={storyTimeline[currentSlide].title}
                      className="object-cover object-top w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    
                    {/* Year Badge on Image */}
                    <div className="absolute inline-flex items-center gap-2 px-4 py-2 rounded-full top-4 left-4 bg-white/90 backdrop-blur-sm">
                      {storyTimeline[currentSlide].icon}
                      <span className="font-semibold font-playfair text-primary">
                        {storyTimeline[currentSlide].year}
                      </span>
                    </div>
                    
                    {/* Slide Counter */}
                    <div className="absolute px-3 py-1 rounded-full top-4 right-4 bg-black/50 backdrop-blur-sm">
                      <span className="text-sm text-white font-playfair">
                        {currentSlide + 1} / {storyTimeline.length}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="mb-4 text-2xl font-playfair text-dark">
                      {storyTimeline[currentSlide].title}
                    </h3>
                    
                    <p className="mb-6 text-gray-600 font-playfair">
                      {storyTimeline[currentSlide].description}
                    </p>

                    {/* Progress Dots */}
                    <div className="flex justify-center gap-2 mb-6">
                      {storyTimeline.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentSlide(index);
                            setAutoPlay(false);
                            setTimeout(() => setAutoPlay(true), 10000);
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentSlide 
                              ? "w-8 bg-primary" 
                              : "bg-gray-300"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={prevSlide}
                        className="p-3 transition-colors rounded-full bg-light hover:bg-gray-100"
                        aria-label="Previous story"
                      >
                        <FaChevronLeft className="text-primary" />
                      </button>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-500 font-body">
                        <FaCalendarDay className="text-primary" />
                        <span>{storyTimeline[currentSlide].year}</span>
                      </div>
                      
                      <button
                        onClick={nextSlide}
                        className="p-3 transition-colors rounded-full bg-light hover:bg-gray-100"
                        aria-label="Next story"
                      >
                        <FaChevronRight className="text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Auto-play Indicator */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm">
                <div className={`w-2 h-2 rounded-full ${autoPlay ? "bg-green-500 animate-pulse" : "bg-gray-300"}`}></div>
                <span className="text-xs text-gray-600 font-body">
                  {autoPlay ? "Auto-playing" : "Paused"}
                </span>
              </div>
              <p className="mt-2 text-xs text-gray-500 font-body">
                Swipe or tap arrows to navigate
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mt-20"
        >
          <div className="relative p-8 overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl md:p-12">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 text-9xl text-primary">"</div>
              <div className="absolute bottom-0 left-0 text-9xl text-secondary">"</div>
            </div>

            <div className="relative z-10 text-center">
              <FaHeart className="mx-auto mb-6 text-4xl text-accent" />
              <blockquote className="mb-6 text-2xl italic md:text-3xl font-playfair text-dark">
                "In you, I've found the love of my life and my closest, truest friend."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary">
                  <span className="font-bold text-white font-playfair">D&D</span>
                </div>
                <div>
                  <p className="font-semibold font-playfair text-dark">David & Dorcas</p>
                  <p className="text-sm text-gray-600 font-playfair">December 13, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Milestones Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-2 gap-6 mt-20 md:grid-cols-4"
        >
          {[
            { icon: <FaCalendarDay />, value: "7 Years", label: "Together" },
            { icon: <FaMapMarkerAlt />, value: "15+", label: "Trips Taken" },
            { icon: <FaGlassCheers />, value: "∞", label: "Laughs Shared" },
            { icon: <FaRing />, value: "1", label: "Forever to Go" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 text-center bg-white border border-gray-100 shadow-lg rounded-2xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-light">
                <div className="text-2xl text-primary">{stat.icon}</div>
              </div>
              <div className="mb-2 text-3xl font-bold text-dark font-playfair">
                {stat.value}
              </div>
              <div className="text-gray-600 font-playfair">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Story;