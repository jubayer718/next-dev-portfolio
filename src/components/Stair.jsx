import { animate, motion } from "framer-motion";

const Stair = () => {
  const stairAnimation = {
    initial: {
      top:"0%",
    },
    animate: {
      top:"100%",
    },
    exit:{
    top:["100%","0%"],
    },
  }

  //calculate the reverse index for staggered delay

  const reverseIndex = (index) => {
    const totalSteps = 6; //number of steps
    return totalSteps - index - 1;
  }
  return (
    <>
      {/* render & motion div, each animation defined by the stairAnimation object. The delay for each div is calculated sinamically based on it's reversed index,creating a staggered effect with decreasing delay for each subsequent step*/}
      {[...Array(6)].map((_, index) => {
       return(<motion.div
        key={index}
        variants={stairAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration:0.4,
          ease: "easeInOut",
          delay:reverseIndex(index)*0.1,
        }}
        className="h-full w-full bg-white relative"
      ></motion.div>) 
      })}
      
    </>
  );
};

export default Stair;