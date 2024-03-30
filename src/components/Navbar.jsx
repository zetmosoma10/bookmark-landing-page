import Button from "./Button";
import Logo from "../Assets/images/logo-bookmark.svg";
import { navLinkList } from "../constant";
import hamburgerIcon from "../Assets/images/icon-hamburger.svg";

const Navbar = () => {
  return (
    <header>
      <nav className="max-container flex items-center justify-between pt-6">
        <a href="#">
          <img src={Logo} alt="" />
        </a>
        <div className="flex items-center space-x-10 hidden md:flex">
          <ul className="flex items-center space-x-10">
            {navLinkList.map((link) => (
              <li key={link} className="hover:text-soft_Red">
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
          <Button
            type="link"
            className="leading-4 tracking-[1.5px]"
            variant="red"
          >
            Login
          </Button>
        </div>
        <div className="cursor-pointer md:hidden">
          <img src={hamburgerIcon} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
