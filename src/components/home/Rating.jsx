
import AnimatedCounter from "../../ui/AnimatedCounter";
import RatingFigure from "./RatingFigure";
import { motion } from 'framer-motion';

function Rating() {
  return (

    <>
      <motion.div initial={{ opacity: 0 }} whileInView={{
        opacity: 1, transition: {
          duration: 0.5
        }
      }} viewport={{ once: true }} className="flex flex-col md:flex-row gap-5 text-white md:space-x-5 justify-center items-center  text-center">
        <div className=" py-10 px-12 z-10 bg-[#ffffff0d] rounded-2xl ">
          <h1 className="text-3xl md:text-[60px]">{<AnimatedCounter targetNumber='330000' duration='2000' />}K +</h1>
          <span className="text-[16px]">Loyal Customers</span>
        </div>
        <div className=" py-10 px-12 z-10 bg-[#ffffff0d] rounded-2xl ">
          <h1 className="text-3xl md:text-[60px]">{<AnimatedCounter targetNumber='1002' duration='2000' />} +</h1>
          <span className="text-[16px]">Verified Products</span>
        </div>
        <div className=" py-10 px-12 z-10 bg-[#ffffff0d] rounded-2xl ">
          <h1 className="text-3xl md:text-[60px]">{<AnimatedCounter targetNumber='754' duration='2000' />} +</h1>
          <span className="text-[16px]">5 Starts Review</span>
        </div>
      </motion.div>

      <div className="text-white mt-[100px] relative ">
        <section className="grid gird-cols-1 md:grid-cols-2 mt-[120px] container mx-auto">
          <h1 className="text-center text-[30px] text-[#3452ff] md:col-span-2 z-20 mb-[150px]">
            Top 5 Start Rating
          </h1>
          <motion.div initial={{ translateX: "-300px" }} whileInView={{
            translateX: '0', transition: {
              duration: 1,

            }

          }} viewport={{ once: true }} className="z-10">
            <RatingFigure />
            <RatingFigure />

          </motion.div>
          <motion.div initial={{ translateX: "300px" }} whileInView={{
            translateX: '0', transition: {
              duration: 1
            }
          }} viewport={{ once: true }} className="z-10">
            <RatingFigure />
            <RatingFigure />

          </motion.div>

        </section>
      </div>

    </>
  );
}

export default Rating;
