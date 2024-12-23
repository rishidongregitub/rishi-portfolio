"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1,
        transition: {
          duration: 0.4,
          delay: 2,
          ease: "easeIn"
        }
      }}>
        <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1,
          transition: {
            duration: 0.4,
            delay: 2.4,
            ease: "easeInOut"
          }
        }}

        className="w-[298px] h-[298px] xl:w-[498px] xl:h-[420px] mix-blend-lighten absolute">
          <Image 
          priority
          quality={100}
          fill
          alt="rishi-photo"
          className="object-contain"
          src="/assets/RISHIKESHPORT.png" />
        </motion.div>
        {/*circle*/}
        <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[420px]" viewBox="0 0 506 506" fill="transparent" xmlns="http://www.w3.org/2000/svg">

          <motion.circle cx="253" cy="253" r="250" stroke="#00ff99" strokeWidth="4"
          strokeLinecap="round" strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0"}} animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate:[120,360],
          }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
          }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;