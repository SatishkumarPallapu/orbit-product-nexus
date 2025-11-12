import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Calendar, MapPin, Heart } from 'lucide-react';
import { AnimatedCard } from './AnimatedCard';
import { staggerContainer, fadeInUp } from '@/utils/animationVariants';
import { AboutStaggered } from './AboutStaggered';

export const About = () => {
  return <AboutStaggered />;
};
