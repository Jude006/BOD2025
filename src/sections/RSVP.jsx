import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaHeart,
  FaCalendarDay,
  FaMapMarkerAlt,
  FaClock,
  FaUserFriends,
  FaGlassCheers,
  FaMusic,
  FaCar,
  FaQuestionCircle,
  FaCheckCircle,
  FaTimesCircle
} from "react-icons/fa";
import { GiPartyPopper, GiPartyHat } from "react-icons/gi";

const RSVP = () => {
  const [selectedAttendees, setSelectedAttendees] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const attendees = [
    { id: 1, name: "I will attend", icon: <GiPartyPopper />, color: "from-green-500 to-emerald-600" },
    { id: 2, name: "I might attend", icon: <GiPartyHat />, color: "from-yellow-500 to-amber-600" },
    { id: 3, name: "Cannot attend", icon: <FaTimesCircle />, color: "from-red-500 to-pink-600" }
  ];

  const mealOptions = [
    { id: 1, name: "Regular Menu", icon: "🍗", desc: "Chicken & Beef options" },
    { id: 2, name: "Vegetarian", icon: "🥗", desc: "Plant-based options" },
    { id: 3, name: "Seafood", icon: "🍤", desc: "Fish & seafood dishes" },
    { id: 4, name: "Kids Menu", icon: "🍕", desc: "For our young guests" }
  ];

  const weddingDetails = [
    { icon: <FaCalendarDay />, label: "Date", value: "December 13, 2025" },
    { icon: <FaClock />, label: "Time", value: "8:00 AM - 6:00 PM" },
    { icon: <FaMapMarkerAlt />, label: "Venue", value: "The Orisanmi Event Center" },
    { icon: <FaUserFriends />, label: "Dress Code", value: "Formal / Traditional" }
  ];

  const qaItems = [
    {
      question: "Can I bring a plus one?",
      answer: "Yes! Please indicate how many guests when you RSVP."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, complimentary valet parking is provided."
    },
    {
      question: "What's the dress code?",
      answer: "Formal or traditional attire. Think elegant and celebratory!"
    },
    {
      question: "Are children welcome?",
      answer: "Absolutely! We love kids and have a special kids' menu."
    }
  ];

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
        staggerChildren: 0.2
      }
    }
  };

  const handleAttendeeClick = (attendeeId) => {
    setSelectedAttendees([attendeeId]);
    setShowConfirmation(false);
  };

  const handleConfirm = () => {
    if (selectedAttendees.length > 0) {
      setShowConfirmation(true);
      // In a real app, this would send data to your backend
      console.log("RSVP submitted:", { selectedAttendees, selectedMeal });
    }
  };

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-b from-light to-white">
      <div className="container px-4 mx-auto md:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-white rounded-full shadow-lg">
            <FaHeart className="text-primary" />
            <span className="text-sm text-gray-600 font-playfair">RSVP</span>
          </div>
          <h2 className="mb-6 text-4xl md:text-5xl font-playfair text-dark">
            Will You Celebrate With Us?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-playfair">
            Let us know if you can join our special day
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Confirmation Message */}
          <AnimatePresence>
            {showConfirmation && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="p-8 mb-8 text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl border border-green-200 shadow-xl"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-600">
                  <FaCheckCircle className="text-3xl text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-playfair text-green-800">
                  Thank You for RSVPing!
                </h3>
                <p className="text-gray-700 font-playfair">
                  Your response has been recorded. We can't wait to celebrate with you!
                </p>
                <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white rounded-full">
                  <FaHeart className="text-accent" />
                  <span className="text-sm font-playfair text-gray-600">
                    David & Dorcas
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main RSVP Interaction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - RSVP Selection */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Attendance Selection */}
              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <FaUserFriends className="text-xl text-primary" />
                  <h3 className="text-2xl font-playfair text-dark">
                    Can You Attend?
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {attendees.map((attendee) => (
                    <button
                      key={attendee.id}
                      onClick={() => handleAttendeeClick(attendee.id)}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                        selectedAttendees.includes(attendee.id)
                          ? `border-primary bg-gradient-to-br ${attendee.color} text-white shadow-xl scale-[1.02]`
                          : "border-gray-200 bg-white hover:border-primary/50 hover:shadow-lg"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full ${
                          selectedAttendees.includes(attendee.id) 
                            ? "bg-white/20" 
                            : "bg-light"
                        }`}>
                          <span className="text-2xl">{attendee.icon}</span>
                        </div>
                        <div className="text-left">
                          <h4 className="text-lg font-playfair">{attendee.name}</h4>
                          <p className="text-sm opacity-90 mt-1">
                            {attendee.id === 1 && "Excited to celebrate with you!"}
                            {attendee.id === 2 && "Will confirm closer to date"}
                            {attendee.id === 3 && "Will celebrate in spirit"}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Meal Preference */}
              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <FaGlassCheers className="text-xl text-secondary" />
                  <h3 className="text-2xl font-playfair text-dark">
                    Meal Preference
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {mealOptions.map((meal) => (
                    <button
                      key={meal.id}
                      onClick={() => setSelectedMeal(meal.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        selectedMeal === meal.id
                          ? "border-primary bg-primary/5 shadow-lg"
                          : "border-gray-200 bg-white hover:border-primary/30"
                      }`}
                    >
                      <div className="text-3xl mb-2">{meal.icon}</div>
                      <h4 className="font-playfair text-sm font-semibold">{meal.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">{meal.desc}</p>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={fadeInUp} className="pt-4">
                <button
                  onClick={handleConfirm}
                  disabled={selectedAttendees.length === 0}
                  className={`w-full py-5 font-playfair font-semibold rounded-2xl transition-all duration-300 ${
                    selectedAttendees.length === 0
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-2xl hover:scale-[1.02] shadow-xl"
                  }`}
                >
                  {selectedAttendees.length === 0 ? (
                    "Select Your Response"
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      <FaHeart />
                      Confirm Your RSVP
                    </span>
                  )}
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side - Wedding Details & Q&A */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              {/* Wedding Details */}
              <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <FaCalendarDay className="text-xl text-accent" />
                  <h3 className="text-2xl font-playfair text-dark">Wedding Details</h3>
                </div>
                
                <div className="space-y-6">
                  {weddingDetails.map((detail, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-light">
                        <span className="text-primary">{detail.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-playfair font-semibold text-dark">{detail.label}</h4>
                        <p className="text-gray-700 font-playfair">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Q&A */}
              <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl">
                <div className="flex items-center gap-3 mb-8">
                  <FaQuestionCircle className="text-xl text-primary" />
                  <h3 className="text-2xl font-playfair text-dark">Quick Questions</h3>
                </div>
                
                <div className="space-y-6">
                  {qaItems.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-playfair font-semibold text-dark flex items-center gap-2">
                        <span className="text-primary">Q:</span> {item.question}
                      </h4>
                      <p className="text-gray-700 font-playfair pl-6">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fun Extras */}
              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FaMusic className="text-accent" />
                    <span className="font-playfair text-dark">Song Requests?</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCar className="text-secondary" />
                    <span className="font-playfair text-dark">Need Transport?</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-playfair text-center">
                  Special requests? Email us at contact@davidanddorcas.com
                </p>
              </div>
            </motion.div>
          </div>

          {/* Final Note */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg">
              <FaHeart className="text-accent" />
              <span className="font-playfair text-gray-700">Note from the Couple</span>
            </div>
            <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-700 font-playfair italic">
              "Your presence is the only gift we need. We can't wait to share this special day with you!"
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-playfair font-bold">D</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <span className="text-white font-playfair font-bold">D</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;