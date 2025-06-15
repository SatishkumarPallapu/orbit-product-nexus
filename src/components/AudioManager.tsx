
import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AudioManager = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  
  // Profile intro text for text-to-speech fallback
  const profileIntro = `
    Hi, I'm Venky Pallapu, a passionate Product Manager with over 8 years of experience 
    transforming ideas into impactful products. I specialize in data-driven insights, 
    user-centered design, and strategic execution. I've successfully launched over 50 products 
    with a 98% client satisfaction rate and achieved an average 5x ROI increase for my clients. 
    Welcome to my portfolio where innovation meets execution.
  `;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Auto-play when component mounts
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Auto-play prevented by browser:', error);
        // Fallback to text-to-speech if available
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(profileIntro);
          utterance.rate = 0.9;
          utterance.pitch = 0.5;
          utterance.volume = 0.8;
          speechSynthesis.speak(utterance);
          setIsPlaying(true);
        }
      }
    };

    playAudio();

    // Handle visibility change (tab switching)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (audio.paused === false) {
          audio.pause();
          setIsPlaying(false);
        }
        if (speechSynthesis.speaking) {
          speechSynthesis.pause();
          setIsPlaying(false);
        }
      } else {
        // Resume when tab becomes visible again
        if (audio.paused) {
          audio.play().then(() => setIsPlaying(true)).catch(console.error);
        }
        if (speechSynthesis.paused) {
          speechSynthesis.resume();
          setIsPlaying(true);
        }
      }
    };

    // Handle page unload (reset)
    const handleBeforeUnload = () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Auto-hide controls after 5 seconds
    const hideTimer = setTimeout(() => {
      setShowControls(false);
    }, 5000);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearTimeout(hideTimer);
      if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
      }
    };
  }, [profileIntro]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      if (speechSynthesis.speaking) {
        speechSynthesis.pause();
      }
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {
        // Fallback to text-to-speech
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(profileIntro);
          utterance.rate = 0.9;
          utterance.pitch = 1;
          utterance.volume = isMuted ? 0 : 0.8;
          speechSynthesis.speak(utterance);
          setIsPlaying(true);
        }
      });
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !audio.muted;
      setIsMuted(audio.muted);
    }
    
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
      if (!isMuted) {
        const utterance = new SpeechSynthesisUtterance(profileIntro);
        utterance.volume = 0;
        speechSynthesis.speak(utterance);
      }
    }
  };

  return (
    <>
      {/* Audio element with placeholder audio file */}
      <audio
        ref={audioRef}
        loop
        muted={isMuted}
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        {/* Replace with your actual audio file */}
        <source src="/profile-intro.mp3" type="audio/mpeg" />
        <source src="/profile-intro.wav" type="audio/wav" />
      </audio>

      {/* Audio Controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 z-50 flex items-center gap-2 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
            onMouseEnter={() => setShowControls(true)}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlayPause}
              className="p-2 text-white hover:text-blue-400 transition-colors"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMute}
              className="p-2 text-white hover:text-blue-400 transition-colors"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
