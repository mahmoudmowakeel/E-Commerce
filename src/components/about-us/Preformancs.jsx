import { motion } from 'framer-motion'
function Preformance() {
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 mt-[120px] text-center mx-5 md:text-left md:container md:mx-auto gap-7">
            <motion.div initial={{ translateX: "-300px", opacity: 0, overflow: 'hidden' }} whileInView={{
                translateX: 0, opacity: 1, transition: {
                    duration: 1,
                    delay: 1
                }
            }} viewport={{ once: true }} className="flex flex-col justify-center gap-6">
                <h3>OUR PERFORMANCE</h3>
                <h1 className="text-3xl md:text-5xl font-bold">We Believe In <br /> Quality Products</h1>
                <p className="text-[#777777] text-sm md:text-lg leading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu finibus nunc ullamcorper et.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, overflow: 'hidden' }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }} viewport={{ once: true }}>
                <img src="imgs/pre-1.jpg" alt="" className="rounded-2xl" />
            </motion.div>
        </div>
    )
}

export default Preformance;