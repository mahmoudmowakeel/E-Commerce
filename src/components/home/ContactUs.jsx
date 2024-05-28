import { BiSupport } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { PiChatsCircleBold } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaRocketchat } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { motion } from 'framer-motion'
function ContactUs() {
  return (
    <div className="text-center mt-[100px] md:mt-[200px] our-products text-white md:rounded-2xl md:mx-10 ">
      <div className="mt-[70px] md:mt-[160px] z-20 relative">
        <motion.section initial={{ translateY: "-150px" }} whileInView={{ translateY: 0, transition: { duration: 1 } }} viewport={{ once: true }} className="grid grid-cols-2 container mx-auto z-50">
          <h1 className="text-3xl md:text-[47px] col-span-2 z-10 mb-10">
            Get In Touch With Us
          </h1>
          <div className="md:p-20 flex flex-col gap-5 z-10">
            <BiSupport className="text-7xl md:text-[110px] mx-auto" />
            <h2 className="text-md md:text-[30px]">Support Center</h2>
            <button className="text-xs md:text-[16px] text-[#3452ff] contact-read">
              Read More <FaLongArrowAltRight className="inline" />
            </button>
          </div>
          <div className="md:p-20 flex flex-col gap-5 z-10">
            <PiChatsCircleBold className="text-7xl md:text-[110px] mx-auto" />
            <h2 className="text-md md:text-[30px]">Contact Us</h2>
            <button className="text-xs md:text-[16px] text-[#3452ff] contact-read">
              Read More <FaLongArrowAltRight className="inline" />
            </button>
          </div>
        </motion.section>
        <section className="uppercase grid grid-cols-3 text-xs md:text-[20px] mt-10 border-t-2 border-[#777777]">
          <div className="flex justify-center items-center md:p-10 p-5 border-r-2 border-[#777777] z-10">
            <RiCustomerService2Line className="mr-1 md:mr-5 text-4xl  hover:text-5xl transition-all duration-400" />
            Support Form
          </div>
          <div className="flex justify-center items-center md:p-10 p-5 border-r-2 border-[#777777] z-10">
            <FaRocketchat className="mr-1 md:mr-5 text-4xl hover:text-5xl transition-all duration-400" />
            Live Chat
          </div>
          <div className="flex justify-center items-center md:p-10 p-5 z-10">
            <HiOutlineMailOpen className="mr-1 md:mr-5 text-4xl hover:text-5xl transition-all duration-400" />{" "}
            Email Us
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
