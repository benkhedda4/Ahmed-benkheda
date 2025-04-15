import { Link } from "react-scroll";

const NavbarLogo = () => {
  return (
    <div>
      <Link
        to="Hero"
        smooth={true}
        duration={500}
        offset={-250} // تعويض بسبب ارتفاع الـ Navbar إن وجد
      >
        <h1 className="text-white text-2xl sm:hidden md:block hover:text-blue-400 cursor-pointer transition">
          Ahmed Benkhedda
        </h1>
      </Link>

      <h1 className="text-white font-special font-extrabold text-4xl md:hidden sm:block">
        AQ
      </h1>
    </div>
  );
};

export default NavbarLogo;
