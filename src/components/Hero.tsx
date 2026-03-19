import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background Elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-400 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-600 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 right-40 w-80 h-80 bg-blue-500 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              专业电气解决方案提供商
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-600 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent leading-tight"
          >
            创新电气技术<br className="hidden md:block" /> 驱动未来发展
          </motion.h1>

          <motion.p 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            我们提供全方位的电气工程解决方案，从设计咨询到施工运维，为您的项目保驾护航，打造安全、高效、智能的电力系统。
          </motion.p>

          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-medium transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <i className="fa-solid fa-cog mr-2"></i>
              了解服务
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 px-8 py-4 rounded-xl text-base font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center"
            >
              <i className="fa-solid fa-envelope mr-2"></i>
              联系我们
            </motion.a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 dark:border-gray-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                15+
              </div>
              <p className="text-gray-600 dark:text-gray-300">年行业经验</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                500+
              </div>
              <p className="text-gray-600 dark:text-gray-300">成功项目</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                200+
              </div>
              <p className="text-gray-600 dark:text-gray-300">专业工程师</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}