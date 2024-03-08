import LOGO from "@/assets/logo-white.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex flex-row gap-5 items-center">
      <a href="/">
        <Image src={LOGO} alt="logo" />
      </a>
      <a href="/news">Aktualności</a>
      <a href="/players">Zawodniczki</a>
      <a href="#about">O klubie</a>
    </nav>
  );
};

export default Navbar;
