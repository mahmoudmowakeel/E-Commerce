import { useMain } from "../../contexts/MainContext";
import CartItem from "./CartItem";

function CartInfo() {
    const { cart, cartTotalPrice, setShippingFee, shippingFee, navigate } = useMain();

    return (
        <div className="mt-[70px]">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-16  mx-14">
                <div className="col-span-1 md:col-span-4 flex flex-col gap-8">
                    <h1 className="text-4xl ">Shopping Cart</h1>
                    <section className="md:grid md:grid-cols-6 p-1 hidden  gap-14">
                        <h3 className="col-span-3">Product</h3>
                        <h3>Price</h3>
                        <h3>Quantity</h3>
                        <h3>Subtotal</h3>
                    </section>
                    {cart.length > 0 ? cart?.map(item => <CartItem title={item.title} index={cart.indexOf(item)} price={item.price} imgUl={item.imgUl} quantity={item.quantity} item={item} key={cart.indexOf(item)} />) : <p className="text-[#777777] text-center mt-10">There Is No Items In The Cart To Be Shown , Please Add From Our Products 🤠</p>}
                </div>
                <div className="col-span-1 md:col-span-2">
                    <div className="p-10 flex flex-col gap-3  rounded-2xl border-2 border-[#604efc]">
                        <h1 className="uppercase text-2xl font-bold">cart totals</h1>
                        <section className="flex justify-between border-b py-5 border-[#c0c0c0]">
                            <h3>* Subtotal</h3>
                            <p className="font-bold">${cartTotalPrice}</p>
                        </section>
                        <section className="grid grid-cols-6 justify-between border-b py-5 border-[#c0c0c0] ">
                            <h3 className="col-span-3">* Shipping</h3>
                            <form className="flex flex-col col-span-3 gap-3">
                                <section className="flex gap-3">
                                    <input type="radio" name="ship" id="free" defaultChecked onChange={() => setShippingFee("free")} />
                                    <label htmlFor="free">
                                        Free shipping
                                    </label>
                                </section>

                                <section className="flex gap-2">
                                    <input onChange={() => setShippingFee("local")} type="radio" name="ship" id="local" />
                                    <label htmlFor="local" className="text-sm">Local pickup: 5.00$</label>
                                </section>

                                <section className="flex gap-2">
                                    <input onChange={() => setShippingFee("flat")} type="radio" name="ship" id="flat" />
                                    <label htmlFor="flat" >Flat rate: 10.00$</label>
                                </section>

                                <span className="text-[#777777]">Shipping options will be updated during checkout.</span>
                            </form>
                        </section>
                        <section>
                            <div className="flex justify-between">
                                <h1 className="text-lg font-bold">* Total</h1>
                                <span>{shippingFee === "free" ? cartTotalPrice : shippingFee === "local" ? cartTotalPrice + 5 : cartTotalPrice + 10}</span>
                            </div>
                            <button className="bg-[#3452ff] w-full text-white rounded-xl mt-10 mx-auto px-10 py-4" onClick={() => navigate('/checkout')}>PROCEED TO CHECKOUT</button>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartInfo;
