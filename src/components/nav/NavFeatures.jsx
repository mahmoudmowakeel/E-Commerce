import { FaRegCircleUser } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { useParams } from "react-router-dom";
import { useMain } from "../../contexts/MainContext";
import CartHoverItem from "../../ui/CartHoverItem";


function NavFeatures() {
  const { inCart } = useParams();
  let { cart, cartTotalPrice, afterCart, navigate, handleLogin } = useMain();



  return (
    <div className="basis-[30%] py-9 px-2 md:p-12 ">
      <ul className="flex space-x-4 text-3xl justify-end">
        <li className={`${inCart === "cart" ? "" : `cart`}    md:flex justify-center items-center hover: cursor-pointer relative`}   >
          <div onClick={() => navigate('/cart')} className="relative"  >
            <span><LuShoppingCart className="inline mr-2" /></span>
            <span className="bg-red-800 py-1 px-2 text-xs absolute rounded-full text-white top-[-18px] right-[0px]">
              {afterCart}
            </span>
          </div>
          <span className="uppercase text-sm hidden md:block " onClick={() => navigate('/cart')}>My Cart</span>
          <div className="hidden md:block">
            <div className={`scrollable-div ${inCart === "cart" ? "" : `cart-overview`} hidden md:absolute z-50  top-[40px] right-[7px]  w-[390px] max-h-[590px]  bg-white px-8 py-12 shadow-2xl rounded-2xl pb-5 `}>
              {cart?.length > 0 ? <><div className=" max-h-[250px] overflow-scroll ">

                {cart?.map(item => <CartHoverItem title={item.title} imgUl={item.imgUl} price={item.price} quantity={item.quantity} key={item.title} />)}
              </div>
                <section className=" mt-7 text-lg flex justify-between">
                  <p className="text-xl">Subtotal:</p>
                  <span className="text-[#5972ff]">${cartTotalPrice}</span>
                </section>
                <div className="mt-10 flex flex-col gap-5">
                  <button className="w-full text-lg bg-[#cecece93] rounded-2xl py-2 tracking-widest" onClick={() => navigate('/cart')}>View Cart</button>
                  <button className="w-full text-lg bg-[#3452ffd3] rounded-2xl py-2 tracking-widest" onClick={() => navigate('/checkout')}>Check Out</button>
                </div></> : <p className="text-[#777777]  text-sm text-center">There Is No  Products In Cart To Show </p>}
            </div>
          </div>
        </li>
        {/* <li className="md:flex justify-center items-center hidden ">
          <MdDarkMode className="inline mr-2" />
          <span className="uppercase text-sm">Mode</span>
        </li> */}
        <li className="flex justify-center  items-center " onClick={handleLogin}>
          <FaRegCircleUser />
          <span className="uppercase text-xs text-nowrap md:text-sm mx-3 cursor-pointer ">Log in</span>
        </li>

      </ul>
    </div >
  );
}

export default NavFeatures;
