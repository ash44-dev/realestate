"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "500+", label: "Homes Sold" },
  { value: "20", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center"
        >
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="relative h-[480px] sm:h-[560px] rounded-2xl overflow-hidden shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80"
                alt="Real estate professional"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative accent block */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl shadow-card-hover p-5 flex flex-col gap-1 w-40">
              <p className="font-serif text-3xl font-bold text-accent leading-none">20+</p>
              <p className="font-sans text-sm text-muted leading-snug">Years of trusted expertise</p>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col gap-6"
          >
            <span className="section-tag">About Us</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Real Estate, <br />
              <span className="italic font-normal">Elevated</span>
            </h2>
            <p className="font-sans text-muted text-lg leading-relaxed">
              At Estate &, we believe that buying or selling a home is one of
              life&apos;s most meaningful milestones. For over two decades, we&apos;ve
              guided clients through that journey with honesty, expertise, and
              an unwavering commitment to finding the right fit — not just any
              deal.
            </p>
            <p className="font-sans text-muted text-base leading-relaxed">
              Our team of seasoned advisors brings deep local knowledge and a
              curated network of off-market opportunities to every engagement.
              We work at your pace, on your terms.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-4 pt-6 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <p className="font-serif text-3xl font-bold text-accent leading-none">
                    {stat.value}
                  </p>
                  <p className="font-sans text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
