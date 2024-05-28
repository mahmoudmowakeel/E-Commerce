import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { RiVisaFill } from "react-icons/ri";
import { motion } from 'framer-motion'


function Features() {
    return (
        <div className="bg-[#F4F4F4] py-16 mt-[120px]">
            <motion.div initial={{ translateX: "-250px", overflow: 'hidden' }} whileInView={{
                translateX: 0, transition: {
                    duration: 1,

                }
            }} viewport={{ once: true }} className=" flex flex-col gap-10 md:gap-0 md:container md:mx-auto md:grid md:grid-cols-4">
                <div className="flex justify-center gap-3">
                    <section><TbTruckDelivery className="text-7xl text-[#3452ff]" /></section>
                    <section className="mt-3">
                        <h3 className="text-lg uppercase">free delivery</h3>
                        <span className="text-[#777777] text-sm">Free shipping on all order</span>
                    </section>
                </div>
                <div className="flex justify-center gap-3">
                    <section><AiOutlineDollar className="text-7xl text-[#3452ff]" /></section>
                    <section className="mt-3">
                        <h3 className="text-lg uppercase">returns</h3>
                        <span className="text-[#777777] text-xs">Back guarantee under 7 days</span>
                    </section>
                </div>
                <div className="flex justify-center gap-3">
                    <section><BiSupport className="text-7xl text-[#3452ff]" /></section>
                    <section className="mt-3">
                        <h3 className="text-lg uppercase">SUPPORT 24/7</h3>
                        <span className="text-[#777777] text-xs">Support online 24 hours a day</span>
                    </section>
                </div>
                <div className="flex justify-center gap-3">
                    <section><RiVisaFill className="text-7xl text-[#3452ff]" /></section>
                    <section className="mt-3">
                        <h3 className="text-lg uppercase">payments</h3>
                        <span className="text-[#777777] text-sm">100% payment security</span>
                    </section>
                </div>

            </motion.div>

        </div>
    )
}


export default Features;