import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
    const fadeIn = {
        hidden: {
            opacity: 0,
            y: 20
        },

        visible: {
            opacity: 1,
            y: 0
        }
    };

    const quickLinks = [{
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

    const services = [{
        name: "电力系统设计",
        href: "#services"
    }, {
        name: "自动化控制系统",
        href: "#services"
    }, {
        name: "新能源解决方案",
        href: "#services"
    }, {
        name: "工业电气安装",
        href: "#services"
    }, {
        name: "智能建筑系统",
        href: "#services"
    }, {
        name: "电气设备检测",
        href: "#services"
    }];

    const socialLinks = [{
        icon: "fa-weixin",
        name: "微信"
    }, {
        icon: "fa-weibo",
        name: "微博"
    }, {
        icon: "fa-linkedin",
        name: "LinkedIn"
    }, {
        icon: "fa-youtube",
        name: "YouTube"
    }, {
        icon: "fa-twitter",
        name: "Twitter"
    }];

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <></>
                {}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 电气工程有限公司. 保留所有权利.
                                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">隐私政策</a>
                            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">使用条款</a>
                            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookie 政策</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}