
import './Experiences.scss';
import {motion} from "framer-motion";

const titleVariants = {
  initial: {
    opacity: 0,
    y: -50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
}

const Experiences = () => {
  return (
    <div className="experience-header" >
      <h1>Work Experiences</h1>
      <motion.div className="experience-companies" 
      variants={titleVariants} 
      initial="initial" 
      whileInView="animate"
      viewport={{ once: false, amount: 0.2 }}>
        <div className="experience-company">
          <img src="/backlight.png" alt="Company 1" />
          <div className="experience-company-info">
            <h2>Backlight</h2>
            <p>Position: Software Developer II</p>
            <p>Duration: September 2022 - Present</p>
            <p>Description: Worked on various projects...</p>
          </div>
        </div>
        <div className="experience-company">
          <img src="/zype.png" alt="Company 1" />
          <div className="experience-company-info">
            <h2>Zype | MAZ</h2>
            <p>Position: Developer</p>
            <p>Duration: Jan 2020 - September 2022</p>
            <p>Description: Worked on various projects...</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Experiences;