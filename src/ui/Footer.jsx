import { MdMarkEmailRead } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-[200px] overflow-hidden">
      <div className="flex flex-col md:grid md:grid-cols-3 w-full gap-10 container mx-auto">
        <section className="mx-auto text-center md:text-left ml-auto">
          <h1 className="text-[28px] mb-7">Be Aware Of All Our News</h1>
          <p className="text-[19.5px] mb-7">Subscribe To The Newsletter</p>
          <div className="border-b-2 border-black w-full  md:w-fit">
            <input
              type="email"
              placeholder="Enter Your Email..."
              className="py-4   px-7 border-none focus:outline-none "
            />
            <MdMarkEmailRead className="inline text-4xl cursor-pointer text-[#3452ff]" />
          </div>
          <div className="flex justify-between md:justify-normal mx-5  space-x-5 mt-10 text-3xl">
            <FaFacebook />
            <AiFillTwitterCircle />
            <IoLogoInstagram />
            <FaLinkedin />
          </div>
        </section>
        <section className="mx-auto md:ml-auto">
          <h1 className="text-3xl mb-10">Useful Links</h1>
          <ul className="flex flex-col gap-7">
            <li className="hover:text-[#3452ff]">
              <a href="#">
                {" "}
                <FaLongArrowAltRight className="inline mr-3" /> Mobiles
              </a>
            </li>
            <li className="hover:text-[#3452ff]">
              <a href="#">
                {" "}
                <FaLongArrowAltRight className="inline mr-3" /> Laptops
              </a>
            </li>
            <li className="hover:text-[#3452ff]">
              <a href="#">
                <FaLongArrowAltRight className="inline mr-3" />
                Electronics
              </a>
            </li>
            <li className="hover:text-[#3452ff]">
              <a href="#">
                {" "}
                <FaLongArrowAltRight className="inline mr-3" /> Our Partners
              </a>
            </li>
          </ul>
        </section>
        <section className="mx-auto md:ml-auto ">
          <h1 className="text-3xl mb-10">Our Company</h1>
          <ul className="flex flex-col gap-7">
            <li className="hover:text-[#3452ff]">
              <a href="#">
                {" "}
                <FaLongArrowAltRight className="inline mr-3" /> Contact
              </a>{" "}
              Us
            </li>
            <li className="hover:text-[#3452ff]">
              <a href="#">
                {" "}
                <FaLongArrowAltRight className="inline mr-3" /> Hire Us
              </a>
            </li>
            <li className="hover:text-[#3452ff]">
              <a href="#">
                {" "}
                <FaLongArrowAltRight className="inline mr-3" /> Privacy &
                Policies{" "}
              </a>
            </li>
            <li className="hover:text-[#3452ff]">
              <a href="#">
                {" "}
                <FaLongArrowAltRight className="inline mr-3" /> Terms &
                Conditions
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="border-t-2 border-[#777777] text-center mt-20">
        <p className="p-5">
          © Copyright 2024 | All Rights Reserved | Powered by
          <span className="text-[#3452ff]"> Mahmoud El-Wakeel</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
