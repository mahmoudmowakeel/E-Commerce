import { motion } from 'framer-motion'

function ProductsHeader({ title }) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{
            opacity: 1, transition: {
                duration: 1
            }
        }} className="bgm-container md:h-[300px] h-[150px]   md:mx-10 md:rounded-2xl">
            <motion.div initial={{ translateX: "-100px" }} whileInView={{
                translateX: 0, transition: {
                    duration: 1
                }
            }} viewport={{ once: true }} className="   absolute z-10 top-1/4 md:top-1/2 transform -translate-y-1/2 ">
                <h1 className="text-xl md:text-6xl ml-10 text-white">{title}</h1>
            </motion.div>
            <motion.div initial={{ translateX: "100px" }} animate={{
                translateX: 0, transition: {
                    duration: 1
                }
            }} className="absolute z-10 top-1/2 transform -translate-y-1/2 right-0 ">
                <h1 className="text-lg md:text-2xl mr-10 text-white">
                    <span className="text-[#777777]">Home</span> / {title}
                </h1>
            </motion.div>
        </motion.div>
    );
}

export default ProductsHeader;
