import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/ahmed-benkhedda-323b2928b" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/benkhedda4" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/ah_med.dv/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
