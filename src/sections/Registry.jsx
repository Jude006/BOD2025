import React from "react";
import { motion } from "framer-motion";
import { 
  FaGift, 
  FaHeart, 
  FaCreditCard, 
  FaCopy,
  FaCheck,
  FaPiggyBank
} from "react-icons/fa";

const Registry = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText("0123456789");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const bankAccounts = [
    {
      name: "David's Account",
      bank: "Guaranty Trust Bank",
      accountNumber: "012 3456 789",
      icon: <  FaPiggyBank className="text-primary" />
    },
    {
      name: "Dorcas's Account",
      bank: "Access Bank",
      accountNumber: "987 6543 210",
      icon: <  FaPiggyBank
 className="text-secondary" />
    },
    {
      name: "Joint Wedding Account",
      bank: "First Bank",
      accountNumber: "456 7890 123",
      icon: <FaHeart className="text-accent" />
    }
  ];

  return (
    <section id="registry" className="py-20 bg-light">
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
            <FaGift className="text-primary" />
            <span className="text-sm text-gray-600 font-playfair">Gifts & Donations</span>
          </div>
          <h2 className="mb-6 text-4xl md:text-5xl font-playfair text-dark">
            Gift Registry
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-playfair">
            Your presence is our greatest gift. For those who wish to give, 
            monetary contributions are appreciated.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Gift Message */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <div className="p-8 bg-white rounded-2xl shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-primary to-secondary">
                <FaHeart className="text-2xl text-white" />
              </div>
              
              <h3 className="mb-4 text-2xl font-playfair text-dark">
                A Note About Gifts
              </h3>
              
              <div className="space-y-4 text-gray-700 font-playfair">
                <p>
                  We are truly blessed to have you share in our special day. 
                  Your presence means the world to us.
                </p>
                <p>
                  For those who wish to give a gift, we would be grateful for 
                  monetary contributions as we begin our new life together.
                </p>
                <p className="italic text-primary">
                  Thank you for your love and support!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Account Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h3 className="mb-8 text-3xl font-playfair text-center text-dark">
              Bank Account Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bankAccounts.map((account, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white rounded-xl shadow-md border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-light">
                      {account.icon}
                    </div>
                    <h4 className="text-lg font-playfair text-dark">{account.name}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500 font-playfair">Bank</p>
                      <p className="font-playfair text-dark">{account.bank}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 font-playfair">Account Number</p>
                      <div className="flex items-center justify-between">
                        <p className="font-playfair text-dark text-xl tracking-wider font-semibold">
                          {account.accountNumber}
                        </p>
                        <button
                          onClick={handleCopyAccount}
                          className="p-2 text-gray-500 hover:text-primary transition-colors"
                          aria-label="Copy account number"
                        >
                          {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Copy Account Button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl">
              <h4 className="mb-4 text-xl font-playfair text-dark">
                Need to copy account details?
              </h4>
              
              <button
                onClick={handleCopyAccount}
                className={`inline-flex items-center gap-3 px-8 py-4 font-playfair font-semibold rounded-full transition-all duration-300 ${
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-primary text-white hover:bg-secondary"
                }`}
              >
                {copied ? (
                  <>
                    <FaCheck />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <FaCreditCard />
                    <span>Copy Main Account Number</span>
                  </>
                )}
              </button>
              
              {copied && (
                <p className="mt-4 text-sm text-green-600 font-playfair">
                  Account number copied! You can now paste it in your banking app.
                </p>
              )}
            </div>
          </motion.div>

          {/* Simple Final Message */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm">
              <FaHeart className="text-accent" />
              <span className="font-playfair text-gray-700">With Gratitude</span>
            </div>
            
            <p className="mt-6 text-lg text-gray-600 font-playfair">
              Thank you for your generosity and for being part of our journey.
            </p>
            
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-playfair font-bold">D</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <span className="text-white font-playfair font-bold">D</span>
              </div>
              <p className="font-playfair font-semibold text-dark">David & Dorcas</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Registry;