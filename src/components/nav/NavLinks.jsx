import { NavLink } from "react-router-dom";
import { useMain } from "../../contexts/MainContext";

function NavLinks() {
  const { navBgRef, navRef, bgNavHandler, handleNav } = useMain()
  return (
    <div ref={navRef} id="nav-toggle" className="basis-[50%] xl:basis-[60%] pt-14 px-1 md:px-0 text-sm md:text-md   md:!block">
      <ul className="flex md:flex-row fixed md:relative left-0 top-0 bg-[#222] md:bg-white/70 z-50 md:z-0 text-white md:text-black  flex-col space-x-5 gap-6 py-4 md:py-0 px-1 w-[280px] md:w-fit h-screen md:h-fit md:space-x-0 md:gap-5 xl:space-x-7 text-nowrap md:text-xs xl:text-sm ">
        <span className="cursor-pointer ml-auto  py-1 px-2 rounded-full border border-white w-fit  md:hidden" onClick={handleNav}>X</span>
        <NavLink to={"/"} className="active-page lili border-b-2 pb-5  border-[#777777] md:border-transparent   md:pb-3">
          Home
        </NavLink>
        <NavLink to={"mobiles"} className="lili border-b-2 pb-5  border-[#777777] md:border-transparent  md:pb-3">
          Mobiles
        </NavLink>
        <NavLink to={"laptops"} className="lili border-b-2 pb-5  border-[#777777] md:border-transparent  md:pb-3">
          Laptops
        </NavLink>
        <NavLink to={"electronics"} className="lili border-b-2 pb-5  border-[#777777] md:border-transparent  md:pb-3">
          Electronics
        </NavLink>
        <NavLink to={"about-us"} className="lili border-b-2 pb-5  border-[#777777] md:border-transparent  md:pb-3">
          About Us
        </NavLink>
        <NavLink to={"contact-us"} className="lili border-b-2 pb-5  border-[#777777] md:border-transparent  md:pb-3">
          Contact Us
        </NavLink>
      </ul>
      <div ref={navBgRef} className="fixed w-full h-screen right-0 top-0 hidden bg-black/70 z-20" onClick={bgNavHandler}></div>
    </div>
  );
}

export default NavLinks;
