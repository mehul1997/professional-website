import {motion} from "framer-motion"
import {useState} from "react";

const Test = () => {
  // const [open, setOpen] = useState(true);

  const variants = {
    hidden: { opacity: 0, x:1000, transition: {type:"spring", stiffness: 100, damping: 100}},
    visible: { opacity: 1, x:100, transition: {staggerChildren: 1}},
    
  }

  // return (
  //   <div className="course">
  //     <motion.div className="box"
  //     variants={variants}
  //     transition={{duration: 2}}
  //     animate={open ? "visible" : "hidden"}></motion.div>
  //     <button onClick={() => setOpen(prev => !prev)}>Click</button>
  //   </div>
  // );

  const items = ["item1", "item2", "item3", "item4", "item5"];
  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item) => (
          <motion.li variants={variants} key={item}>{item}</motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default Test;