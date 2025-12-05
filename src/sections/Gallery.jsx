import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaHeart, 
  FaImages, 
  FaSearchPlus, 
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaInstagram,
  FaCamera,
  FaArrowRight,
  FaArrowLeft
} from "react-icons/fa";

// Import your gallery images
import gallery1 from "../assets/image/web4.jpg";
import gallery2 from "../assets/image/web3.jpg";
import gallery3 from "../assets/image/web2.jpg";
import gallery4 from "../assets/image/web1.jpg";
import gallery5 from "../assets/image/img5.jpg";
import gallery6 from "../assets/image/img4.jpg";
import gallery7 from "../assets/image/img3.jpg";
import gallery8 from "../assets/image/img2.jpg";
import gallery9 from "../assets/image/img1.jpg";
import { useSwipeable } from "react-swipeable";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("all");
  const [mobileSliderIndex, setMobileSliderIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const sliderRef = useRef(null);

  // Gallery images data
  const galleryImages = [
    { id: 1, src: gallery1, category: "engagement", title: "Sunset Proposal", date: "June 2024" },
    { id: 2, src: gallery2, category: "pre-wedding", title: "Beach Stroll", date: "July 2024" },
    { id: 3, src: gallery3, category: "casual", title: "Coffee Date", date: "August 2024" },
    { id: 4, src: gallery4, category: "engagement", title: "Ring Close-up", date: "June 2024" },
    { id: 5, src: gallery5, category: "travel", title: "Mountain Getaway", date: "September 2024" },
    { id: 6, src: gallery6, category: "pre-wedding", title: "Golden Hour", date: "October 2024" },
    { id: 7, src: gallery7, category: "casual", title: "Sunday Brunch", date: "August 2024" },
    { id: 8, src: gallery8, category: "travel", title: "City Adventures", date: "September 2024" },
    { id: 9, src: gallery9, category: "engagement", title: "First Dance Practice", date: "November 2024" },
  ];

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  // Auto-play for mobile slider
  useEffect(() => {
    if (!autoPlay || window.innerWidth >= 768) return;
    
    const interval = setInterval(() => {
      setMobileSliderIndex(prev => (prev + 1) % filteredImages.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [autoPlay, filteredImages.length]);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const nextMobileSlide = () => {
    setMobileSliderIndex(prev => (prev + 1) % filteredImages.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  const prevMobileSlide = () => {
    setMobileSliderIndex(prev => (prev - 1 + filteredImages.length) % filteredImages.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  // Swipe handlers for mobile slider
  const mobileSwipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      nextMobileSlide();
    },
    onSwipedRight: () => {
      prevMobileSlide();
    },
    preventDefaultTouchmoveEvent: false,
    trackMouse: false,
  });

  // Animation variants
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
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    })
  };

  const categories = [
    { id: "all", name: "All Photos", icon: <FaImages /> },
    { id: "engagement", name: "Engagement", icon: <FaHeart /> },
    { id: "pre-wedding", name: "Pre-Wedding", icon: <FaCamera /> },
    { id: "travel", name: "Travel", icon: <FaInstagram /> },
    { id: "casual", name: "Casual", icon: <FaHeart /> },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container px-4 mx-auto md:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-light rounded-full">
            <FaImages className="text-primary" />
            <span className="text-sm text-gray-600 font-playfair">Memories</span>
          </div>
          <h2 className="mb-6 text-4xl md:text-5xl font-playfair text-dark">
            Our Gallery
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-playfair">
            Capturing the beautiful moments of our journey together
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="hidden md:flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 ${
                filter === category.id
                  ? "bg-primary text-white shadow-lg"
                  : "bg-light text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.icon}
              <span className="font-playfair">{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Mobile Filter - Horizontal Scroll */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex md:hidden overflow-x-auto pb-4 mb-8 gap-3 scrollbar-hide"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setFilter(category.id);
                setMobileSliderIndex(0);
                setAutoPlay(false);
                setTimeout(() => setAutoPlay(true), 3000);
              }}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap ${
                filter === category.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-light text-gray-700"
              }`}
            >
              {category.icon}
              <span className="text-sm font-playfair">{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* ===== MOBILE SLIDER ===== */}
        <div className="md:hidden">
          <div className="relative max-w-md mx-auto" {...mobileSwipeHandlers}>
            {/* Slider Counter */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <span className="text-sm font-playfair text-gray-600">
                  <span className="font-bold text-primary">{mobileSliderIndex + 1}</span>
                  {" "}/{" "}
                  <span className="text-gray-500">{filteredImages.length}</span>
                </span>
              </div>
            </div>

            <AnimatePresence mode="wait" custom={mobileSliderIndex}>
              <motion.div
                key={mobileSliderIndex}
                custom={mobileSliderIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative"
                onClick={() => openLightbox(filteredImages[mobileSliderIndex], mobileSliderIndex)}
              >
                {/* Mobile Slider Card */}
                <div className="overflow-hidden bg-white rounded-3xl shadow-2xl border border-gray-100">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={filteredImages[mobileSliderIndex].src}
                      alt={filteredImages[mobileSliderIndex].title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 text-xs font-playfair text-white bg-black/50 rounded-full backdrop-blur-sm">
                      {filteredImages[mobileSliderIndex].category}
                    </div>
                    
                    {/* Zoom Indicator */}
                    <div className="absolute top-4 right-4 p-2 bg-black/50 rounded-full backdrop-blur-sm">
                      <FaSearchPlus className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-3 text-2xl font-playfair text-dark">
                      {filteredImages[mobileSliderIndex].title}
                    </h3>
                    <p className="mb-4 text-gray-600 font-playfair">
                      {filteredImages[mobileSliderIndex].description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 font-playfair">
                        {filteredImages[mobileSliderIndex].date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-primary font-playfair">
                        <FaHeart className="text-sm" />
                        <span>Tap to view</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-8 mt-8">
              <button
                onClick={prevMobileSlide}
                className="p-4 rounded-full bg-light hover:bg-gray-100 transition-all duration-300 active:scale-95"
                aria-label="Previous photo"
              >
                <FaArrowLeft className="text-primary text-xl" />
              </button>
              
              {/* Progress Dots */}
              <div className="flex gap-2">
                {filteredImages.slice(0, 5).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setMobileSliderIndex(index);
                      setAutoPlay(false);
                      setTimeout(() => setAutoPlay(true), 8000);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === mobileSliderIndex 
                        ? "w-8 bg-primary" 
                        : "w-2 bg-gray-300"
                    }`}
                    aria-label={`Go to photo ${index + 1}`}
                  />
                ))}
                {filteredImages.length > 5 && (
                  <span className="text-xs text-gray-500 self-center">
                    +{filteredImages.length - 5}
                  </span>
                )}
              </div>
              
              <button
                onClick={nextMobileSlide}
                className="p-4 rounded-full bg-light hover:bg-gray-100 transition-all duration-300 active:scale-95"
                aria-label="Next photo"
              >
                <FaArrowRight className="text-primary text-xl" />
              </button>
            </div>

            {/* Auto-play Indicator */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm">
                <div className={`w-2 h-2 rounded-full ${autoPlay ? "bg-green-500 animate-pulse" : "bg-gray-300"}`}></div>
                <span className="text-xs text-gray-600 font-playfair">
                  {autoPlay ? "Auto-sliding" : "Manual"}
                </span>
              </div>
              <p className="mt-2 text-xs text-gray-500 font-playfair">
                Swipe or tap arrows to navigate
              </p>
            </div>
          </div>
        </div>

        {/* ===== DESKTOP GALLERY GRID ===== */}
        <div className="hidden md:block">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                onClick={() => openLightbox(image, index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="mb-2 text-xl font-playfair">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.date}</p>
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
                      <FaSearchPlus className="text-2xl text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-4 left-4 px-3 py-1 text-xs font-playfair text-white bg-black/50 rounded-full backdrop-blur-sm">
                  {image.category}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Featured Photo Grid (Desktop Only) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="hidden lg:block mt-20"
        >
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 row-span-2">
              <div className="relative overflow-hidden rounded-3xl h-full group">
                <img
                  src={gallery1}
                  alt="Featured Photo 1"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm opacity-90">Featured</p>
                  <h3 className="text-2xl font-playfair">Our Favorite Moment</h3>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-3xl group">
              <img
                src={gallery2}
                alt="Featured Photo 2"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <div className="relative overflow-hidden rounded-3xl group">
              <img
                src={gallery3}
                alt="Featured Photo 3"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Instagram Preview */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20"
        >
          <div className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FaInstagram className="text-2xl text-primary" />
                  <h3 className="text-2xl font-playfair text-dark">Follow Our Journey</h3>
                </div>
                <p className="text-gray-600 font-playfair">
                  See more photos and updates on our Instagram
                </p>
              </div>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 font-playfair font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:scale-105"
              >
                @DavidAndDorcas
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-6xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-16 right-0 p-3 text-white hover:text-accent transition-colors z-10"
              >
                <FaTimes className="text-3xl" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors z-10"
              >
                <FaChevronLeft className="text-2xl" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors z-10"
              >
                <FaChevronRight className="text-2xl" />
              </button>

              <div className="relative overflow-hidden rounded-2xl">
                <motion.img
                  key={selectedImage.id}
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-h-[70vh] object-contain"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="mb-2 text-2xl font-playfair">{selectedImage.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="opacity-90">{selectedImage.date}</p>
                    <p className="px-3 py-1 text-sm bg-white/20 rounded-full backdrop-blur-sm">
                      {currentIndex + 1} / {filteredImages.length}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-4 overflow-x-auto">
                {filteredImages.map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => {
                      setSelectedImage(img);
                      setCurrentIndex(index);
                    }}
                    className={`flex-shrink-0 w-16 h-16 overflow-hidden rounded-lg border-2 transition-all ${
                      currentIndex === index
                        ? "border-accent scale-110"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img.src}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;