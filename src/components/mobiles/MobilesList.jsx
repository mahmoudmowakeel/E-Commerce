import ProductItem from "../../ui/ProductItem";
import { useMobiles } from "../../contexts/MobilesContext";
import { MdDoubleArrow } from "react-icons/md";
import { motion } from 'framer-motion'

function MobilesList() {
  const { mobiles, visiableCount, handleShowMoreProducts, handleShowLessProducts } = useMobiles();

  return (
    <div className="grid grid-cols-1 md:grid-cols-10">
      <motion.div initial={{ opacity: 0, translateX: "-300px" }} whileInView={{
        opacity: 1, translateX: 0, transition: {
          duration: 1.5
        }
      }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 md:col-span-8 container mx-auto">
        {mobiles?.slice(0, visiableCount)?.map(mobile => <ProductItem title={mobile.title} info={mobile.Info} price={mobile.Price} imgUl={mobile.Url} quantity={mobile.quantity} key={mobile.title} />)}

        {visiableCount < mobiles?.length ? <button onClick={handleShowMoreProducts} className="font-thin text-center mt-20 col-span-2 md:col-span-3 mx-auto text-2xl text-white bg-black/60 border border-white w-fit px-8 py-2  hover:bg-[#3452ff] transition-all duration-500 rounded-xl ">See More... <MdDoubleArrow className="inline" /></button> :
          <button onClick={handleShowLessProducts} className="font-thin text-center mt-20 col-span-2 md:col-span-3 mx-auto text-2xl text-white bg-black/60 border border-white w-fit px-8 py-2  hover:bg-[#3452ff] transition-all duration-500 rounded-xl ">show Less... <MdDoubleArrow className="inline" /></button>}

      </motion.div>

      <div className="md:grid h-full mr-5 grid-rows-2 mt-[50px] md:col-span-2 hidden ">
        <img src="imgs/banner-1.jpg" alt="" className="h-[500px] rounded-xl " />
        <img src="imgs/banner-2.jpg" alt="" className="h-[500px] rounded-xl" />
      </div>


    </div>
  );
}

export default MobilesList;
