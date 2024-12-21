import menuImg from "../assets/images/bars.png";
import logoImg from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="flex justify-start h-[8rem] max-md:h-[10.4rem] px-[2rem] items-center gap-[7.25rem] bg-[#FFF7E2]">
      {/* menu bar */}
      <div className="md:hidden">
        <img src={menuImg} alt="menu bar" />
      </div>

      {/* Logo */}
      <div className="md:hidden">
        <img src={logoImg} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
