'use client';

import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <section className="py-24 bg-slate-50 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight"
        >
          Professional Insights, <span className="text-[#FC6100]">Universal Access.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-medium"
        >
          <p>
            OpenAthletics was born from the belief that understanding your performance
            shouldn&apos;t be a paid privilege. We provide a transparent, independent platform where
            every runner can access advanced analytics without subscriptions or paywalls.
          </p>
          <p className="text-gray-900 font-semibold">
            Strava records your miles, but we provide the context.
          </p>
          <p>
            By analyzing the relationship between your effort and heart rate, we translate raw data
            into clear insights, helping you master your aerobic efficiency and track real progress.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
