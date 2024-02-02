import { motion } from "framer-motion";
import useScroleGrowHook from "./../../Hooks/useScroleGrowHook";

const DataRecovery = () => {
  const { style, componentRef } = useScroleGrowHook();
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="col-span-6 lg:col-span-7 h-[415px] bg-red-500 rounded-2xl"
    ></motion.div>
  );
};

export default DataRecovery;
