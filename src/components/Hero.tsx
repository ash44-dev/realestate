"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function Hero() {
  const scrollToListings = () => {
    document.querySelector("#listings")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85"
          alt="Modern luxury home exterior"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-block text-white/70 font-sans text-xs tracking-[0.25em] uppercase border border-white/30 rounded-full px-4 py-1.5"
        >
          Exceptional Properties
        </motion.span>

        <motion.h1
          custom={0.15}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight"
        >
          Find a Place You&apos;ll
          <br />
          <span className="italic font-normal text-white/90">Love to Call Home</span>
        </motion.h1>

        <motion.p
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-sans text-white/80 text-lg sm:text-xl max-w-xl leading-relaxed"
        >
          We curate exceptional homes for discerning buyers — from sun-soaked
          coastlines to mountain retreats and city penthouses.
        </motion.p>

        <motion.div
          custom={0.45}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          <button
            onClick={scrollToListings}
            className="bg-accent hover:bg-accent-dark text-white font-sans font-medium text-sm tracking-wide px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
          >
            Browse Listings
          </button>
          <button
            onClick={scrollToContact}
            className="border border-white/50 hover:bg-white/10 text-white font-sans font-medium text-sm tracking-wide px-8 py-4 rounded-xl transition-all duration-200 active:scale-[0.98]"
          >
            Schedule a Tour
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToListings}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white/80 transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.button>
    </section>
  );
}
