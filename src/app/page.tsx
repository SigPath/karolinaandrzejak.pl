"use client";

import { motion } from "framer-motion";
import BackgroundStars from "@/components/BackgroundStars";
import VirtualOracle from "@/components/VirtualOracle";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden pt-20 pb-10">
      <BackgroundStars />
      
      <div className="z-10 w-full max-w-4xl flex flex-col items-center justify-center">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Twoja przyszłość zapisana w gwiazdach, 
            <span className="text-gold block mt-2 text-shadow-sm shadow-gold/20">odczytana w Poznaniu</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Karolina Andrzejak – Profesjonalne doradztwo duchowe i wgląd w przeznaczenie.
          </motion.p>
        </motion.div>

        {/* Virtual Oracle Integration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="w-full"
        >
          <VirtualOracle />
        </motion.div>

        {/* Link to Blog */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16"
        >
          <Link 
            href="/blog" 
            className="group flex flex-col items-center text-gray-400 hover:text-gold transition-colors font-serif"
          >
            <span className="mb-2">Czytaj Księgę Wiedzy (Blog)</span>
            <div className="h-[1px] w-0 group-hover:w-full bg-gold transition-all duration-300"></div>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
