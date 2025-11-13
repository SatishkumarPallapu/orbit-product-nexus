import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from './AnimatedCounter';
import { Briefcase, Users, Award, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Briefcase,
    value: 5,
    suffix: '+',
    label: 'Years Experience',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    value: 50,
    suffix: '+',
    label: 'Projects Delivered',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Award,
    value: 15,
    suffix: '+',
    label: 'Certifications',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    color: 'from-green-500 to-emerald-500'
  }
];

export const StatsCounter: React.FC = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-16">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="relative p-6 bg-background/40 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-colors">
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            
            <div className="space-y-1">
              <div className="text-4xl font-bold text-foreground">
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix}
                  duration={2500}
                />
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>

            <motion.div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity -z-10`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
