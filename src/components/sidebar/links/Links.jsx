import { motion } from "framer-motion";

const variants = {
  open: {
    transition: { staggerChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemVariants = {
  open: { y: 0, opacity: 1 },
  closed: { y: 50, opacity: 0 }
};

const Links = () => {
  const items = [
    "Homepage",
    "Experiences",
    "Tech Stacks",
    "Github and Contributions",
    "Resume",
    "Recommendations"
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div variants={variants} className="links">
      {items.map(item => (
        <motion.div
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleScroll(item)}
          style={{ cursor: 'pointer', padding: '5px 0' }}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;