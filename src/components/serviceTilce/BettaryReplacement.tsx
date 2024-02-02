import { motion } from "framer-motion";

import useScroleGrowHook from "./../../Hooks/useScroleGrowHook";

const BatteryReplacement = () => {
  const { style, componentRef } = useScroleGrowHook();
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="h-[415px] bg-red-500 col-span-12 rounded-2xl"
    ></motion.div>
  );
};

export default BatteryReplacement;
