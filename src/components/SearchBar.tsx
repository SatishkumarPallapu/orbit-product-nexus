import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, FileText, Briefcase, TrendingUp } from 'lucide-react';

interface SearchResult {
  id: number;
  title: string;
  category: string;
  description: string;
  type: 'project' | 'case-study';
  tags?: string[];
}

interface SearchBarProps {
  projects: any[];
  caseStudies: any[];
  onResultClick: (result: SearchResult) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ projects, caseStudies, onResultClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const allItems: SearchResult[] = useMemo(() => {
    const projectItems = projects.map(p => ({
      id: p.id,
      title: p.title,
      category: p.category,
      description: p.description,
      type: 'project' as const,
      tags: p.roles
    }));

    const caseStudyItems = caseStudies.map(c => ({
      id: c.id,
      title: c.title,
      category: c.category,
      description: c.description,
      type: 'case-study' as const,
      tags: c.tags
    }));

    return [...projectItems, ...caseStudyItems];
  }, [projects, caseStudies]);

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return allItems.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.tags?.some(tag => tag.toLowerCase().includes(query))
    ).slice(0, 6);
  }, [searchQuery, allItems]);

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Search Input */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <motion.div
          animate={{
            scale: isFocused ? 1.02 : 1,
            boxShadow: isFocused 
              ? '0 20px 60px rgba(34, 211, 238, 0.3)' 
              : '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}
          className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
          }}
        >
          {/* Animated gradient border */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={{
              background: isFocused 
                ? 'linear-gradient(90deg, rgba(34, 211, 238, 0.3), rgba(168, 85, 247, 0.3), rgba(34, 211, 238, 0.3))'
                : 'transparent'
            }}
            style={{ padding: '1px', zIndex: -1 }}
          />

          <div className="flex items-center gap-3 px-6 py-4">
            <motion.div
              animate={{ 
                rotate: isFocused ? 360 : 0,
                color: isFocused ? '#22d3ee' : '#ffffff'
              }}
              transition={{ duration: 0.5 }}
            >
              <Search size={24} />
            </motion.div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              placeholder="Search projects and case studies..."
              className="flex-1 bg-transparent text-white placeholder-white/50 outline-none text-lg"
            />

            <AnimatePresence>
              {searchQuery && (
                <motion.button
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  onClick={handleClear}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <X size={20} />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: [
                'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
                'linear-gradient(90deg, transparent 100%, rgba(255, 255, 255, 0.1) 150%, transparent 200%)'
              ],
              backgroundPosition: ['0% 0%', '200% 0%']
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </motion.div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {searchQuery && filteredResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-full left-0 right-0 z-50 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden mt-2"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
            }}
          >
            <div className="max-h-96 overflow-y-auto p-2">
              {filteredResults.map((result, index) => (
                <motion.div
                  key={`${result.type}-${result.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    onResultClick(result);
                    setSearchQuery('');
                  }}
                  className="group relative cursor-pointer p-4 rounded-xl hover:bg-white/10 transition-all mb-2"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  {/* Hover gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: 'linear-gradient(90deg, rgba(34, 211, 238, 0.1), rgba(168, 85, 247, 0.1))'
                    }}
                  />

                  <div className="relative z-10 flex items-start gap-4">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-xl ${
                        result.type === 'project'
                          ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'
                          : 'bg-gradient-to-br from-orange-500/20 to-pink-500/20'
                      }`}
                    >
                      {result.type === 'project' ? (
                        <Briefcase size={20} className="text-blue-400" />
                      ) : (
                        <FileText size={20} className="text-orange-400" />
                      )}
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-semibold text-sm group-hover:text-cyan-400 transition-colors">
                          {result.title}
                        </h4>
                        <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">
                          {result.type === 'project' ? 'Project' : 'Case Study'}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm mb-2 line-clamp-1">
                        {result.category}
                      </p>
                      <p className="text-white/50 text-xs line-clamp-2">
                        {result.description}
                      </p>

                      {/* Tags */}
                      {result.tags && result.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {result.tags.slice(0, 3).map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                      className="text-white/40 group-hover:text-cyan-400"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <TrendingUp size={20} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Result count */}
            <div className="px-4 py-2 border-t border-white/10 text-center">
              <p className="text-white/50 text-xs">
                Found {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''}
              </p>
            </div>
          </motion.div>
        )}

        {/* No results */}
        {searchQuery && filteredResults.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 z-50 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 mt-2 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
            }}
          >
            <p className="text-white/70">No results found for "{searchQuery}"</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
