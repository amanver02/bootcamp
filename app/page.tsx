"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Search, Menu, ArrowRight, Star, Heart } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Minimalist Chronograph",
    price: "$299",
    category: "Watches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "Premium Leather Backpack",
    price: "$189",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    name: "Noise-Cancelling Headphones",
    price: "$349",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    name: "Smart Fitness Tracker",
    price: "$129",
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=600",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 font-sans text-neutral-900 dark:text-neutral-50 selection:bg-neutral-900 selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Menu className="h-5 w-5 sm:hidden" />
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 p-1.5 rounded-lg">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <span className="font-bold text-xl tracking-tight hidden sm:block">Aura</span>
              </div>
            </div>
            
            <div className="hidden sm:flex items-center space-x-8">
              <a href="#" className="text-sm font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">New Arrivals</a>
              <a href="#" className="text-sm font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">Men</a>
              <a href="#" className="text-sm font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">Women</a>
              <a href="#" className="text-sm font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">Collections</a>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-48">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-200 via-neutral-50 to-neutral-50 dark:from-neutral-800 dark:via-neutral-950 dark:to-neutral-950"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium mb-8">
                <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                Spring Collection 2026 is here
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              Elevate your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-900 dark:from-neutral-400 dark:to-neutral-100">
                everyday essentials.
              </span>
            </motion.h1>
            
            <motion.p 
              className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              Discover our curated collection of premium goods designed to bring both beauty and utility to your daily life. Thoughtfully crafted for the modern individual.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              <button className="group flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium transition-transform hover:scale-105 active:scale-95">
                Shop the Collection
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 h-14 px-8 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800">
                View Lookbook
              </button>
            </motion.div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24 bg-white dark:bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">Trending Now</h2>
                <p className="text-neutral-500 dark:text-neutral-400">Our most sought-after pieces this week.</p>
              </div>
              <a href="#" className="hidden sm:flex items-center gap-1 text-sm font-medium hover:underline underline-offset-4">
                View all <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <motion.div 
                  key={product.id}
                  className="group relative cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 p-2 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="h-5 w-5 hover:fill-red-500 hover:text-red-500 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <span className="font-medium">{product.price}</span>
                    </div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">{product.category}</p>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-neutral-500 ml-1">(124)</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 sm:hidden flex justify-center">
               <button className="flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-neutral-200 dark:border-neutral-800 font-medium">
                View all products
              </button>
            </div>
          </div>
        </section>
        
        {/* Value Proposition */}
        <section className="py-24 border-t border-neutral-200 dark:border-neutral-800">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                 <div>
                    <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900 mb-6">
                       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                       </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">On all orders over $100. Delivered to your door in 3-5 business days.</p>
                 </div>
                 <div>
                    <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900 mb-6">
                       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                       </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Easy Returns</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">Not quite right? Return it within 30 days for a full refund, no questions asked.</p>
                 </div>
                 <div>
                    <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900 mb-6">
                       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                       </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Secure Checkout</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">Your payment information is encrypted and secure with us.</p>
                 </div>
              </div>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-50 dark:bg-neutral-950 pt-16 pb-8 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 p-1.5 rounded-lg">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <span className="font-bold text-xl tracking-tight">Aura</span>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                Redefining modern commerce with carefully curated essentials for everyday life.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-3 text-sm text-neutral-500 dark:text-neutral-400">
                <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Men's Collection</a></li>
                <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Women's Collection</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-neutral-500 dark:text-neutral-400">
                <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-4">Stay in the loop</h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white"
                />
                <button className="px-4 py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-500 dark:text-neutral-400">
            <p>© 2026 Aura Commerce. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
