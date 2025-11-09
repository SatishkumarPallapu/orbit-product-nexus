import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

interface PDFModalProps {
  pdfUrl: string;
  title: string;
  onClose: () => void;
}

export const PDFModal: React.FC<PDFModalProps> = ({ pdfUrl, title, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(200, prev + 25));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(50, prev - 25));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.8, rotateX: -15, opacity: 0 }}
        animate={{ scale: 1, rotateX: 0, opacity: 1 }}
        exit={{ scale: 0.8, rotateX: 15, opacity: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="relative max-w-7xl w-full h-[90vh] rounded-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          backdropFilter: 'blur(40px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        {/* Glass shine effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{
              x: ['-200%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        {/* Header */}
        <div className="relative p-6 border-b border-white/10 backdrop-blur-xl bg-white/5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
              <p className="text-white/60 text-sm">Case Study Document</p>
            </div>
            
            {/* Controls */}
            <div className="flex items-center gap-3">
              {/* Zoom Controls */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleZoomOut}
                  className="p-1 rounded-lg hover:bg-white/10 text-white"
                >
                  <ZoomOut size={18} />
                </motion.button>
                <span className="text-white text-sm font-medium min-w-[3rem] text-center">
                  {zoom}%
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleZoomIn}
                  className="p-1 rounded-lg hover:bg-white/10 text-white"
                >
                  <ZoomIn size={18} />
                </motion.button>
              </div>

              {/* Download Button */}
              <motion.a
                href={pdfUrl}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-colors"
              >
                <Download size={20} />
              </motion.a>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.05, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X size={20} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="relative h-[calc(100%-140px)] bg-black/20 backdrop-blur-sm overflow-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -15 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center min-h-full p-8"
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
            >
              <iframe
                src={`${pdfUrl}#page=${currentPage}&view=FitH`}
                className="w-full h-full rounded-2xl shadow-2xl bg-white"
                style={{ minHeight: '800px' }}
                title={title}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Navigation */}
        <div className="relative p-4 border-t border-white/10 backdrop-blur-xl bg-white/5">
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05, x: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={20} />
              <span>Previous</span>
            </motion.button>

            <div className="flex items-center gap-4">
              <span className="text-white/60 text-sm">Page</span>
              <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/20">
                <input
                  type="number"
                  min="1"
                  value={currentPage}
                  onChange={(e) => setCurrentPage(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 bg-transparent text-white text-center outline-none"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, x: 3 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNextPage}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all"
            >
              <span>Next</span>
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* 3D depth shadow */}
        <div 
          className="absolute inset-0 rounded-3xl bg-black/30 -z-10 pointer-events-none"
          style={{
            transform: 'translateZ(-20px) translateY(10px)',
            filter: 'blur(15px)',
          }}
        />
      </motion.div>
    </motion.div>
  );
};
