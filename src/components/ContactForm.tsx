"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import clsx from "clsx";

interface FormData {
  name: string;
  email: string;
  phone?: string;
  interest: "Buying" | "Selling" | "Both";
  message: string;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: { interest: "Buying" },
  });

  const onSubmit = (data: FormData) => {
    console.log("Contact form submitted:", data);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-tag"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight"
          >
            Let&apos;s Find Your
            <br />
            <span className="italic font-normal">Dream Home</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <p className="font-sans text-muted text-lg leading-relaxed">
              Whether you&apos;re ready to make an offer or just starting to explore,
              our advisors are here to help every step of the way.
            </p>

            <div className="flex flex-col gap-6">
              <ContactDetail
                icon={<Phone size={18} />}
                label="Phone"
                value="+1 (415) 000-1234"
              />
              <ContactDetail
                icon={<Mail size={18} />}
                label="Email"
                value="hello@estateand.co"
              />
              <ContactDetail
                icon={<MapPin size={18} />}
                label="Office"
                value="500 Market Street, Suite 1900, San Francisco, CA 94105"
              />
            </div>

            <div className="mt-4 p-5 bg-accent/5 border border-accent/15 rounded-2xl">
              <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                <span className="font-semibold text-accent">Office hours:</span>{" "}
                Monday – Friday, 9 AM – 6 PM PT. Saturdays by appointment.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 gap-4 text-center">
                <CheckCircle2 size={48} className="text-accent" />
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  Message Received!
                </h3>
                <p className="font-sans text-muted text-base max-w-sm">
                  Thank you for reaching out. One of our advisors will be in
                  touch within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="bg-white rounded-2xl shadow-card p-7 sm:p-9 flex flex-col gap-5"
              >
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full Name" error={errors.name?.message}>
                    <input
                      type="text"
                      placeholder="Jane Smith"
                      {...register("name", { required: "Name is required" })}
                      className={inputClass(!!errors.name)}
                    />
                  </Field>
                  <Field label="Email Address" error={errors.email?.message}>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email",
                        },
                      })}
                      className={inputClass(!!errors.email)}
                    />
                  </Field>
                </div>

                {/* Phone + Interest row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Phone (optional)">
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      {...register("phone")}
                      className={inputClass(false)}
                    />
                  </Field>
                  <Field label="I&apos;m interested in">
                    <select
                      {...register("interest")}
                      className={inputClass(false)}
                    >
                      <option value="Buying">Buying</option>
                      <option value="Selling">Selling</option>
                      <option value="Both">Both</option>
                    </select>
                  </Field>
                </div>

                {/* Message */}
                <Field label="Message" error={errors.message?.message}>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you're looking for…"
                    {...register("message", { required: "Message is required" })}
                    className={clsx(inputClass(!!errors.message), "resize-none")}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-1 bg-accent hover:bg-accent-dark text-white font-sans font-medium text-sm tracking-wide px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-md active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return clsx(
    "w-full font-sans text-sm text-foreground bg-[#F5F5F2] border rounded-xl px-4 py-3 outline-none transition-all duration-150 placeholder:text-muted/60",
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
      : "border-border focus:border-accent focus:ring-2 focus:ring-accent/10"
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-sans text-xs font-semibold text-foreground/70 tracking-wide uppercase">
        {label}
      </label>
      {children}
      {error && (
        <p className="font-sans text-xs text-red-500 mt-0.5">{error}</p>
      )}
    </div>
  );
}

function ContactDetail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
        {icon}
      </div>
      <div>
        <p className="font-sans text-xs font-semibold text-muted uppercase tracking-wide mb-0.5">
          {label}
        </p>
        <p className="font-sans text-sm text-foreground leading-snug">{value}</p>
      </div>
    </div>
  );
}
