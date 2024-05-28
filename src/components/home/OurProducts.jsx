import { motion } from "framer-motion";
import AnimatedTitleWhite from "../../ui/AnimatedTitleWhite";
import ProductFigure from "./ProductFigure";
import Rating from "./Rating";

function OurProducts() {
  return (
    <>
      <div className="mt-[70px] mx-auto container">
        <img src="imgs/bg-3.jpg" className="w-full md:rounded-2xl h-[150px] md:h-[300px]" alt="" />
      </div>


      <motion.div initial={{ opacity: 0 }} whileInView={{
        opacity: 1, transition: {
          duration: 1,


        }
      }} viewport={{ once: true }} className="our-products mt-[80px]">
        <div className="relative z-10 mb-10">
          <AnimatedTitleWhite title="view our products" />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 mx-6 justify-center items-center">
          <motion.div initial={{ translateX: '-300px' }} whileInView={{ translateX: 0, transition: { duration: 1 } }} viewport={{ once: true }} className="z-10">
            <ProductFigure
              imgUl="p1.jpeg"
              category="Mobiles"
              title="Iphone 13 Pro Max"
              info="
Incredible battery life. 6.7 gorgeous HDR screen with 120 and very high 1,000 nits peak brightness. Industry fastest processor and GPU performance. Fast camera that consistently captures great photos."
              price="980 $"
            />
            <ProductFigure
              imgUl="p3.jpg"
              category="Laptops"
              title="Apple MacBook Pro 14-Inch (2023, M3 Pro)"
              info="
          Apple's 2023 14-inch MacBook Pro strikes a winning balance between premium design and M3 Pro-powered performance, for a compact mobile workstation that trounces similarly priced Windows machines."
              price="2200 $"
            />
          </motion.div>
          <motion.div initial={{ translateX: '300px' }} whileInView={{ translateX: 0, transition: { duration: 1 } }} viewport={{ once: true }} className="z-10">
            <ProductFigure
              imgUl="p2.jpg"
              category="Mobiles"
              title="Iphone 15 Pro Max"
              info="
          Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can track your next ride, see who’s calling, check your flight status, and so much more."
              price="1200 $"
            />
            <ProductFigure
              imgUl="p4.jpg"
              category="Laptops"
              title="Asus ROG Zephyrus Duo 16 (2023)"
              info="
          Equal parts expensive and impressively designed, the revamped dual-display Asus ROG Zephyrus Duo 16 delivers top-end frame rates and processing power to big-budget gaming-laptop shoppers."
              price="3940 $"
            />
          </motion.div>
        </div>
        <div className="my-[100px] relative mx-auto">
          <Rating />
        </div>
      </motion.div>
    </>
  );
}

export default OurProducts;
