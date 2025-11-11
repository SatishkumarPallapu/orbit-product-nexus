
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, MessageCircle } from 'lucide-react';

export const ContactMethods = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pallapuvenkatesh2122@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      action: () => window.open('mailto:pallapuvenkatesh2122@gmail.com', '_blank')
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9441100146',
      color: 'from-purple-500 to-pink-500',
      action: () => window.open('tel:+919441100146', '_blank')
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+91 9441100146',
      color: 'from-green-500 to-green-600',
      action: () => window.open('https://wa.me/919441100146', '_blank')
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="space-y-6">
      {contactMethods.map((method, index) => {
        const Icon = method.icon;
        
        return (
          <motion.div
            key={index}
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 + index * 0.2 }}
            whileHover={{ 
              rotateY: 10, 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            onClick={method.action}
            className="relative p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 cursor-pointer group"
            style={{ 
              transform: 'perspective(1000px)',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)'
            }}
          >
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                  rotateZ: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: index * 0.5
                }}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${method.color}`}
                style={{ 
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                  transform: 'perspective(800px) rotateX(10deg)'
                }}
              >
                <Icon className="text-white" size={24} />
              </motion.div>
              
              <div>
                <h4 className="text-lg font-semibold text-white">{method.label}</h4>
                <p className="text-white/70">{method.value}</p>
              </div>
              
              <ExternalLink className="text-white/40 group-hover:text-white/80 transition-colors ml-auto" size={20} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
