import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { FiYoutube } from "react-icons/fi";
import { motion } from 'framer-motion';

function SiteInterface() {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-container md:mx-7  h-[350px] md:h-[500px] md:rounded-2xl text-center text-white/80 font-semibold">
      <div className=" bg-content flex  flex-col absolute space-y-5 w-[100%] justify-center items-center h-fit z-10">
        <motion.div initial={{ marginTop: "-500px" }}
          animate={{ marginTop: "0" }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-7  ">

          <span className="tracking-wide w-full uppercase text-sm">
            ------- here you can find all you Want -------
          </span>
          <h1 className="text-2xl mx-auto md:text-[4rem] tracking-[1px] md:flex md:flex-col md:gap-7  w-full">
            <span className="md:text-left block  "> The Most Powerful </span>
            <span className="pr-5">
              <img
                className="inline w-[30px]  md:w-[60px]"
                src="../../public/imgs/w-logo.png"

                alt=""
              />
            </span>
            Electronics Store
          </h1>
          <div className="w-full flex md:flex-row flex-col space-x-4">
            <p className="md:mt-[20px]">We have a great reputation on social media</p>
            <div className="flex gap-10 justify-center items-center mt-5">
              <span className="ml-5">
                <CiFacebook className="inline text-2xl" />
              </span>
              <span>
                <IoLogoInstagram className="inline text-2xl" />
              </span>
              <span>
                <FiYoutube className="inline text-2xl" />
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SiteInterface;
