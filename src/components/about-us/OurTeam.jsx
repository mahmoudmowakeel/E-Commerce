import { LuFacebook } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlinePinterest } from "react-icons/ai";
import { motion } from 'framer-motion'

function OurTeam() {
    return (
        <div className="bg-[#F4F4F4] py-10 mt-[100px]">
            <h1 className="col-span-4 container mx-auto text-2xl mb-5 text-center md:text-left">Our Team</h1>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-5 md:container md:mx-auto border-t border-[#c4c3c3]">

                <motion.section initial={{ translateX: "-300px", overflow: 'hidden' }} whileInView={{
                    translateX: 0, overflow: 'hidden', transition: {
                        duration: 1
                    }
                }} viewport={{ once: true }} className="md:grid md:grid-cols-2 flex flex-col">
                    <div className="text-center flex flex-col gap-3 p-5 ">
                        <img src="imgs/t-1.jpg" alt="" className="rounded-2xl md:w-full w-[300px] mx-auto" />
                        <h3 className="text-xl">John Hossain</h3>
                        <span className="text-[#777777] text-sm">CEO & Founder</span>
                        <section className="flex justify-center items-center gap-5 text-xl">
                            <LuFacebook />
                            <FiTwitter />
                            <FaInstagram />
                            <AiOutlinePinterest />
                        </section>
                    </div>

                    <div className="text-center flex flex-col gap-3 p-5">
                        <img src="imgs/t-2.jpg" alt="" className="rounded-2xl md:w-full w-[300px] mx-auto" />
                        <h3 className="text-xl">Jane Cooper</h3>
                        <span className="text-[#777777] text-sm">Market Development</span>
                        <section className="flex justify-center items-center gap-5 text-xl">
                            <LuFacebook />
                            <FiTwitter />
                            <FaInstagram />
                            <AiOutlinePinterest />
                        </section>
                    </div>
                </motion.section>

                <motion.section initial={{ translateX: "300px", overflow: 'hidden' }} whileInView={{
                    translateX: 0, overflow: 'hidden', transition: {
                        duration: 1
                    }
                }} viewport={{ once: true }} className="md:grid md:grid-cols-2 flex flex-col">
                    <div className="text-center flex flex-col gap-3 p-5">
                        <img src="imgs/t-4.jpg" alt="" className="rounded-2xl md:w-full w-[300px] mx-auto" />
                        <h3 className="text-xl">Isabella</h3>
                        <span className="text-[#777777] text-sm">Marketing</span>
                        <section className="flex justify-center items-center gap-5 text-xl">
                            <LuFacebook />
                            <FiTwitter />
                            <FaInstagram />
                            <AiOutlinePinterest />
                        </section>
                    </div>

                    <div className="text-center flex flex-col gap-3 p-5">
                        <img src="imgs/t-3.jpg" alt="" className="rounded-2xl md:w-full w-[300px] mx-auto" />
                        <h3 className="text-xl">Kristin Watson</h3>
                        <span className="text-[#777777] text-sm">Head Engineer</span>
                        <section className="flex justify-center items-center gap-5 text-xl">
                            <LuFacebook />
                            <FiTwitter />
                            <FaInstagram />
                            <AiOutlinePinterest />
                        </section>
                    </div>
                </motion.section>

            </div>

        </div>
    )
}


export default OurTeam