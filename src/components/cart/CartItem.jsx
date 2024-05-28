import { useMain } from "../../contexts/MainContext"

function CartItem({ item, title, price, index, imgUl, quantity }) {
    const { handleQuantityInc, handleQuantityDec, handleDeleteItemCart } = useMain();




    return (
        <section className="flex flex-col gap-10 md:grid md:grid-cols-6 border-y border-[#c0c0c0] py-5   justify-between items-center">
            <div className="col-span-3 flex gap-5 w-fit  justify-center items-center">
                <span className="text-red-800 font-bold border border-black px-1 cursor-pointer " onClick={() => handleDeleteItemCart(title)}>X</span>
                <span className="mr-5">{index + 1}-</span>
                <img src={`${imgUl}`} alt="" className="w-[100px] h-[100px] rounded-xl1" />
                <p>{title}</p>
            </div>
            <div className="font-light text-lg"><span className="md:hidden">Pirce: </span>{price}</div>
            <div className="font-light text-lg">
                <div className="flex gap-5 col-span-2 text-lg bg-[#ededed] justify-center items-center rounded-2xl">
                    <span className="md:hidden">Quantity: </span>
                    <span className="cursor-pointer text-black" onClick={() => handleQuantityDec(title)}>-</span>
                    <input type="text" value={quantity} onChange={() => ``} className="w-[20px] bg-[#ededed] text-center text-black" />
                    <span className="cursor-pointer" onClick={() => handleQuantityInc(title)}>+</span>
                </div>
            </div>
            <div className="font-light text-lg"><span className="md:hidden">Total Price: </span>${Number(price.replace("$", "")) * +quantity}</div>
        </section>
    )
}


export default CartItem