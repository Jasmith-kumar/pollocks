"use client";

import { FileText, FormInput, ClipboardCheck, UserCheck, Key, GraduationCap } from "lucide-react";

const steps = [
  { number: "01", title: "Enquiry", description: "Initial consultation to understand your child's needs and answer your questions about our curriculum.", icon: FileText },
  { number: "02", title: "Application", description: "Submit the application form with required documents and registration fee.", icon: FormInput },
  { number: "03", title: "Assessment", description: "Age-appropriate assessment to understand your child's learning readiness.", icon: ClipboardCheck },
  { number: "04", title: "Interview", description: "Interaction with parents and child to ensure alignment with our values.", icon: UserCheck },
  { number: "05", title: "Admission", description: "Fee payment and completion of admission formalities.", icon: Key },
  { number: "06", title: "Orientation", description: "Welcome program to familiarize with school culture and expectations.", icon: GraduationCap },
];

export default function AdmissionProcess() {
  return (
    <>
      {/* Desktop Horizontal Version */}
      <section className="hidden lg:flex w-screen min-w-screen h-screen bg-white items-center px-8 lg:px-10 shrink-0">
        <div className="w-full max-w-full">
          <div className="mb-8">
            <span className="text-pollocks-blue uppercase tracking-[0.15em] text-xs font-medium block mb-2">
              How it Works
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-pollocks-black">
              Admission Process
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="group">
                  <div className="relative bg-pollocks-sky/50 rounded-xl p-5 h-full hover:bg-pollocks-sky transition-colors">
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-pollocks-blue rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm">
                      <Icon className="w-5 h-5 text-pollocks-blue" />
                    </div>
                    
                    <h4 className="font-serif font-bold text-pollocks-black text-base mb-2">{step.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll Hint */}
          <div className="mt-6 text-right">
            <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll right →</span>
          </div>
        </div>
      </section>

      {/* Mobile Version - Improved Spacing */}
      <section className="lg:hidden bg-white px-5 sm:px-8">
        {/* Header with better spacing */}
        <div className="text-center mb-10">
          <span className="text-pollocks-blue uppercase tracking-[0.15em] text-xs font-medium block mb-3">
            How it Works
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-pollocks-black mb-3">
            Admission Process
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
            Simple steps to join the Pollocks family
          </p>
        </div>

        {/* Steps Grid with better spacing */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-pollocks-sky/50 rounded-xl p-5"
              >
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-pollocks-blue rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md">
                  {step.number}
                </div>
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="w-5 h-5 text-pollocks-blue" />
                </div>
                <h4 className="font-serif font-bold text-pollocks-black text-sm sm:text-base mb-2">{step.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
