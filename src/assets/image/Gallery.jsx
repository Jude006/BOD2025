import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaHeart, 
  FaImages, 
  FaSearchPlus, 
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaInstagram,
  FaCamera
} from "react-icons/fa";

// Import your gallery images - add your actual images here
import gallery1 from "../assets/image/gallery1.jpg";
import gallery2 from "../assets/image/gallery2.jpg";
import gallery3 from "../assets/image/gallery3.jpg";
import gallery4 from "../assets/image/gallery4.jpg";
import gallery5 from "../assets/image/gallery5.jpg";
import gallery6 from "../assets/image/gallery6.jpg";
import gallery7 from "../assets/image/gallery7.jpg";
import gallery8 from "../assets/image/gallery8.jpg";
import gallery9 from "../assets/image/img.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("all");

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

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Restore scrolling
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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
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
          className="flex flex-wrap justify-center gap-3 mb-12"
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

        {/* Masonry Gallery Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={imageVariants}
              whileHover="hover"
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => openLightbox(image, index)}
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="mb-2 text-xl font-playfair">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.date}</p>
                </div>
                
                {/* Zoom Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
                    <FaSearchPlus className="text-2xl text-white" />
                  </div>
                </div>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 text-xs font-playfair text-white bg-black/50 rounded-full backdrop-blur-sm">
                {image.category}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Photo Grid (Desktop) */}
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
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-16 right-0 p-3 text-white hover:text-accent transition-colors z-10"
              >
                <FaTimes className="text-3xl" />
              </button>

              {/* Navigation Buttons */}
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

              {/* Image Display */}
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
                
                {/* Image Info */}
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

              {/* Thumbnail Strip */}
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