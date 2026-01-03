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
        setFormData({ childName: "", parentName: "", email: "", phone: "", dob: "", grade: "", branch: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto ios-glass rounded-3xl p-10"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-pollocks-black mb-3">Thank You!</h3>
          <p className="text-gray-600 text-sm">We've received your enquiry and will contact you shortly.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-12 py-8 lg:py-0">
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-pollocks-blue uppercase tracking-[0.15em] text-xs font-medium block mb-2"
          >
            Get Started
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-pollocks-black mb-2"
          >
            Start Your Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-sm max-w-md mx-auto"
          >
            Ready to enroll? Tell us about your child.
          </motion.p>
        </div>

        {/* Form with iOS Glass Effect */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="ios-glass rounded-3xl p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Child's Name */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Child's Name *</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  required
                  placeholder="Enter child's name"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200/50 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 outline-none transition-all text-sm"
                />
              </div>
            </div>

            {/* Parent's Name */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Parent's Name *</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  placeholder="Enter parent's name"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200/50 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 outline-none transition-all text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Email Address *</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200/50 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 outline-none transition-all text-sm"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Phone Number *</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200/50 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 outline-none transition-all text-sm"
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Child's Date of Birth</label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200/50 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 outline-none transition-all text-sm"
                />
              </div>
            </div>

            {/* Grade */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Admission Grade *</label>
              <div className="relative">
                <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200/50 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 outline-none transition-all text-sm appearance-none cursor-pointer"
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
          </div>

          {/* Branch - Full Width */}
          <div className="mt-4">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Preferred Branch</label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200/50 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 outline-none transition-all text-sm appearance-none cursor-pointer"
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
          <div className="mt-4">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Additional Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Any specific questions or requirements..."
              className="w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200/50 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 outline-none transition-all text-sm resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 rounded-2xl py-4 text-sm font-medium"
          >
            {isSubmitting ? "Submitting..." : "Request Consultation"}
            <Send className="ml-2 w-4 h-4" />
          </Button>
        </motion.form>
      </div>
    </div>
  );
}
