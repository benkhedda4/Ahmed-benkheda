import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I'm Ahmed, a passionate Fullstack Web Developer,
       skilled in both frontend and backend technologies. 
       I build responsive, user-friendly interfaces using modern tools like React,
        and develop powerful, scalable backend systems with Node.js and databases like MongoDB and SQL. 
        I enjoy turning ideas into functional web applications, 
        focusing on clean code, performance, and user experience. Always learning and evolving,
         I’m driven by a deep interest in problem-solving and building meaningful digital solutions 
         that make an impact.
      </p>

      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
