import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const projects = [
    {
      id: 1,
      title: '城市智能电网改造',
      category: '电力系统',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Smart%20grid%20control%20center%20modern%20technology&sign=71df541f688d56880e8a86e7d2828c12',
    },
    {
      id: 2,
      title: '工业自动化生产线',
      category: '自动化控制',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Industrial%20automation%20production%20line&sign=46c106f7856be96d3c09d079c17d170d',
    },
    {
      id: 3,
      title: '太阳能发电站建设',
      category: '新能源',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Solar%20power%20plant%20field%20with%20panels&sign=1b27ce28e6232bdb68898e14b83ec0c0',
    },
    {
      id: 4,
      title: '商业中心智能配电系统',
      category: '电力系统',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Commercial%20building%20electrical%20control%20room&sign=821a5f6819ad8d1c2530857b3b9a702d',
    },
    {
      id: 5,
      title: '数据中心电力保障系统',
      category: '电力系统',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Data%20center%20server%20room%20with%20electrical%20equipment&sign=3162ea6259b27422c1bf9cf9f94f6955',
    },
    {
      id: 6,
      title: '智能楼宇控制系统',
      category: '智能建筑',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Smart%20building%20control%20system%20dashboard&sign=4ca58af7866d326d7c16afa0ca12bbe0',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
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
            成功案例
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            我们的工程项目
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            浏览我们近年来完成的代表性项目，展示我们在电气工程领域的专业能力和技术实力。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-all"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <a 
                      href="#" 
                      className="block w-full text-center py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      查看详情
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a 
            href="#" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium transition-all hover:bg-blue-50 dark:hover:bg-gray-700"
          >
            查看更多案例
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
}