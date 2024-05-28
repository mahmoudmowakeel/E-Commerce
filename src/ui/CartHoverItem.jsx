import { useMain } from "../contexts/MainContext"

function CartHoverItem({ title, imgUl, price, quantity }) {
    const { handleQuantityDec, handleQuantityInc } = useMain()
    return (
        <div className="grid grid-cols-2 gap-14 mb-5 border-b border-[#b9b9b9] pb-5">
            <section>
                <img src={`${imgUl}`} alt="" className="w-[190px] h-[120px] my-auto" />
            </section>
            <section className="grid grid-cols-2 gap-4">
                <h1 className="col-span-2 text-[1.1rem] font-light">{title}</h1>
                <div className="flex  text-sm bg-[#ededed] justify-center items-center rounded-2xl">
                    <span className="cursor-pointer " onClick={() => handleQuantityDec(title)}>-</span>
                    <input type="text" value={quantity} onChange={() => ``} className="w-[30px] bg-[#ededed] text-center text-black" />
                    <span className="cursor-pointer" onClick={() => handleQuantityInc(title)} >+</span>
                </div>
                <span className="text-sm text-red-800 font-bold my-auto" >{price}</span>
            </section>

        </div>
    )
}


export default CartHoverItem