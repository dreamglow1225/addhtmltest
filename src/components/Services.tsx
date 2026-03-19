import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      icon: 'fa-bolt',
      title: '电力系统设计',
      description: '提供专业的电力系统规划、设计与优化服务，确保系统安全可靠运行。',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconBg: 'bg-blue-100 dark:bg-blue-800',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: 'fa-microchip',
      title: '自动化控制系统',
      description: '智能自动化控制系统集成，提升生产效率，降低运营成本。',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      iconBg: 'bg-indigo-100 dark:bg-indigo-800',
      iconColor: 'text-indigo-600 dark:text-indigo-400'
    },
    {
      icon: 'fa-solar-system',
      title: '新能源解决方案',
      description: '太阳能、风能等可再生能源系统设计与安装，助力绿色发展。',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      iconBg: 'bg-green-100 dark:bg-green-800',
      iconColor: 'text-green-600 dark:text-green-400'
    },
    {
      icon: 'fa-building',
      title: '工业电气安装',
      description: '工业厂房、生产线电气设备安装调试，确保设备高效稳定运行。',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      iconBg: 'bg-orange-100 dark:bg-orange-800',
      iconColor: 'text-orange-600 dark:text-orange-400'
    },
    {
      icon: 'fa-network-wired',
      title: '智能建筑系统',
      description: '智能照明、楼宇自控、安防监控等系统集成，打造智慧建筑。',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      iconBg: 'bg-purple-100 dark:bg-purple-800',
      iconColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: 'fa-clipboard-list',
      title: '电气设备检测',
      description: '专业的电气设备检测、维护与故障诊断服务，延长设备使用寿命。',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      iconBg: 'bg-red-100 dark:bg-red-800',
      iconColor: 'text-red-600 dark:text-red-400'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            我们的服务
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            全方位电气工程解决方案
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            我们拥有专业的技术团队和丰富的行业经验，为您提供从设计咨询到施工运维的一站式电气工程服务，满足您的多样化需求。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 ${service.bgColor} transition-all`}
            >
              <div className="p-8">
                <div className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-6 ${service.iconColor}`}>
                  <i className={`fa-solid ${service.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <a 
                  href="#contact" 
                  className={`inline-flex items-center font-medium hover:underline transition-colors ${service.iconColor}`}
                >
                  了解更多
                  <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
                </a>
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
            href="#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-medium transition-all shadow-lg hover:shadow-xl"
          >
            获取定制解决方案
          </a>
        </motion.div>
      </div>
    </section>
  );
}