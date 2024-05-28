import { FaCartPlus } from "react-icons/fa6";
import { IoHeartSharp } from "react-icons/io5";
import { useMain } from "../contexts/MainContext";

function ProductItem({ imgUl, category, title, info, price, quantity }) {
  const { showProductInfo, addToCart } = useMain();
  let usedItem = {
    info,
    price,
    imgUl,
    title,
    quantity
  }

  return (
    <div className="flex flex-col gap-5 h-fit  md:justify-normal space-y-5 my-[30px] md:mb-0 md:mt-[100px]  text-center   p-5 z-10 rounded-2xl hover:-translate-y-6 shadow-2xl mx-1 md:mx-4 bg-black/10 transition-all duration-500">
      <div className="relative ">
        <span ><IoHeartSharp className=" absolute inline text-3xl border border-black hover:text-red-600 right-3 top-2 bg-white rounded-full p-1 transition-all duration-500" /></span>
        <img
          src={`${imgUl}`}
          alt=""
          className=" mx-auto w-full h-[120px] md:h-[200px] rounded-md"
        />


      </div>
      <h2 className="text-black text-xs md:text-xl h-[20px] md:h-[50px] cursor-pointer hover:underline" onClick={() => showProductInfo(title)}> {title}  </h2>
      <p className="text-[#777777] h-[90px] md:h-[70px] text-[10px] md:text-xs">{info}</p>
      <span className="text-red-700 font-semibold text-xs  md:text-sm text-left">Price ~ {price}</span>
      <div className="flex mt-[-100px]">
        <button className="text-white bg-black/60 border text-[8px] md:text-sm border-white w-fit mx-auto md:px-4 md:py-2   hover:-translate-y-1 hover:bg-[#3452ff] transition-all duration-500 rounded-xl py-2 px-2 " onClick={() => addToCart(usedItem)}>
          Add To Cart <FaCartPlus className="inline ml-1" />
        </button>
        <button className="text-white bg-black/60 border text-[8px] md:text-sm border-white w-fit mx-auto md:px-4 md:py-2 hover:-translate-y-1 hover:bg-[#3452ff] transition-all duration-500 rounded-xl py-2 px-3  " onClick={() => showProductInfo(title)}>
          View Info <FaCartPlus className="inline ml-1" />
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
