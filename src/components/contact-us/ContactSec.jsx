import { motion } from 'framer-motion'

function ContactSec() {
    return (
        <div className="mt-[50px] md:mt-[150px]">
            <motion.div initial={{ translateX: "-300px" }} whileInView={{
                translateX: 0, transition: {
                    duration: 1,

                }
            }} viewport={{ once: true }} className="container md:mx-auto flex flex-col md:grid md:grid-cols-2">
                <div className="flex flex-col gap-7 mx-10 mb-10">
                    <h1 className="text-3xl tracking-wider font-semibold">Do you have some questions?</h1>
                    <span className="text-[#777777]">We are at your disposal 7 days a week!</span>
                    <p className="font-light">
                        29 SE 2nd Ave, <br />
                        Miami, Florida 33131, <br />
                        United States
                    </p>
                    <a href="" className="underline hover:font-bold">Support1234@welectronics.com</a>
                    <span className="font-bold text-xl tracking-wider hover:underline cursor-pointer">+08 9229 8228</span>
                </div>
                <div>
                    <form className="flex flex-col gap-10" action="">
                        <input className="bg-[#eeeeeefa] p-5 rounded-2xl" type="text" placeholder="Name *" />
                        <input className="bg-[#eeeeeefa] p-5 rounded-2xl" type="email" placeholder="Email *" />
                        <input className="bg-[#eeeeeefa] p-5 rounded-2xl" type="text" placeholder="Subject *" />
                        <textarea className="bg-[#eeeeeefa] block h-[200px] rounded-2xl p-5" placeholder="Message *" name="message" ></textarea>
                        <button type="submit" className="bg-black text-white text-lg mx-auto md:mx-0 w-fit px-7 py-3 rounded-lg">Send message </button>
                    </form>
                </div>

            </motion.div>
        </div>
    )
}


export default ContactSec