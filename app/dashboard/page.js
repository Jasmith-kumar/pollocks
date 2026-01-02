"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Phone, Mail, User, GraduationCap, Building, RefreshCw } from "lucide-react";

export default function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads);
      }
    } catch (error) {
      console.error("Failed to fetch leads", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-12 pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
            <div>
                <h1 className="text-4xl font-serif font-bold text-pollocks-black mb-2">Admission Enquiries</h1>
                <p className="text-gray-500">Manage and view incoming admission requests.</p>
            </div>
            <button 
                onClick={fetchLeads}
                className="p-2 hover:bg-white rounded-full hover:shadow-md transition-all text-gray-500 hover:text-pollocks-blue"
                title="Refresh"
            >
                <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
            </button>
        </div>
        
        {loading && leads.length === 0 ? (
          <div className="grid gap-4">
            {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 bg-white rounded-2xl shadow-sm animate-pulse" />
            ))}
          </div>
        ) : leads.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl shadow-sm border border-gray-100">
             <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-gray-300" size={32} />
             </div>
             <h3 className="text-xl font-medium text-gray-900 mb-2">No enquiries yet</h3>
             <p className="text-gray-500">New admission enquiries will appear here.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {leads.map((lead, idx) => (
              <motion.div 
                key={lead._id || idx} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100/50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-pollocks-blue/20 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Student Column */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                            <GraduationCap size={12} /> STUDENT
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl text-pollocks-black font-bold mb-2 group-hover:text-pollocks-blue transition-colors">
                                {lead.childName || lead.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">Parent: {lead.parentName || "N/A"}</p>
                            <div className="space-y-1.5">
                                <a href={`mailto:${lead.email}`} className="text-sm text-gray-500 hover:text-pollocks-blue flex items-center gap-2 transition-colors w-fit">
                                    <Mail size={14} className="text-gray-400" /> {lead.email}
                                </a>
                                <a href={`tel:${lead.phone}`} className="text-sm text-gray-500 hover:text-pollocks-blue flex items-center gap-2 transition-colors w-fit">
                                    <Phone size={14} className="text-gray-400" /> {lead.phone}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Details Column */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                                <GraduationCap size={12} /> GRADE
                            </div>
                            <p className="font-medium text-gray-900">{lead.grade || lead.type || "N/A"}</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                                <Building size={12} /> BRANCH
                            </div>
                            <p className="font-medium text-gray-900">{lead.branch || "N/A"}</p>
                        </div>
                        <div className="space-y-3 col-span-2">
                            <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                                <MapPin size={12} /> PREVIOUS SCHOOL
                            </div>
                            <p className="font-medium text-gray-900">{lead.previousSchool || lead.location || "Not specified"}</p>
                        </div>
                    </div>

                    {/* Date Column */}
                    <div className="lg:col-span-3 lg:text-right space-y-3 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-gray-50 lg:pl-8 h-full">
                        <div className="flex items-center lg:justify-end gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                            <Calendar size={12} /> RECEIVED
                        </div>
                        <div>
                            <p className="text-lg font-medium text-gray-900">
                                {new Date(lead.createdAt).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                                {new Date(lead.createdAt).toLocaleTimeString('en-US', {
                                    hour: 'numeric',
                                    minute: '2-digit',
                                    hour12: true
                                })}
                            </p>
                        </div>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
