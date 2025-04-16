import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <img
        src="/images/HexaPic.png"
        alt="Ahmed Benkhedda"
        className="max-h-[575px] w-auto"
      />

      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
        <PiHexagonThin className="h-[300px] sm:h-[120%] md:h-[90%] md:min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
