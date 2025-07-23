"use client"

import { ClipboardList, Wallet, HeartPulse, ListTodo } from "lucide-react";
import ProjectManagement from "@/assets/ProjectManagementApp.png"
import CryptoWalletApp from "@/assets/CryptoWalletApp.png"
import CareWise from "@/assets/CarseWiseApp.jpg"
import Jobify from "@/assets/JpbifyPlatform.png"
import TodoTasks from "@/assets/TodoTasks.png"
import CareWisePlatform from "@/assets/careWisePanel.png"
import RunningCounter from "@/assets/runCounter.png"
import Glucose from "@/assets/GlucoseLevel.png"
import Tomography from "@/assets/Tomography.png"
import Brain from "@/assets/Brain.png"
import Image from "next/image";
import {motion, useInView, useScroll, useTransform} from 'framer-motion';
import { useRef } from "react";

export default function Projects() {
    const sectionRef = useRef(null);
    const appImageRef = useRef<HTMLImageElement>(null);
    const inView = useInView(sectionRef, { once: true, amount: 0.1 });

    const {scrollYProgress: ImageProgress} = useScroll({
      target: appImageRef,
      offset: ['start end', 'end start'],
    });

    const {scrollYProgress} = useScroll({
      target: sectionRef,
      offset: ['start end', 'end start'],
    });

    const rotateX = useTransform(ImageProgress, [0,1], [3, -3])
    const opacityValue = useTransform(ImageProgress, [0,1], [0.8, 2])
    const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);
    return (
        <section id="projects" ref={sectionRef} className="bg-white px-5 pb-5 -mb-1 md:px-10">
            <motion.div
                className="relative inline-flex border border-[#01B4F2] my-5 md:mt-25"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <p className="font-semibold text-xl md:text-3xl text-black mx-4 my-1">My Projects</p>
                <div className="absolute -top-0.5 -left-0.5 bg-[#01B4F2] h-1.5 w-1.5"></div>
                <div className="absolute -top-0.5 -right-0.5 bg-[#01B4F2] h-1.5 w-1.5"></div>
                <div className="absolute -bottom-0.5 -left-0.5 bg-[#01B4F2] h-1.5 w-1.5"></div>
                <div className="absolute -bottom-0.5 -right-0.5 bg-[#01B4F2] h-1.5 w-1.5"></div>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:flex gap-2 mt-5 my-5 items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.8 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="relative group flex flex-col items-start gap-1 bg-[#01B4F2] px-3 md:px-6 pt-3 md:pt-6 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 blur-md scale-105 rounded-lg opacity-0 group-hover:opacity-100 -top-2 transition-all duration-300 pointer-events-none z-0" />
                    <div className="px-2 py-2 bg-[#F8F8F8] rounded-full flex items-center justify-center mb-2">
                        <ClipboardList className="text-[#01B4F2]" size={18} />
                    </div>
                    <p className="text-white font-bold text-sm md:text-xl md:text-semibold">Projects Management App</p>
                    <p className="text-white font-light text-[11px] md:text-[16px] max-w-100">A collaborative platform for teams to manage projects, tasks, and deadlines efficiently with real-time updates and analytics.</p>
                    <div className="h-45 items-center justify-center overflow-hidden lg:h-125 md:h-120">
                        <Image
                            src={ProjectManagement}
                            alt="Project Management App"
                            width={370}
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.8 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    className="relative group flex flex-col items-start gap-1 bg-[#181818] px-3 md:px-6 pt-3 md:pt-6 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 blur-md scale-105 rounded-lg opacity-0 group-hover:opacity-100 -top-2 transition-all duration-300 pointer-events-none z-0" />

                    <div className="px-2 py-2 bg-[#F8F8F8] rounded-full flex items-center justify-center mb-2">
                        <Wallet className="text-[#01B4F2]" size={18} />
                    </div>
                    <p className="text-white font-bold text-sm md:text-xl md:text-semibold">Crypto Wallet App</p>
                    <p className="max-w-100 text-white font-light text-[11px] md:text-[16px]">A secure and user-friendly app for managing multiple cryptocurrencies, tracking transactions, and monitoring portfolio performance.</p>
                    <div className="flex w-full items-center justify-center">
                        <div className="h-43  lg:h-113 md:h-120 items-center justify-center overflow-hidden rounded-t-3xl mt-7 border-t-[3px] border-l-[3px] border-r-[3px] border-black">
                            <Image
                                src={CryptoWalletApp}
                                alt="Crypto Wallet App"
                                width={270}
                            />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.8 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.7, delay: 1.1 }}
                    className="relative group flex flex-col items-start gap-1 bg-[#01B4F2] px-3 md:px-6 pt-3 md:pt-6 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer lg:hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 blur-md scale-105 rounded-lg opacity-0 group-hover:opacity-100 -top-2 transition-all duration-300 pointer-events-none z-0" />

                    <div className="px-2 py-2 bg-[#F8F8F8] rounded-full flex items-center justify-center mb-2">
                        <ListTodo className="text-[#01B4F2]" size={18} />
                    </div>
                    <p className="text-white font-semibold text-sm md:text-xl md:text-semibold">TodoTasks Mobile App</p>
                    <p className="text-white font-light text-[11px] md:text-[16px] max-w-100">A productivity-focused mobile app for managing daily tasks, setting reminders, and tracking progress with a clean and intuitive interface.</p>
                    <div className="flex w-full items-center justify-center">
                        <div className="h-44 items-center justify-center overflow-hidden rounded-t-3xl mt-7 border-t-[3px] border-l-[3px] border-r-[3px] border-black">
                            <Image
                                src={TodoTasks}
                                alt="Crypto Wallet App"
                                width={270}
                            />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.8 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.7, delay: 1.1 }}
                    className="relative group flex flex-col items-start gap-1 bg-[#01B4F2] px-3 md:px-6 pt-3 md:pt-6 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 blur-md scale-105 rounded-lg opacity-0 group-hover:opacity-100 -top-2 transition-all duration-300 pointer-events-none z-0" />

                    <div className="px-2 py-2 bg-[#F8F8F8] rounded-full flex items-center justify-center mb-2">
                        <HeartPulse className="text-[#01B4F2]" size={18} />
                    </div>
                    <p className="text-white font-semibold text-sm md:text-xl md:text-semibold">Care Patient App</p>
                    <p className="text-white font-light text-[11px] md:text-[16px] max-w-100">A healthcare app designed for patients to track their health data, schedule appointments, and communicate securely with medical professionals.</p>
                    <div className="flex w-full items-center justify-center">
                        <div className="h-45 md:h-113 items-center justify-center overflow-hidden rounded-t-3xl mt-7 border-t-[3px] border-l-[3px] border-r-[3px] border-black">
                            <Image
                                src={CareWise}
                                alt="Crypto Wallet App"
                                width={270}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="relative mb-5">
                <motion.div style={{
                  opacity: opacityValue,
                  rotateX: rotateX,
                  transformPerspective: "800px",
                }}>
                  <div className="flex justify-center items-center border border-black/20 rounded-xl md:rounded-3xl p-2 bg-gradient-to-t from-[#01B4F2]/17 to-white">
                    <Image ref={appImageRef} src={Jobify} alt='Product Image' className='w-full rounded-xl md:rounded-3xl shadow-lg'/>
                  </div>
                </motion.div>
                <motion.div className="hidden md:flex absolute top-50 md:top-20 -right-5 border border-white/20 rounded-2xl p-5 flex flex-col bg-[#171717] shadow-lg" style={{translateY: translateY}}>
                    <p className="text-xs md:text-lg font-semibold leading-tight text-white mb-1">Secure & Transparent Hiring</p>
                    <p className="text-xs md:text-[12px] font-light text-white max-w-60">Our platform connects businesses with top freelancers, offering a secure environment for project-based hiring, milestone tracking, and transparent payments.</p>
                </motion.div>
                <motion.div className="scale-[0.7] md:scale-[1] absolute bottom-30 md:bottom-50 -left-7 border border-white/20 rounded-2xl p-5 flex flex-col bg-[#171717] shadow-lg" style={{translateY: translateY}}>
                    <p className="text-xs md:text-lg font-semibold leading-tight text-white mb-1">Algeria’s #1 freelancers platform</p>
                    <p className="text-xs md:text-[12px] font-light text-white max-w-60">The largest freelancers platform in Algeria, connecting businesses with top-tier talent across web, mobile, and AI development. It’s a scalable ecosystem empowering professionals and driving digital transformation.</p>
                </motion.div>
            </div>
            <div className="relative mb-5">
                <motion.div
                style={{
                  opacity: opacityValue,
                  rotateX: rotateX,
                  transformPerspective: "1300px",
                }}>
                    <div className="flex justify-center items-center border border-black/20 rounded-xl md:rounded-3xl p-2 bg-gradient-to-t from-[#01B4F2]/17 to-white">
                        <Image src={CareWisePlatform} alt="CareWisePlatform" className="w-full rounded-xl md:rounded-3xl shadow-lg"/>
                    </div>
                </motion.div>
                <div className="flex flex-col justify-center items-center border border-black/20 rounded-2xl p-4 items-start bg-gradient-to-t from-[#01B4F2]/15 to-white mt-3">
                    <p className="text-sm md:text-[15px] font-semibold leading-tight text-black mb-1">DoctorCare Admin Panel – Smart Appointment & Clinic Management</p>
                    <p className="text-[9px] md:text-sm font-light text-black">A powerful admin dashboard that allows clinics to manage doctors’ schedules, patient appointments, and real-time availability. Designed with usability in mind, it features role-based access, calendar views, notifications, and patient history tracking — all in one secure and efficient system.</p>
                </div>
                <motion.img src={Tomography.src} alt="" width={170} className="scale-[0.6] md:scale-[1] absolute top-2 -right-7 rounded-2xl border border-black/80 shadow-lg" style={{translateY: translateY}}/>
                <motion.img src={Brain.src} alt="" width={170} className="scale-[0.6] md:scale-[1] absolute top-50 md:top-90 -left-7 rounded-2xl shadow-lg" style={{translateY: translateY}}/>
                <motion.img src={RunningCounter.src} alt="" width={250} className="scale-[0.6] md:scale-[1] absolute -bottom-30 md:-bottom-20 -right-15 md:right-50" style={{translateY: translateY}}/>
                <motion.img src={Glucose.src} alt="" width={170} className="scale-[0.6] md:scale-[1] absolute  top-12 rounded-2xl shadow-lg" style={{translateY: translateY}}/>
            </div>
        </section>
    );
}