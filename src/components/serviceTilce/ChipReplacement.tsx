import useScroleGrowHook from "./../../Hooks/useScroleGrowHook";
import { motion } from "framer-motion";

const ChipReplacement = () => {
  const { style, componentRef } = useScroleGrowHook();
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="col-span-6 lg:col-span-5 h-[415px] bg-red-500 rounded-2xl"
    ></motion.div>
  );
};

export default ChipReplacement;
