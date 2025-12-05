import React from "react";
import { motion } from "framer-motion";
import { 
  FaHeart, 
  FaInstagram, 
  FaFacebook, 
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";
import { Link } from "react-scroll";
import { FaCalendar } from "react-icons/fa6";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const socialLinks = [
    { icon: <FaInstagram />, label: "Instagram", url: "https://instagram.com" },
    { icon: <FaFacebook />, label: "Facebook", url: "https://facebook.com" },
    { icon: <FaTwitter />, label: "Twitter", url: "https://twitter.com" },
    { icon: <FaEnvelope />, label: "Email", url: "mailto:david&dorcas@wedding.com" }
  ];

  const quickLinks = [
    { label: "Home", to: "home" },
    { label: "Our Story", to: "story" },
    { label: "Gallery", to: "gallery" },
    { label: "Registry", to: "registry" },
    { label: "RSVP", to: "rsvp" }
  ];

  return (
    <footer className="bg-dark text-white">
      {/* Top Section */}
      <div className="container px-4 py-12 mx-auto md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center md:text-left"
          >
            <div className="flex flex-col items-start md:items-start gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <FaHeart className="text-white" />
                </div>
                <span className="text-2xl font-great text-white">BOD</span>
              </div>
              <p className="text-gray-300 font-playfair">
                Celebrating the union of David & Dorcas
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-primary" />
                <span className="font-playfair">The Orisanmi Event Center</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaCalendar className="text-primary" />
                <span className="font-playfair">December 13, 2025 • 2:00 PM</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-start md:text-left"
          >
            <h3 className="mb-6 text-xl font-playfair text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={800}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 cursor-pointer font-playfair"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-start md:text-left"
          >
            <h3 className="mb-6 text-xl font-playfair text-white">Get in Touch</h3>
            
            <div className="mb-8">
              <div className="flex items-center justify-start md:justify-start gap-4 mb-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-gray-300 font-playfair">
                Follow our journey on social media
              </p>
            </div>
            
            <div className="space-y-3">
              <a
                href="mailto:contact@davidanddorcas.com"
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors font-playfair"
              >
                <FaEnvelope />
                <span>contact@davidanddorcas.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300 font-playfair">
                <FaPhone />
                <span>+234 800 000 0000</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="container px-4 py-8 mx-auto md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-gray-400 font-playfair text-sm">
                Made with <FaHeart className="inline text-accent mx-1" /> for David & Dorcas
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 font-playfair text-sm">
                Designed by{" "}
                <a
                  href="https://portfolio-virid-kappa.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors font-semibold"
                >
                  GentleDev
                </a>
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 font-playfair text-sm">
                © {new Date().getFullYear()} David & Dorcas. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;