import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeart,
  FaPray,
  FaPrayingHands,
  FaChurch,
  FaDove,
  FaBible,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { GiLoveLetter, GiAngelWings, GiHearts } from "react-icons/gi";
import coupleImg1 from "../assets/image/img1.jpg";
import coupleImg2 from "../assets/image/img2.jpg";
import coupleImg3 from "../assets/image/img3.jpg";

const Story = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [direction, setDirection] = useState(0);
  const carouselRef = useRef(null);

  const storyTimeline = [
    {
      year: "2024",
      title: "Divine Meeting",
      description:
        "We met in Abuja when David attended the COZA CGLS program. In that moment of quiet clarity, two parts of one heart finally recognized the beauty God placed within us.",
      icon: <FaChurch className="text-2xl text-primary" />,
      image: coupleImg1,
      verse: "Ecclesiastes 4:9",
      verseText: "Two are better than one",
    },
    {
      year: "2024",
      title: "Growing Together",
      description:
        "Through growth, healing, and grace, we learned to walk together in love. Each day brought us closer, strengthening our bond through faith and understanding.",
      icon: <FaPrayingHands className="text-2xl text-secondary" />,
      image: coupleImg2,
      verse: "1 Corinthians 13:7",
      verseText:
        "Love bears all things, believes all things, hopes all things, endures all things",
    },
    {
      year: "2024",
      title: "Love Blossoms",
      description:
        "As our friendship deepened into love, we discovered a partnership built on mutual respect, shared faith, and God's perfect timing in our lives.",
      icon: <GiHearts className="text-2xl text-accent" />,
      image: coupleImg3,
      verse: "Song of Solomon 8:7",
      verseText: "Many waters cannot quench love",
    },
    {
      year: "2025",
      title: "Journey to Forever",
      description:
        "Now, as we prepare for our wedding, joy overflows because we enter this new season whole, united, and strengthened by God's grace.",
      icon: <GiAngelWings className="text-2xl text-primary" />,
      image: coupleImg1,
      verse: "Jeremiah 29:11",
      verseText: "Plans to give you hope and a future",
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % storyTimeline.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoPlay, storyTimeline.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % storyTimeline.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 15000);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide(
      (prev) => (prev - 1 + storyTimeline.length) % storyTimeline.length
    );
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 15000);
  };

  // FIX: Custom swipe handler without react-swipeable
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left
          nextSlide();
        } else {
          // Swipe right
          prevSlide();
        }
      }
    };

    carousel.addEventListener("touchstart", handleTouchStart);
    carousel.addEventListener("touchend", handleTouchEnd);

    return () => {
      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 35 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 35 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    }),
  };

  return (
    <section id="story" className="py-20 bg-light overflow-hidden">
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
            <span className="text-sm text-gray-600 font-playfair">
              God's Perfect Plan
            </span>
          </div>
          <h2 className="mb-6 text-4xl md:text-5xl font-playfair text-dark">
            Our Love Story
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-playfair">
            Two hearts united by faith, walking together in God's perfect
            timing.
          </p>
        </motion.div>

        {/* Main Story Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="md:w-2/5">
                <div className="relative overflow-hidden rounded-2xl aspect-square">
                  <img
                    src={coupleImg2}
                    alt="David & Dorcas"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              <div className="md:w-3/5">
                <div className="flex items-center gap-3 mb-6">
                  <FaPray className="text-2xl text-primary" />
                  <h3 className="text-2xl font-playfair text-dark">
                    Our Journey of Faith
                  </h3>
                </div>

                <div className="space-y-4 text-gray-700 font-playfair">
                  <p className="text-lg leading-relaxed">
                    We met ourselves in a moment of quiet clarity, two parts of
                    one heart finally recognizing the beauty God placed within
                    us.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Through growth, healing, and grace, we learned to walk
                    together in love. Now, as we prepare for our wedding, joy
                    overflows because we enter this new season whole, united,
                    and strengthened.
                  </p>

                  <div className="p-4 mt-6 italic bg-light rounded-xl">
                    <div className="flex items-start gap-3">
                      <FaBible className="text-xl text-primary mt-1" />
                      <div>
                        <p className="font-semibold text-dark">
                          Truly, "Two are better than one"
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Ecclesiastes 4:9
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Journey Timeline Cards */}
        <div className="mb-20">
          <h3 className="mb-8 text-3xl font-playfair text-center text-dark">
            Milestones of Our Journey
          </h3>

          {/* Mobile Carousel */}
          <div className="md:hidden" ref={carouselRef}>
            <div className="relative max-w-lg mx-auto">
              <AnimatePresence mode="sync" custom={direction}>
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative touch-pan-y" // FIX: Add proper touch action
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

                      <p className="mb-4 text-gray-600 font-playfair">
                        {storyTimeline[currentSlide].description}
                      </p>

                      {/* Bible Verse */}
                      <div className="p-4 mb-6 bg-light/50 rounded-xl">
                        <div className="flex items-start gap-2">
                          <FaBible className="text-primary mt-1" />
                          <div>
                            <p className="text-sm italic text-gray-700">
                              "{storyTimeline[currentSlide].verseText}"
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                              {storyTimeline[currentSlide].verse}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Progress Dots */}
                      <div className="flex justify-center gap-2 mb-6">
                        {storyTimeline.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setDirection(index > currentSlide ? 1 : -1);
                              setCurrentSlide(index);
                              setAutoPlay(false);
                              setTimeout(() => setAutoPlay(true), 15000);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              index === currentSlide
                                ? "w-8 bg-primary"
                                : "w-2 bg-gray-300"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>

                      {/* Navigation Buttons */}
                      <div className="flex items-center justify-between">
                        <button
                          onClick={prevSlide}
                          className="p-3 transition-all duration-300 rounded-full bg-light hover:bg-gray-100 hover:scale-110"
                          aria-label="Previous story"
                        >
                          <FaChevronLeft className="text-primary" />
                        </button>

                        <div className="flex items-center gap-2 text-sm text-gray-500 font-playfair">
                          <FaHeart className="text-primary" />
                          <span>Part {currentSlide + 1}</span>
                        </div>

                        <button
                          onClick={nextSlide}
                          className="p-3 transition-all duration-300 rounded-full bg-light hover:bg-gray-100 hover:scale-110"
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
                  <div
                    className={`w-2 h-2 rounded-full ${
                      autoPlay ? "bg-green-500 animate-pulse" : "bg-gray-300"
                    }`}
                  ></div>
                  <span className="text-xs text-gray-600 font-playfair">
                    {autoPlay ? "Auto-sliding" : "Paused"}
                  </span>
                </div>
                <p className="mt-2 text-xs text-gray-500 font-playfair">
                  Swipe on card or tap arrows to navigate
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Grid - Hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {storyTimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute inline-flex items-center gap-2 px-4 py-2 rounded-full top-4 left-4 bg-white/90 backdrop-blur-sm">
                    {item.icon}
                    <span className="font-semibold font-playfair text-primary">
                      {item.year}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="mb-3 text-xl font-playfair text-dark">
                    {item.title}
                  </h4>
                  <p className="mb-4 text-gray-600 font-playfair">
                    {item.description}
                  </p>
                  <div className="p-3 bg-light/50 rounded-lg">
                    <p className="text-sm italic text-gray-700">
                      "{item.verseText}"
                    </p>
                    <p className="mt-1 text-xs text-gray-500">{item.verse}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final Faith Message */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/10 rounded-3xl md:p-10">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 text-9xl text-primary">
                <GiHearts />
              </div>
              <div className="absolute bottom-0 left-0 text-9xl text-secondary">
                <FaDove />
              </div>
            </div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 rounded-full bg-white/80 backdrop-blur-sm">
                <GiLoveLetter className="text-primary" />
                <span className="font-playfair text-dark">
                  Our Prayer & Promise
                </span>
              </div>

              <blockquote className="mb-6 text-2xl leading-relaxed md:text-3xl font-playfair italic text-dark">
                "With God leading us, we step into the future with hope, love,
                and faith. We trust His promise that 'He has plans to give us
                hope and a future,' and together, we embrace all He is shaping
                us to become."
              </blockquote>

              <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary">
                    <FaHeart className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold font-playfair text-dark">
                      David & Dorcas
                    </p>
                    <p className="text-sm text-gray-600 font-playfair">
                      Walking in God's Grace
                    </p>
                  </div>
                </div>
                <div className="px-4 py-2 bg-primary/10 rounded-full">
                  <p className="text-sm font-playfair text-primary">
                    Jeremiah 29:11
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;