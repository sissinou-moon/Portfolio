"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, motion, useTransform, useScroll } from "framer-motion";
import { Code2, Atom, TabletSmartphone } from "lucide-react";
import Image from "next/image";
import Me from "@/assets/Me.png"
import Flutter from "@/assets/Flutter.png"
import Next from "@/assets/NextJs.svg"

function Counter({ to, delay = 0, inView, duration = 1.5 }: { to: number; delay?: number; inView: boolean; duration?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
  
    useEffect(() => {
        if (inView && ref.current) {
          const from = Math.floor(Math.random() * 100);
          ref.current.textContent = from.toString();
          
          const controls = animate(from, to, {
            duration: duration,
            delay: delay,
            onUpdate(value) {
              if (ref.current) {
                  ref.current.textContent = value.toFixed(0);
              }
            }
          });
          return () => controls.stop();
        }
    }, [inView, to, delay, duration]);
  
    return <span ref={ref}>1</span>;
  }

export default function Skills() {
    const appImageRef = useRef<HTMLImageElement>(null);
    const sectionRef = useRef(null);
  
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });
    
    const {scrollYProgress: ImageProgress} = useScroll({
      target: appImageRef,
      offset: ['start end', 'end start'],
    });

  
    const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);


    const inView = useInView(sectionRef, { once: true, amount: 0.1 });

    const bannerFadeDuration = 0.1;
    const counterAnimDuration = 0.6;
    
    const counter1Delay = bannerFadeDuration;
    const counter2Delay = counter1Delay + counterAnimDuration;
    const counter3Delay = counter2Delay + counterAnimDuration;
    const ceoDelay = counter3Delay + counterAnimDuration;


    return (
        <div id="skills" ref={sectionRef} className="relative overflow-hidden bg-white">
            <motion.div 
                className="flex items-center justify-between bg-[#01B4F2] px-4 md:px-10 pr-10 md:pr-30 w-full"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: bannerFadeDuration }}
            >
                <motion.div 
                    className="flex items-center max-w-20 gap-2"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: counter1Delay }}
                >
                    <p className="text-[27px] md:text-[60px] font-bold text-white">
                        +<Counter to={9} delay={counter1Delay} inView={inView} duration={counterAnimDuration} />
                    </p>
                    <span className="text-[9px] md:text-md text-white font-extralight md:text-sm">Finished Projects</span>
                </motion.div>
                <motion.div 
                    className="flex items-center max-w-20 gap-2"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: counter2Delay }}
                >
                    <p className="text-[27px] md:text-[60px] font-bold text-white">
                        <Counter to={3} delay={counter2Delay} inView={inView} duration={counterAnimDuration} />
                    </p>
                    <span className="text-[9px] md:text-md text-white font-extralight md:text-sm">Startup projects</span>
                </motion.div>
                <motion.div 
                    className="flex items-center max-w-20 gap-2"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: counter3Delay }}
                >
                    <p className="text-[27px] md:text-[60px] font-bold text-white">
                        <Counter to={4} delay={counter3Delay} inView={inView} duration={counterAnimDuration} />
                    </p>
                    <span className="text-[9px] md:text-md text-white font-extralight md:text-sm">Satisfiant Clients</span>
                </motion.div>
                <motion.div 
                    className="flex items-center max-w-40 gap-2"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: ceoDelay }}
                >
                    <p className="text-[27px] md:text-[60px] font-bold text-white">
                        CEO
                    </p>
                    <span className="hidden text-xs md:text-md text-white font-extralight md:block md:text-sm">Freelancers Platform</span>
                </motion.div>
            </motion.div>

            <motion.div
                className="relative inline-flex border border-[#01B4F2] my-5 mx-5  md:mx-10 lg:mx-10"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: ceoDelay + 0.2 }}
            >
                <p className="font-semibold text-xl md:text-3xl text-black mx-4 my-1">My Expertise</p>
                <div className="absolute -top-0.5 -left-0.5 bg-[#01B4F2] h-1.5 w-1.5"></div>
                <div className="absolute -top-0.5 -right-0.5 bg-[#01B4F2] h-1.5 w-1.5"></div>
                <div className="absolute -bottom-0.5 -left-0.5 bg-[#01B4F2] h-1.5 w-1.5"></div>
                <div className="absolute -bottom-0.5 -right-0.5 bg-[#01B4F2] h-1.5 w-1.5"></div>
            </motion.div>

            <div className="flex flex-col md:flex-row mx-5 items-center justify-between mb-10 gap-3 md:mx-10">
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.8 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.7, delay: ceoDelay + 0.9 }}
                    className="bg-[#F8F8F8] px-6 py-6 rounded-2xl flex flex-col items-start transition-transform duration-300 ease-in-out hover:scale-102 cursor-pointer hover:bg-[#F5F5F5]"
                >
                    <div className="px-2 py-2 bg-[#01B4F2] rounded-full flex items-center justify-center mb-2">
                        <Code2 className="text-[#F8F8F8]" size={18} />
                    </div>
                    <p className="text-black font-semibold text-xl md:text-[18px] md:pb-1">Full-Stack Developer</p>
                    <p className="text-black font-light text-sm max-w-100 md:text-[12px]">Designing and building robust web and mobile applications using NextJS. Experienced in both frontend and backend.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.8 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.7, delay: ceoDelay + 1.1 }}
                    className="bg-[#01B4F2] px-6 py-6 rounded-2xl flex flex-col items-start transition-transform duration-300 ease-in-out hover:scale-102 cursor-pointer hover:bg-[#12B8F1]"
                >
                    <div className="px-2 py-2 bg-[#F8F8F8] rounded-full flex items-center justify-center mb-2">
                        <Atom className="text-[#01B4F2]" size={18} />
                    </div>
                    <p className="text-white font-semibold text-xl md:text-[18px] md:pb-1">AI Trainer</p>
                    <p className="text-white font-light text-sm max-w-100 md:text-[12px]">Developing and training artificial intelligence models for real-world applications. Skilled in deep learning and data mining</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.8 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.7, delay: ceoDelay + 1.3 }}
                    className="bg-[#F8F8F8] px-6 py-6 rounded-2xl flex flex-col items-start transition-transform duration-300 ease-in-out hover:scale-102 cursor-pointer hover:bg-[#F5F5F5]"
                >
                    <div className="px-2 py-2 bg-[#01B4F2] rounded-full flex items-center justify-center mb-2">
                        <TabletSmartphone className="text-[#F8F8F8]" size={18} />
                    </div>
                    <p className="text-black font-semibold text-xl md:text-[18px] md:pb-1">Mobile App Developer</p>
                    <p className="text-black font-light text-sm max-w-100 md:text-[12px]">Specialized in creating high-performance, user-friendly mobile applications for Android using Flutter.</p>
                </motion.div>
            </div>
            {/*
            <motion.img src={Fishes.src} alt='Fishes' width={120} className='absolute top-70 -left-12' style={{translateY: halfTranslateY}}/>
            <motion.img src={Cloud.src} alt="Clouds" width={140} className="absolute top-15 right-2" style={{translateY: halfTranslateY}}/>
            */}

            <div className="hidden md:flex flex items-center justify-between px-21 mt-20 md:px-10">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: ceoDelay + 2.0 }}
                    className="flex flex-col gap-15"
                >
                    <div>
                        <div className="flex gap-1 max-w-30 items-center text-black">
                            <p className="font-bold text-[40px]">2</p>
                            <p className="font-medium text-md leading-tight">years experience</p>
                        </div>
                        <p className="text-black text-[12px] font-light max-w-70">Over two years of hands-on experience building and launching production-ready mobile apps using Flutter, ensuring quality and performance across platforms.</p>
                    </div>
                    <div>
                        <p className="font-medium text-md leading-tight text-black">I am proficient in</p>
                        <div className="flex gap-2">
                            <Image src={Flutter} alt="Flutter" width={25}/>
                            {/*<Image src={ReactNative} alt="Flutter" width={25} className="rounded-md"/>*/}
                            <Image src={Next} alt="Flutter" width={25}/>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium text-md leading-tight text-black">SQL</p>
                        <p className="text-black text-[12px] font-light max-w-70">Expert in designing, optimizing, and managing SQL databases (MySQL, PostgreSQL) for scalable, secure, and efficient data storage and retrieval in full-stack applications.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: ceoDelay + 2.2 }}
                    className="md:mx-5"
                >
                    <Image src={Me} alt="Me" width={350}/>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: ceoDelay + 2.4 }}
                    className="flex flex-col gap-12"
                >
                    <div>
                        <p className="font-medium text-md leading-tight text-black">Full-Stack Development</p>
                        <p className="text-black text-[12px] font-light max-w-70">Building dynamic, SEO-optimized web applications with Next.js, integrating APIs, and ensuring robust server-side rendering for optimal performance and discoverability.</p>
                    </div>
                    <div>
                        <p className="font-medium text-md leading-tight text-black">Yolov8 / AI</p>
                        <p className="text-black text-[12px] font-light max-w-70">Hands-on experience training and deploying YOLOv8 models for real-time object detection, including dataset curation and pipeline automation for AI projects.</p>
                    </div>
                    <div>
                        <p className="font-medium text-md leading-tight text-black">TypeScript</p>
                        <p className="text-black text-[12px] font-light max-w-70">Developing maintainable, type-safe applications using TypeScript in both frontend (React/Next.js) and backend environments for improved reliability and scalability.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}