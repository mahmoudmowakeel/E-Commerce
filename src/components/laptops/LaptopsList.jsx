import ProductItem from "../../ui/ProductItem";

import { MdDoubleArrow } from "react-icons/md";
import { useLaptops } from "../../contexts/LaptopsContext";
import { motion } from 'framer-motion'

function LaptopsList() {
    const { laptops, visiableLapCount, handleShowMoreLapProducts, handleShowLessLapProducts } = useLaptops();
    return (
        <div className="grid grid-cols-1 md:grid-cols-10">
            <motion.div initial={{ opacity: 0, translateX: "-300px" }} whileInView={{
                opacity: 1, translateX: 0, transition: {
                    duration: 1.5
                }
            }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 md:col-span-8 container mx-auto">
                {laptops?.slice(0, visiableLapCount)?.map(laptop => <ProductItem title={laptop.title} info={laptop.Info} price={laptop.Price} imgUl={laptop.Url} quantity={laptop.quantity} key={laptop.title} />)}

                {visiableLapCount < laptops?.length ? <button onClick={handleShowMoreLapProducts} className="font-thin text-center mt-20 col-span-2 md:col-span-3 mx-auto text-2xl text-white bg-black/60 border border-white w-fit px-8 py-2  hover:bg-[#3452ff] transition-all duration-500 rounded-xl ">See More... <MdDoubleArrow className="inline" /></button> :
                    <button onClick={handleShowLessLapProducts} className="font-thin text-center mt-20 col-span-2 md:col-span-3 mx-auto text-2xl text-white bg-black/60 border border-white w-fit px-8 py-2  hover:bg-[#3452ff] transition-all duration-500 rounded-xl ">show Less... <MdDoubleArrow className="inline" /></button>}

            </motion.div>

            <div className="md:grid h-full mr-5 grid-rows-2 mt-[50px] md:col-span-2 hidden ">
                <img src="imgs/banner-3.png" alt="" className="h-[500px] rounded-xl " />
                <img src="imgs/banner-4.jpg" alt="" className="h-[500px] rounded-xl" />
            </div>


        </div>
    );
}

export default LaptopsList;
