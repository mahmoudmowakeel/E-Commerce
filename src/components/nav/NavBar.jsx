import { useMain } from "../../contexts/MainContext";
import Logo from "./Logo";
import NavFeatures from "./NavFeatures";
import NavLinks from "./NavLinks";
import { LuMenu } from "react-icons/lu";

function NavBar() {
  const { handleNav } = useMain()
  return (
    <div className="flex justify-between w-full z-10">
      <div className="mr-auto px-4  my-auto  md:hidden">
        <button className="text-5xl " onClick={handleNav}>
          <LuMenu />
        </button>
      </div>


      <Logo />

      <NavLinks />
      <NavFeatures />
    </div>
  );
}

export default NavBar;
