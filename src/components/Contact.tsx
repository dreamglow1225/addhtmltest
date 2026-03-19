import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function Contact() {
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

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const {
            name,
            value
        } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            toast.success("您的咨询已提交成功，我们会尽快与您联系！");

            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            });

            setIsSubmitting(false);
        }, 1500);
    };

    const contactInfo = [{
        icon: "fa-map-marker-alt",
        title: "公司地址",
        content: "北京市朝阳区建国路88号电气大厦"
    }, {
        icon: "fa-phone",
        title: "联系电话",
        content: "400-888-8888"
    }, {
        icon: "fa-envelope",
        title: "电子邮箱",
        content: "info@electrical.com"
    }, {
        icon: "fa-clock",
        title: "工作时间",
        content: "周一至周五 9:00-18:00"
    }];

    const subjectOptions = ["项目咨询", "技术支持", "合作洽谈", "其他问题"];

    return (
        <section
            id="contact"
            className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
            {}
            <div
                className="absolute -top-20 -right-20 w-96 h-96 bg-blue-400 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div
                className="absolute bottom-0 -left-20 w-96 h-96 bg-blue-600 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true
                    }}
                    transition={{
                        duration: 0.6
                    }}
                    className="text-center mb-16">
                    <span
                        className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium mb-3">联系我们
                                                          </span>
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">咨询与合作
                                                          </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">无论您有任何问题或需求，都可以通过以下方式与我们联系，我们将竭诚为您提供专业的服务和支持。
                                                          </p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {}
                    <></>
                    {}
                    <div className="space-y-8">
                        <motion.div
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3
                            }}
                            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">联系方式</h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => <div key={index} className="flex items-start gap-4">
                                    <div
                                        className="mt-1 p-3 bg-blue-100 dark:bg-blue-900/40 rounded-xl text-blue-600 dark:text-blue-400">
                                        <i className={`fa-solid ${info.icon} text-xl`}></i>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{info.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
                                    </div>
                                </div>)}
                            </div>
                        </motion.div>
                        <></>
                    </div>
                </div>
            </div>
        </section>
    );
}