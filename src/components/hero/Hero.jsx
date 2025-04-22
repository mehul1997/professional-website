import "./hero.scss";
import {motion, stagger} from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    }
  }
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper" >
        <motion.div className="textContainer"  variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>MEHUL PRADHAN</motion.h2>
          <motion.h1 variants={textVariants}>Software Developer II</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <button>See the latest works</button>
            <button>Contact Me</button>
          </motion.div>
          <motion.img src="/scroll.png" alt="" className="scroll" variants={textVariants} animate="scrollButton" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Software Developer II
      </motion.div>
      <div className="imageContainer">
        <img src="/hero3.png" alt="" />
      </div>
    </div>
  )
}
export default Hero;