import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const aboutData = [
    {
      icon: 'fa-lightbulb',
      title: '我们的愿景',
      description: '成为全球领先的电气工程解决方案提供商，通过创新技术推动行业发展。'
    },
    {
      icon: 'fa-bullseye',
      title: '我们的使命',
      description: '为客户提供安全、高效、智能的电气工程解决方案，创造持久价值。'
    },
    {
      icon: 'fa-shield-halved',
      title: '我们的价值观',
      description: '诚信、创新、卓越、责任、合作，是我们企业文化的核心。'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium mb-3">
            关于我们
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            专业团队，卓越服务
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            成立于2005年，我们专注于为各类客户提供全方位的电气工程解决方案，从设计咨询到施工运维，始终坚持以质量为核心，以客户需求为导向。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <div className="space-y-8">
              {aboutData.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="mt-1 p-3 bg-blue-100 dark:bg-blue-900/40 rounded-xl text-blue-600 dark:text-blue-400">
                    <i className={`fa-solid ${item.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12"
            >
              <a 
                href="#contact" 
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                联系我们了解更多
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 md:order-2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Electrical%20engineering%20team%20working%20on%20project%20in%20modern%20office&sign=66ed9819e0cece14f9b630c542c5e138" 
                alt="电气工程团队" 
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            <div className="absolute top-10 -right-10 w-40 h-40 bg-blue-500 dark:bg-blue-700 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-300 dark:bg-blue-600 rounded-full opacity-20 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}