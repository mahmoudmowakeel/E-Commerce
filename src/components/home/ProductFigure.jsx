import { useMain } from "../../contexts/MainContext";

function ProductFigure({ imgUl, category, title, info, price }) {
  const { navigate } = useMain()
  return (
    <div className="flex flex-col w-[100%] max-h-[700px]  space-y-5 my-10 bg-[#ffffff0d] mr-5 p-5 md:p-10 z-10 rounded-2xl">
      <img
        src={`imgs/${imgUl}`}
        alt=""
        className="mx-auto w-[400px] h-[170px] md:w-[800px] md:h-[300px]"
      />
      <span className="text-[#3452ff] font-semibold">Category: {category}</span>
      <h2 className="text-white text-sm md:text-[17px]"> {title} </h2>
      <p className="text-[#777777] text-xs md:text-lg">{info}</p>
      <span className="text-white text-lg md:text-2xl">{price}</span>
      <button className="text-white bg-blue-700/35 border border-white w-fit mx-auto p-2 md:p-5 rounded-xl"
        onClick={() => navigate(`/${category === "Mobiles" ? 'mobiles' : 'laptops'}`)}>
        Show More Products
      </button>
    </div>
  );
}

export default ProductFigure;
