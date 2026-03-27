/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShoppingBag, 
  User, 
  CheckCircle, 
  Zap, 
  Droplets, 
  ShieldCheck, 
  ArrowRight,
  Menu,
  X,
  CreditCard,
  Smartphone,
  Globe
} from "lucide-react";
import { useState } from "react";

import productImg from "./assets/product.png";
import lifestyleImg from "./assets/lifestyle.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-goldenrod">SÉZA</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#product" className="text-sm font-medium text-goldenrod/80 hover:text-goldenrod transition-colors">Product</a>
            <a href="#benefits" className="text-sm font-medium text-goldenrod/80 hover:text-goldenrod transition-colors">Benefits</a>
            <a href="#how-to-use" className="text-sm font-medium text-goldenrod/80 hover:text-goldenrod transition-colors">How to Use</a>
            <div className="flex items-center space-x-4 border-l pl-8 border-gray-200">
              <button className="p-2 text-goldenrod/80 hover:text-goldenrod transition-colors">
                <User size={20} />
              </button>
              <button className="p-2 text-goldenrod/80 hover:text-goldenrod transition-colors relative">
                <ShoppingBag size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-goldenrod rounded-full"></span>
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button className="p-2 text-goldenrod/80">
              <ShoppingBag size={20} />
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-goldenrod/80"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4"
        >
          <a href="#product" className="block text-lg font-medium text-goldenrod">Product</a>
          <a href="#benefits" className="block text-lg font-medium text-goldenrod">Benefits</a>
          <a href="#how-to-use" className="block text-lg font-medium text-goldenrod">How to Use</a>
          <div className="pt-4 flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-goldenrod/80">
              <User size={20} />
              <span>Log in</span>
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="product" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold tracking-wider text-goldenrod/80 uppercase mb-6">
            Science-Backed Hair Care
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-goldenrod mb-6 leading-[1.1]">
            SÉZA 2dDR <br />
            <span className="text-goldenrod/50">Hair Serum</span>
          </h1>
          <p className="text-xl text-goldenrod/80 mb-8 leading-relaxed max-w-lg">
            A premium treatment designed to target thinning hair and promote fuller, stronger growth using 2-Deoxy-D-Ribose ingredient.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-10">
            <div className="text-3xl font-bold text-goldenrod">£19.99 <span className="text-sm font-normal text-goldenrod/50 ml-1">GBP</span></div>
            <a 
              href="https://amzn.eu/d/0fc4RudD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-goldenrod text-white rounded-full font-semibold hover:bg-goldenrod/90 transition-all flex items-center justify-center space-x-2 group"
            >
              <span>BUY NOW</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100">
            <div className="flex items-center space-x-3 text-sm text-goldenrod/70">
              <ShieldCheck size={18} className="text-goldenrod/50" />
              <span>Reduces Hair Loss</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-goldenrod/70">
              <Zap size={18} className="text-goldenrod/50" />
              <span>Visible Results</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-square rounded-3xl overflow-hidden bg-gray-50"
        >
          {/* 
            PRO TIP: To use your own product image:
            1. Upload your image to the 'src/assets' folder using the file explorer.
            2. Import it at the top of this file: import productImg from './assets/your-image.png';
            3. Replace the URL below with {productImg}
          */}
          <img 
            src={productImg} 
            alt="SÉZA 2dDR Hair Serum Bottle" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "./assets/product.png";
            }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100/20 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Cellular Energy",
      description: "Boosts scalp energy and microcirculation with 2dDR technology."
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Reduced Thinning",
      description: "Helps reduce hair thinning and shedding by strengthening follicles."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Visible Density",
      description: "Encourages visible density and resilience with regular use."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Non-Greasy",
      description: "Lightweight, fast-absorbing formula that leaves no residue."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-goldenrod">Cutting-Edge Ingredient</h2>
          <p className="text-lg text-goldenrod/80">
            SÉZA 2dDR Hair Serum is formulated with 2-Deoxy-D-Ribose, a breakthrough ingredient known for stimulating cellular rejuvenation at the root.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-goldenrod">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-goldenrod">{benefit.title}</h3>
              <p className="text-goldenrod/70 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowToUse = () => {
  return (
    <section id="how-to-use" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="order-2 lg:order-1 rounded-3xl overflow-hidden aspect-[4/5] bg-gray-100"
        >
          <img 
            src={lifestyleImg} 
            alt="Applying Hair Serum" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "./assets/lifestyle.png";
            }}
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-4xl font-bold mb-8 text-goldenrod">How to Use</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-10 h-10 rounded-full bg-goldenrod text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="text-lg font-bold mb-2 text-goldenrod">Targeted Application</h4>
                <p className="text-goldenrod/80">Apply 1–2 drops directly to clean scalp in target areas where thinning is most visible.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-10 h-10 rounded-full bg-goldenrod text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="text-lg font-bold mb-2 text-goldenrod">Gentle Massage</h4>
                <p className="text-goldenrod/80">Massage gently in circular motions until fully absorbed. The lightweight formula won't leave residue.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-10 h-10 rounded-full bg-goldenrod text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="text-lg font-bold mb-2 text-goldenrod">Consistent Routine</h4>
                <p className="text-goldenrod/80">Use 1–3 times daily for best results. Visible density and resilience improve with regular use.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold tracking-tighter text-goldenrod mb-6 block">SÉZA</span>
            <p className="text-goldenrod/70 max-w-sm mb-8">
              SÉZA 2dDR Hair Serum is a premium, science-backed treatment designed to target thinning hair and promote fuller, healthier growth.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-goldenrod/50 hover:text-goldenrod cursor-pointer transition-colors">
                <Globe size={16} />
              </div>
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-goldenrod/50 hover:text-goldenrod cursor-pointer transition-colors">
                <Smartphone size={16} />
              </div>
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-goldenrod/50 hover:text-goldenrod cursor-pointer transition-colors">
                <CreditCard size={16} />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-goldenrod/50">Shop</h4>
            <ul className="space-y-4 text-sm text-goldenrod/80">
              <li><a href="#" className="hover:text-goldenrod transition-colors">Hair Serum</a></li>
              <li><a href="#" className="hover:text-goldenrod transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-goldenrod transition-colors">Best Sellers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-goldenrod/50">Support</h4>
            <ul className="space-y-4 text-sm text-goldenrod/80">
              <li><a href="#" className="hover:text-goldenrod transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-goldenrod transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-goldenrod transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-goldenrod/50 uppercase tracking-widest">
          <p>© 2026 SÉZA Inc Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>Powered by Shopify</span>
            <a href="#" className="hover:text-goldenrod transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-goldenrod selection:bg-goldenrod selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <HowToUse />
      </main>
      <Footer />
    </div>
  );
}
