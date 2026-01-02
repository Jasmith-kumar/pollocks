"use client";

import { motion } from "framer-motion";
import { FileText, FormInput, ClipboardCheck, UserCheck, Key, GraduationCap } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Enquiry",
    description: "Visit our campus or fill the online enquiry form to know more about admissions.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Application",
    description: "Submit the application form with required documents for processing.",
    icon: FormInput,
  },
  {
    number: "03",
    title: "Assessment",
    description: "Age-appropriate assessment to understand your child's learning level.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Interview",
    description: "Brief interaction with parents and child to discuss educational goals.",
    icon: UserCheck,
  },
  {
    number: "05",
    title: "Admission",
    description: "Complete fee payment and receive admission confirmation.",
    icon: Key,
  },
  {
    number: "06",
    title: "Orientation",
    description: "Join the orientation program to get familiar with school culture.",
    icon: GraduationCap,
  },
];

export default function ProcessTimeline() {
  return (
    <>
      {/* Desktop Horizontal Version */}
      <section className="hidden lg:flex w-fit h-screen bg-white items-center px-16 xl:px-24 shrink-0">
        <div>
          <div className="mb-12 xl:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pollocks-blue uppercase tracking-[0.2em] text-sm font-medium block mb-4"
            >
              How it Works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl xl:text-5xl font-serif font-bold text-pollocks-black"
            >
              Admission Process
            </motion.h2>
          </div>

          <div className="flex gap-6 xl:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-56 xl:w-64 shrink-0"
                >
                  <div className="relative mb-6 xl:mb-8">
                    <div className="w-16 h-16 xl:w-20 xl:h-20 bg-pollocks-blue rounded-2xl flex items-center justify-center shadow-lg shadow-pollocks-blue/30">
                      <Icon className="w-8 h-8 xl:w-10 xl:h-10 text-white" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-8 xl:top-10 left-20 xl:left-24 w-32 xl:w-36 h-[2px] bg-gradient-to-r from-pollocks-blue to-pollocks-blue/20" />
                    )}
                  </div>
                  <span className="text-pollocks-blue font-bold text-lg xl:text-xl mb-2 block">{step.number}</span>
                  <h3 className="text-xl xl:text-2xl font-serif font-bold text-pollocks-black mb-2 xl:mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm xl:text-base leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mobile/Tablet Version */}
      <section className="lg:hidden py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-pollocks-blue uppercase tracking-[0.15em] text-xs sm:text-sm font-medium block mb-3">
              How it Works
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-pollocks-black">
              Admission Process
            </h2>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pollocks-blue rounded-xl flex items-center justify-center shadow-lg shadow-pollocks-blue/20">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-12 bg-pollocks-blue/20 ml-6 sm:ml-7 mt-2" />
                    )}
                  </div>
                  <div className="pt-1">
                    <span className="text-pollocks-blue font-bold text-sm mb-1 block">{step.number}</span>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-pollocks-black mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
