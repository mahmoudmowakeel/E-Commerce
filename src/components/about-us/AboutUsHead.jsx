import { motion } from 'framer-motion'
function AboutUsHead() {
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }} className="bg-about-container h-[330px] md:h-[400px]  md:container md:mx-auto mx-7 rounded-2xl text-center">
            <motion.div initial={{ marginTop: "-500px" }}
                animate={{ marginTop: "0" }}
                transition={{ duration: 1 }} className="absolute z-10 text-white flex flex-col gap-2 justify-center md:space-y-7 items-center top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
                <h className="font-light text-sm md:text-xl">START FROM SINCE 1990</h>
                <p className="md:text-4xl text-lg font-bold tracking-wider">We Help Everyone</p>
                <p className="md:text-4xl text-xl font-bold tracking-wider">Enjoy Amazing Products</p>
                <section className="flex space-x-16">
                    <p className="font-bold text-5xl md:text-6xl">+ 6M <span className="block text-sm font-light">Happy Clients</span></p>
                    <p className="font-bold text-5xl md:text-6xl">+ 2M <span className="block text-sm font-light">Great Products</span></p>
                </section>
            </motion.div>
        </motion.div>
    )
}



export default AboutUsHead