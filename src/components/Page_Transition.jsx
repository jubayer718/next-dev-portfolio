'use client';
import { AnimatePresence,motion } from "framer-motion";

import { useParams, usePathname } from "next/navigation";

const Page_Transition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition:{delay:1, duration:0.4, ease:"easeInOut"}
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        ></motion.div>
        {children}
     </div>
    </AnimatePresence>
  );
};

export default Page_Transition;