
import React from 'react';
import { motion } from 'framer-motion';
import { X, Download, Calendar, Users, Target, TrendingUp, FileText, Image, ExternalLink } from 'lucide-react';

interface CaseStudyData {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail?: string;
  documentPdf?: string;
  images?: string[];
  duration: string;
  teamSize: string;
  objective: string;
  outcome: string;
  tags: string[];
  color: string;
  longDescription?: string[];
  keyFindings?: string[];
  methodology?: string[];
  recommendations?: string[];
}

interface CaseStudyViewerProps {
  caseStudy: CaseStudyData;
  onClose: () => void;
}

export const CaseStudyViewer: React.FC<CaseStudyViewerProps> = ({ caseStudy, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 backdrop-blur-sm sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, rotateY: -90, opacity: 0 }}
        animate={{ scale: 1, rotateY: 0, opacity: 1 }}
        exit={{ scale: 0.8, rotateY: 90, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex h-[90dvh] max-h-[900px] w-full min-w-0 max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
        style={{ transform: 'perspective(1000px)' }}
      >
        {/* Header */}
        <div className={`relative shrink-0 border-b border-white/20 bg-gradient-to-r ${caseStudy.color} bg-opacity-20 p-4 sm:p-6`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="text-white" size={20} />
          </button>
          
          <div className="min-w-0 space-y-3 pr-8 sm:pr-10">
            <div className="flex min-w-0 flex-wrap items-center gap-2 break-words pr-2 text-orange-400 text-sm font-medium uppercase tracking-wide">
              <FileText size={16} />
              {caseStudy.category}
            </div>
            <h2 className="break-words text-2xl font-bold text-white sm:text-3xl">{caseStudy.title}</h2>
            
            {/* Meta Info */}
            <div className="flex flex-wrap gap-3 text-sm text-white/70 sm:gap-6 sm:text-base">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{caseStudy.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>{caseStudy.teamSize}</span>
              </div>
              {caseStudy.documentPdf && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => window.open(caseStudy.documentPdf, '_blank')}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Download size={16} />
                  <span>Download PDF</span>
                </motion.button>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="space-y-8 p-4 sm:p-6">
            {/* Overview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="text-blue-400" size={20} />
                  <h4 className="text-lg font-semibold text-white">Objective</h4>
                </div>
                <p className="text-white/80">{caseStudy.objective}</p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="text-green-400" size={20} />
                  <h4 className="text-lg font-semibold text-white">Outcome</h4>
                </div>
                <p className="text-white/80">{caseStudy.outcome}</p>
              </div>
            </div>

            {/* Detailed Description */}
            {caseStudy.longDescription && (
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white">Project Overview</h4>
                <div className="space-y-3">
                  {caseStudy.longDescription.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-blue-400 mt-2 flex-shrink-0">•</span>
                      <p className="min-w-0 break-words text-white/80">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Methodology */}
            {caseStudy.methodology && (
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white">Methodology</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.methodology.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-white/5 rounded-xl border border-white/10"
                    >
                      <p className="text-white/80">{method}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Images Gallery */}
            {caseStudy.images && caseStudy.images.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Image className="text-purple-400" size={20} />
                  <h4 className="text-xl font-semibold text-white">Visual Documentation</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {caseStudy.images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative rounded-xl overflow-hidden bg-white/5 aspect-video cursor-pointer"
                    >
                      <img 
                        src={image} 
                        alt={`${caseStudy.title} - Image ${index + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <ExternalLink className="text-white" size={24} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Findings */}
            {caseStudy.keyFindings && (
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white">Key Findings</h4>
                <div className="space-y-3">
                  {caseStudy.keyFindings.map((finding, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-xl border border-white/10"
                    >
                      <p className="text-white/80">{finding}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Tags</h4>
              <div className="flex flex-wrap gap-3">
                {caseStudy.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`px-4 py-2 bg-gradient-to-r ${caseStudy.color} rounded-full text-white font-medium`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
