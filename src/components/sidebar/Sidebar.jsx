import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./links/Links";
import {motion} from "framer-motion";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring", 
        stiffness: 100, 
        damping: 40,
      }
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {type: "spring", stiffness: 100, damping: 20}
    }
  }

  return (
    <motion.div className="sidebar" animate={open? "open" : "closed"}> 
      <motion.div className="bg" variants={variants} >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar;