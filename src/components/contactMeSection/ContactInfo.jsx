import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo
        text="benkheddaa125@gmail.com"
        Image={HiOutlineMail}
        link="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCHrfTPQnVGRwdHBdDDQtrlqlzXRSwMsKHKfnxdBdNBzjMpzGjmcBPCQBpvzWjBTQckrNtkL"
      />
      <SingleInfo
        text="+213 696 33 05 64"
        Image={FiPhone}
        link="tel:+213696330564"
      />
      <SingleInfo
        text="Blida, algérie"
        Image={IoLocationOutline}
        link="https://www.google.com/maps/dir//%D8%A7%D9%84%D8%A8%D9%84%D9%8A%D8%AF%D8%A9%E2%80%8E%E2%80%AD/@36.4811776,2.9402754,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x128f0c66865a4cd1:0xccfcf9c073646dfe!2m2!1d2.8323153!2d36.4735715!3e0?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
      />
    </div>
  );
};

export default ContactInfo;

