import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macbook from "@/assets/imeagas/macbook-exposed 1.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  const intro = {
    hidden: { opacity: 0 },
    visibly: {
      opacity: 1,
      transition: {
        // duration: 0.5,
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };
  const introChildren = {
    hidden: { opacity: 0, y: -500 },
    visibly: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        bounce: 0.5,
      },
    },
  };

  const leptop = {
    initial: { y: 0, rotate: 0, scale: 7 },
    animate: {
      y: 20,
      rotate: -2,
      scale: 1,
      transition: {
        duration: 0.5,
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <Container className="pt-16 h-screen   grid grid-cols-1 md:grid-cols-2 justify-center items-center   ">
      <motion.div
        className=""
        variants={intro}
        initial="hidden"
        animate="visibly"
      >
        <motion.h1
          variants={introChildren}
          className="text-5xl lg:text-8xl font-bold "
        >
          <span className="text-gray text-nowrap">Don't worry.</span>
          <br />
          <span>We'll fix it.</span>
        </motion.h1>
        <motion.p
          className="text-gray text-lg my-[10px] max-w-[50ch] "
          variants={introChildren}
        >
          Welcome to <span className="text-dark-gray">iRepair</span>, your
          one-stop place for all kinds of
          <span className="text-dark-gray"> Macbook repairs</span> and
          diagnostics.
        </motion.p>
        <motion.div variants={introChildren}>
          <Button>Book a service</Button>
        </motion.div>
      </motion.div>
      <motion.div
        variants={leptop}
        initial="initial"
        animate="animate"
        className=" mt-2 md:mt-0 lg:w-full  mx-auto  "
      >
        <img
          className=" object-contain h-[400px] mx-auto"
          src={macbook}
          alt=""
        />
      </motion.div>
    </Container>
  );
};

export default HeroSection;
