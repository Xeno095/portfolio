import React from "react";
import Tilt from 'react-parallax-tilt';
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology,index) => (
      <motion.div variants={textVariant(0.2*index)} key={index}>
        <Tilt className='w-28 h-28 rounded-full flex justify-center items-center shadow-card border-neutral-600 border-2' key={technology.name}>
          <img src={technology.icon} alt="tech" className="h-20 w-20 object-contain"/>
        </Tilt>
          </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");