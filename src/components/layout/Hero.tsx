'use client';

import { motion } from 'framer-motion';
import LoginButton from '../auth/LoginButton';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-[#FC6100] rounded-full filter blur-[140px] opacity-10"></div>
        <div className="absolute -bottom-60 -right-20 w-[500px] h-[500px] bg-[#FFE0D1] rounded-full filter blur-[160px] opacity-20"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[95vh] py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-6xl md:text-9xl font-extrabold tracking-tighter text-gray-950 mb-10 leading-[0.85]"
        >
          Run <span className="text-[#FC6100]">Smarter.</span> <br />
          Train <span className="text-[#FC6100]">Deeper.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="max-w-3xl text-2xl md:text-3xl text-gray-800 mb-16 leading-relaxed font-medium"
        >
          Unlock the <strong className="text-gray-950 font-semibold">full potential</strong> of your
          Strava data. Our advanced analytics help you master your efficiency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: [1, 1.03, 1],
          }}
          transition={{
            opacity: { delay: 0.4, duration: 0.5 },
            scale: {
              delay: 0.9,
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-[#FC6100] rounded-lg blur opacity-15 group-hover:opacity-40 transition duration-300"></div>
          <div className="relative">
            <LoginButton />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
