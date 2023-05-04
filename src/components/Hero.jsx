import React from "react";
import { styles } from "../style";
import { devLogo } from "../assets";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 sm:top-[50px] top-[100px] max-w-7xl mx-auto flex  sm:flex-row flex-col items-start gap-5`}
      >
        <div className="flex justify-center items-center gap-6 h-full">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Amrit</span>
            </h1>
            <p
              className={`${styles.heroSubText} mt-2 text-white-100 sm:w-[100%] w-full`}
            >
              Transforming ideas into stunning web experiences. I am a front-end
              developer who specializes in crafting interactive user interfaces
              and web applications.
            </p>
          </div>
        </div>
        <div className=" sm:h-full h-[70%] flex sm:items-center items-start justify-center sm:w-full w-[100%]">
          <img src={devLogo} alt="devLogo" className="sm: h-[70%] object-contain" />
        </div>
      </div>
      <div className="absolute  xs:bottom-[6px] bottom-[10px] w-full flex justify-center items-center z-10 ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary'
            />

            
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
