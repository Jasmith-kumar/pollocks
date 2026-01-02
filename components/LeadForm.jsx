"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Send, CheckCircle, User, Phone, Mail, BookOpen, Calendar, MapPin } from "lucide-react";

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    childName: "",
    parentName: "",
    email: "",
    phone: "",
    dob: "",
    grade: "",
    branch: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          childName: "",
          parentName: "",
          email: "",
          phone: "",
          dob: "",
          grade: "",
          branch: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl md:rounded-3xl p-8 sm:p-12 text-center shadow-xl"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-pollocks-black mb-4">
            Thank You!
          </h3>
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            We've received your enquiry and will contact you within 24 hours.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="rounded-full"
          >
            Submit Another Enquiry
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">
      <div className="text-center mb-8 md:mb-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-pollocks-blue uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-medium block mb-3 md:mb-4"
        >
          Get Started
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-pollocks-black mb-3 md:mb-4"
        >
          Admission Enquiry
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto"
        >
          Fill out the form below and our admissions team will contact you shortly.
        </motion.p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Child Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Child's Name *
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="childName"
                required
                value={formData.childName}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 outline-none transition-all"
                placeholder="Enter child's name"
              />
            </div>
          </div>

          {/* Parent Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Parent's Name *
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="parentName"
                required
                value={formData.parentName}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 outline-none transition-all"
                placeholder="Enter parent's name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 outline-none transition-all"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Child's Date of Birth
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 outline-none transition-all"
              />
            </div>
          </div>

          {/* Grade */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Admission Grade *
            </label>
            <div className="relative">
              <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                name="grade"
                required
                value={formData.grade}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 outline-none transition-all appearance-none bg-white"
              >
                <option value="">Select Grade</option>
                <option value="pre-nursery">Pre-Nursery</option>
                <option value="nursery">Nursery</option>
                <option value="lkg">LKG</option>
                <option value="ukg">UKG</option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
                <option value="5">Class 5</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
              </select>
            </div>
          </div>

          {/* Branch */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Branch
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 outline-none transition-all appearance-none bg-white"
              >
                <option value="">Select Branch</option>
                <option value="madhurawada">Madhurawada</option>
                <option value="madhura-nagar">Madhura Nagar</option>
                <option value="mvp">MVP</option>
                <option value="railway-new-colony">Railway New Colony</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Message
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 outline-none transition-all resize-none"
              placeholder="Any specific questions or requirements..."
            />
          </div>
        </div>

        <div className="mt-6 sm:mt-8">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-pollocks-blue text-white rounded-xl hover:bg-pollocks-blue-dark transition-colors disabled:opacity-50 text-base sm:text-lg font-medium"
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                Submit Enquiry <Send className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>
        </div>
      </motion.form>
    </div>
  );
}
