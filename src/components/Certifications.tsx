import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Shield, CheckCircle, Star, Trophy, Cloud, BarChart3, Users, Lightbulb, Database, Zap } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "Certified Product Manager",
    issuer: "Product Management Institute", 
    date: "2023",
    validUntil: "2026",
    credentialId: "CPM-2023-45789",
    description: "Comprehensive certification covering product strategy, roadmapping, user research, and product lifecycle management.",
    skills: ["Product Strategy", "Roadmapping", "User Research", "Agile", "Analytics"],
    verificationUrl: "#",
    image: "/placeholder.svg",
    color: "from-blue-500 to-indigo-600",
    status: "active",
    logo: Users,
    logoColor: "text-blue-400"
  },
  {
    id: 2,
    title: "Google Analytics Certified",
    issuer: "Google",
    date: "2023", 
    validUntil: "2024",
    credentialId: "GA-IQ-789456123",
    description: "Advanced certification in Google Analytics, covering data analysis, conversion tracking, and performance measurement.",
    skills: ["Data Analysis", "Conversion Tracking", "Performance Metrics", "Attribution Modeling"],
    verificationUrl: "#",
    image: "/placeholder.svg",
    color: "from-orange-500 to-red-600",
    status: "active",
    logo: BarChart3,
    logoColor: "text-orange-400"
  },
  {
    id: 3,
    title: "Scrum Product Owner",
    issuer: "Scrum Alliance",
    date: "2022",
    validUntil: "2025",
    credentialId: "CSPO-2022-98765",
    description: "Certified Scrum Product Owner with expertise in agile methodologies, backlog management, and stakeholder collaboration.",
    skills: ["Scrum", "Agile", "Backlog Management", "Sprint Planning", "Stakeholder Management"],
    verificationUrl: "#",
    image: "/placeholder.svg",
    color: "from-green-500 to-teal-600",
    status: "active",
    logo: Zap,
    logoColor: "text-green-400"
  },
  {
    id: 4,
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022",
    validUntil: "2025",
    credentialId: "AWS-SAA-C02-567890",
    description: "Solutions architect certification with focus on cloud infrastructure, scalability, and system design principles.",
    skills: ["Cloud Architecture", "System Design", "Infrastructure", "Scalability", "Security"],
    verificationUrl: "#",
    image: "/placeholder.svg",
    color: "from-purple-500 to-pink-600",
    status: "active",
    logo: Cloud,
    logoColor: "text-purple-400"
  },
  {
    id: 5,
    title: "Design Thinking Certification",
    issuer: "IDEO U",
    date: "2021",
    validUntil: "Lifetime",
    credentialId: "DT-2021-34567",
    description: "Human-centered design methodology certification focusing on innovation, empathy, and creative problem-solving.",
    skills: ["Design Thinking", "User Empathy", "Ideation", "Prototyping", "Innovation"],
    verificationUrl: "#",
    image: "/placeholder.svg",
    color: "from-cyan-500 to-blue-600",
    status: "active",
    logo: Lightbulb,
    logoColor: "text-cyan-400"
  },
  {
    id: 6,
    title: "Data Science Fundamentals",
    issuer: "IBM",
    date: "2021",
    validUntil: "2024",
    credentialId: "IBM-DS-2021-78901",
    description: "Foundation certification in data science, machine learning, and statistical analysis for product insights.",
    skills: ["Data Science", "Machine Learning", "Statistical Analysis", "Python", "SQL"],
    verificationUrl: "#",
    image: "/placeholder.svg",
    color: "from-indigo-500 to-purple-600",
    status: "expiring",
    logo: Database,
    logoColor: "text-indigo-400"
  }
];

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);
  const [filter, setFilter] = useState<'all' | 'active' | 'expiring'>('all');

  const filteredCertifications = certifications.filter(cert => {
    if (filter === 'all') return true;
    return cert.status === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/20';
      case 'expiring': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Certifications</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Continuously expanding knowledge through industry-recognized certifications and professional development
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { key: 'all', label: 'All Certifications', icon: Trophy },
              { key: 'active', label: 'Active', icon: CheckCircle },
              { key: 'expiring', label: 'Expiring Soon', icon: Calendar }
            ].map(({ key, label, icon: Icon }) => (
              <motion.button
                key={key}
                onClick={() => setFilter(key as any)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  filter === key
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon size={16} />
                <span className="font-medium">{label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => {
            const LogoIcon = cert.logo;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedCert(cert)}
                className="relative group cursor-pointer"
              >
                <div className="relative p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(cert.status)}`}>
                      {cert.status === 'active' ? 'Active' : 'Expiring Soon'}
                    </span>
                  </div>

                  {/* Certificate Logo */}
                  <motion.div
                    animate={{ rotateY: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className={`relative mb-6 w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}
                  >
                    <LogoIcon className={`${cert.logoColor}`} size={32} />
                  </motion.div>

                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 transition-all duration-300">
                      {cert.title}
                    </h3>
                    
                    <p className="text-white/70 font-medium mb-2">{cert.issuer}</p>
                    
                    <div className="flex items-center justify-center gap-2 text-white/60 mb-4">
                      <Calendar size={14} />
                      <span className="text-sm">{cert.date}</span>
                    </div>

                    <p className="text-white/60 text-sm mb-6 line-clamp-3">
                      {cert.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-white/10 text-white/70 rounded-lg text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 text-white/50 rounded-lg text-xs">
                          +{cert.skills.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* View Details */}
                    <div className="flex items-center justify-center gap-2 text-white/70 group-hover:text-white transition-colors">
                      <span className="text-sm">View Details</span>
                      <ExternalLink size={14} />
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            <Trophy className="mx-auto mb-4 text-yellow-400" size={32} />
            <div className="text-3xl font-bold text-white mb-2">{certifications.length}</div>
            <div className="text-white/70">Total Certifications</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            <CheckCircle className="mx-auto mb-4 text-green-400" size={32} />
            <div className="text-3xl font-bold text-white mb-2">
              {certifications.filter(c => c.status === 'active').length}
            </div>
            <div className="text-white/70">Active Certifications</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            <Star className="mx-auto mb-4 text-blue-400" size={32} />
            <div className="text-3xl font-bold text-white mb-2">5+</div>
            <div className="text-white/70">Skill Areas</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            <Shield className="mx-auto mb-4 text-purple-400" size={32} />
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-white/70">Verified</div>
          </div>
        </motion.div>

        {/* Certification Detail Modal */}
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateY: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-8">
                <div className={`w-24 h-24 bg-gradient-to-br ${selectedCert.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                  {React.createElement(selectedCert.logo, { className: selectedCert.logoColor, size: 48 })}
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-2">{selectedCert.title}</h3>
                <p className="text-xl text-white/70 mb-4">{selectedCert.issuer}</p>
                
                <div className="flex items-center justify-center gap-6 text-white/60 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Issued: {selectedCert.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={16} />
                    <span>Valid Until: {selectedCert.validUntil}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                  <p className="text-white/70 leading-relaxed">{selectedCert.description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-3 py-2 bg-gradient-to-r ${selectedCert.color} bg-opacity-20 text-white rounded-lg`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Credential Details</h4>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-white/70 mb-2">
                      <span className="text-white font-medium">Credential ID:</span> {selectedCert.credentialId}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(selectedCert.status)}`}>
                        {selectedCert.status === 'active' ? 'Active' : 'Expiring Soon'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${selectedCert.color} text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300`}
                  >
                    <ExternalLink size={16} />
                    Verify Credential
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCert(null)}
                    className="px-6 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};
