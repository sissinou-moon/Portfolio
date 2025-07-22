"use client";

import { motion } from "framer-motion";
import Bakcground from "@/assets/Background.jpg"
import Sky from "@/assets/Sky.jpg"
import Portfolio from "@/assets/Portfolio.png"
import Image from "next/image";
import Japon from "@/assets/を.png"
import Abderrahmane from "@/assets/ABDERRAHMANE.png"

const japaneseTextContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const japaneseTextItem = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

export default function Section() {
    return (
        <div id="home" className="w-full h-screen bg-cover bg-center -mt-18 relative overflow-hidden" style={{ backgroundImage: `url(${Bakcground.src})` }}>
            <div className="absolute inset-0 bg-white opacity-60 z-0"></div>
            <div className="relative z-2">
                <motion.div 
                    className="hidden md:block lg:block absolute right-70 w-40 h-screen bg-center bg-cover" 
                    style={{ backgroundImage: `url(${Sky.src})` }}
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                ></motion.div>
                
                <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image src={Abderrahmane} alt="Abderrahmane" className="absolute top-40"/>
                </motion.div>

                <motion.p 
                    className="absolute top-45 md:left-10 left-5 text-[50px] font-bold text-black"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    ABDERRAHMANE
                </motion.p>
                <motion.p 
                    className="absolute top-65 md:top-70 md:left-10 text-center md:text-start text-md md:text-lg font-regular text-black max-w-190 px-10 md:px-0"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Creative and curious developer with experience in full-stack web and mobile apps.I enjoy solving real problems through clean code and smart design.Also active in tech communities, constantly learning and sharing knowledge.
                </motion.p>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Image src={Portfolio} alt="Portfolio" width={350} className="absolute top-100 md:left-10 max-w-200 scale-[0.8]"/>
                </motion.div>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Image src={Japon} alt="Portfolio" width={250} className="absolute top-120 left-60 text-lg font-medium text-black max-w-200"/>
                </motion.div>

                <motion.p 
                    className="absolute right-10 top-15 md:top-5 lg:top-5 font-medium text-sm text-black flex flex-col items-center"
                    variants={japaneseTextContainer}
                    initial="hidden"
                    animate="show"
                >
                    <motion.span variants={japaneseTextItem}>勝</motion.span>
                    <motion.span variants={japaneseTextItem}>利</motion.span>
                    <motion.span variants={japaneseTextItem}>し</motion.span>
                    <motion.span variants={japaneseTextItem}>帝</motion.span>
                    <motion.span variants={japaneseTextItem}>国</motion.span>
                    <motion.span variants={japaneseTextItem}>を</motion.span>
                    <motion.span variants={japaneseTextItem}>築</motion.span>
                    <motion.span variants={japaneseTextItem}>く</motion.span>
                </motion.p>
            </div>
        </div>
    );
} 