import { LiaStarSolid } from "react-icons/lia";
import { IoHeartSharp } from "react-icons/io5";
import { useMain } from "../contexts/MainContext";

function ProductInfo() {

    const { cart, addToCart, usedProduct, handleQuantityInc, handleQuantityDec } = useMain();



    const configedUsedProduct = {
        info: usedProduct?.Info,
        price: usedProduct?.Price,
        imgUl: usedProduct?.Url,
        id: usedProduct?.id,
        quantity: usedProduct?.quantity,
        title: usedProduct?.title
    }

    const getQuantity = cart?.filter(item => item.title === configedUsedProduct?.title)[0] || { quantity: 1 };

    return (
        <div className="flex flex-col md:grid md:grid-cols-2 container mx-auto gap-8 mt-[50px] border-b border-[#777777] pb-10 mb-[-100px] ">
            <div className="border border-[#c0c0c0] p-12 rounded-xl flex justify-center items-center h-fit">
                <img src={configedUsedProduct.imgUl} alt="" className="h-[250px] md:h-[350px] rounded-lg" />
            </div>
            <div className="flex flex-col gap-7 mx-7">
                <h1 className="text-3xl">{configedUsedProduct?.title}</h1>
                <section className="flex flex-col md:flex-row md:text-left text-center gap-3">
                    <span className="flex gap-1 mx-auto">
                        <LiaStarSolid className="text-yellow-500" />
                        <LiaStarSolid className="text-yellow-500" />
                        <LiaStarSolid className="text-yellow-500" />
                        <LiaStarSolid className="text-yellow-500" />
                        <LiaStarSolid className="text-yellow-500" />
                    </span>
                    <p>2 Reviews</p>
                    <p>(4.50)</p>
                    <span className="uppercase border border-green-700 px-4 text-green-700 rounded-xl">in stock</span>
                </section>
                <span className="text-4xl text-red-600">{configedUsedProduct?.price} </span>
                <p className="text-[#777777] font-light leading-8">- {configedUsedProduct?.info}</p>
                <section className="bg-[#e8f3fe] py-3 px-8 rounded-2xl text-[#3452ff] font-light">
                    <ul className="list-disc p-5 flex flex-col gap-2">
                        <li>Estimated delivery time 14-30 days</li>
                        <li>18 months warranty at Genuine Warranty Center.</li>
                        <li>Whats in the box: 30W Power Adapter and Block</li>
                    </ul>
                </section>
                <section className="grid grid-cols-6 gap-3">
                    <div className="flex gap-4  md:gap-8 col-span-2 text-lg bg-[#ededed] justify-center items-center rounded-2xl">
                        <span className="cursor-pointer" onClick={() => handleQuantityDec(configedUsedProduct.title)} >-</span>
                        <input type="text" value={getQuantity?.quantity} onChange={() => ``} className="w-[30px] bg-[#ededed] text-center text-black" />
                        <span className="cursor-pointer" onClick={() => handleQuantityInc(configedUsedProduct.title)}>+</span>
                    </div>
                    <button className="uppercase col-span-4 bg-[#3452ff] font-bold text-white p-2 md:p-3 rounded-xl tracking-wider" onClick={() => addToCart(configedUsedProduct)} >Add To Cart</button>
                </section>
                <p className="text-[#777777] text-sm hover:text-red-600 cursor-pointer"><IoHeartSharp className="inline mr-2 border-black text-xl " />Add To Wishlist</p>
            </div>
        </div>
    )
}


export default ProductInfo