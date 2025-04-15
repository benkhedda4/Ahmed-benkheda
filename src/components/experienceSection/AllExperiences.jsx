import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Foorweb",
    date: "2022 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Front-End and Back-End Developer",
    company: "Foorcall",
    date: "2024 - Present",
    responsibilities: [
      "Built reusable components with React.",
      "Developed and maintained large-scale apps using Node.js and Express.",
      "Suggested UX improvements based on user feedback.",
    ],
  },
  {
    job: "fullstack Web Development Trainee",
    company: "Code 213",
    date: "2024 - 2025",
    responsibilities: [
      "Learning JavaScript, React, and TailwindCSS... .",
      "Working with structured course materials and real-world projects.",
      "Gaining hands-on experience in modern web development.",
      ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
