import React, { useState, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const {
        theme,
        toggleTheme,
        isDark
    } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [{
        name: "首页",
        href: "#"
    }, {
        name: "关于我们",
        href: "#about"
    }, {
        name: "服务项目",
        href: "#services"
    }, {
        name: "工程案例",
        href: "#projects"
    }, {
        name: "联系我们",
        href: "#contact"
    }];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm py-3" : "bg-transparent py-5"}`}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    {}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -20
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.5
                        }}
                        className="flex items-center">
                        <div className="text-blue-600 dark:text-blue-400 font-bold text-2xl mr-1">
                            <i className="fa-solid fa-bolt"></i>
                        </div>
                        <span
                            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">电气工程
                                        </span>
                    </motion.div>
                    {}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => <motion.a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
                            whileHover={{
                                scale: 1.05
                            }}
                            whileTap={{
                                scale: 0.95
                            }}>
                            {link.name}
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </motion.a>)}
                        <></>
                        <motion.button
                            whileHover={{
                                scale: 1.05
                            }}
                            whileTap={{
                                scale: 0.95
                            }}
                            className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            onClick={toggleTheme}
                            aria-label="切换主题">
                            {isDark ? <i className="fa-solid fa-sun text-yellow-500"></i> : <i className="fa-solid fa-moon text-gray-700"></i>}
                        </motion.button>
                    </nav>
                    {}
                    <div className="flex items-center md:hidden">
                        <motion.button
                            whileHover={{
                                scale: 1.05
                            }}
                            whileTap={{
                                scale: 0.95
                            }}
                            className="mr-3 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            onClick={toggleTheme}
                            aria-label="切换主题">
                            {isDark ? <i className="fa-solid fa-sun text-yellow-500"></i> : <i className="fa-solid fa-moon text-gray-700"></i>}
                        </motion.button>
                        <motion.button
                            whileHover={{
                                scale: 1.05
                            }}
                            whileTap={{
                                scale: 0.95
                            }}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="打开菜单">
                            <i className="fa-solid fa-bars text-xl"></i>
                        </motion.button>
                    </div>
                </div>
            </div>
            {}
            <AnimatePresence>
                {mobileMenuOpen && <motion.div
                    initial={{
                        opacity: 0,
                        height: 0
                    }}
                    animate={{
                        opacity: 1,
                        height: "auto"
                    }}
                    exit={{
                        opacity: 0,
                        height: 0
                    }}
                    transition={{
                        duration: 0.3
                    }}
                    className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                    <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
                        {navLinks.map(link => <a
                            key={link.name}
                            href={link.href}
                            className="py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}>
                            {link.name}
                        </a>)}
                        <button
                            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg">咨询服务
                                          </button>
                    </div>
                </motion.div>}
            </AnimatePresence>
        </header>
    );
}