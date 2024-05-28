import { FaCcPaypal } from "react-icons/fa";
import { useMain } from "../../contexts/MainContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function CheckOutInfo() {
    const { cart, cartTotalPrice, handleExternalSubmit, formRef, newOrder, setNewOrder, shippingFee } = useMain()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const submited = (data => {
        setNewOrder(data)
        navigate(`/orders/${newOrder.id}`)
    })

    return (
        <div className="mx-10">
            <h1 className="text-2xl my-10 font-semibold">Checkout</h1>
            <div className="flex flex-col  md:grid md:grid-cols-6">
                <form ref={formRef} action="" onSubmit={handleSubmit(submited)} className="col-span-4 mb-10 space-y-5 checkout-form">
                    <h2 className="uppercase text-3xl mb-5">Billing details *</h2>
                    <label className="block">First Name *</label>
                    <input type="text" {...register("firstName", { required: "First Name Is Required" })} className="p-4" />
                    {errors.firstName && <span className="block bg-red-300/50 text-[#777777] text-xs     w-[80%] py-2 px-5 rounded-lg">{errors.firstName.message}</span>}
                    <label className="block">Last Name *</label>
                    <input type="text" {...register("lastName", { required: "Last Name Is Required" })} />
                    {errors.lastName && <span className="block bg-red-300/50 text-[#777777] text-xs     w-[80%] py-2 px-5 rounded-lg">{errors.lastName.message}</span>}
                    <label className="block" >Company Name (Optional)</label>
                    <input type="text" />
                    <label htmlFor="country" className="block">Select your country:</label>
                    <select id="country" name="country" className="bg-[#b9b9b9] rounded-2xl p-2">
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="GB">United Kingdom</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>

                    </select>
                    <label className="block">Postal Code / ZIP *</label>
                    <input type="text" {...register("PostalCode", { required: "Postal Code Is Required" })} />
                    {errors.PostalCode && <span className="block bg-red-300/50 text-[#777777] text-xs     w-[80%] py-2 px-5 rounded-lg">{errors.PostalCode.message}</span>}
                    <label className="block">Town / City *</label>
                    <input type="text" {...register("Town", { required: "Town / City Is Required" })} />
                    {errors.Town && <span className="block bg-red-300/50 text-[#777777] text-xs     w-[80%] py-2 px-5 rounded-lg">{errors.Town.message}</span>}
                    <label className="block">Email *</label>
                    <input type="email" {...register("email", { required: "Email Is Required" })} />
                    {errors.email && <span className="block bg-red-300/50 text-[#777777] text-xs     w-[80%] py-2 px-5 rounded-lg">{errors.email.message}</span>}
                    <label className="block">Phone *</label>
                    <input type="phone" {...register("phone", { required: "Phone Is Required" })} />
                    {errors.phone && <span className="block bg-red-300/50 text-[#777777] text-xs     w-[80%] py-2 px-5 rounded-lg">{errors.phone.message}</span>}
                </form>

                <section className="col-span-2 p-10 flex flex-col gap-5 h-fit  rounded-2xl border-2 border-[#604efc]">
                    <h1 className="uppercase font-semibold text-2xl">Your Order</h1>
                    <section className="flex justify-between ">
                        <span>Product</span>
                        <span>Subtotal</span>
                    </section>
                    <section className="py-7 border-y border-[#b8b8b8da]">
                        {cart?.map(item => <div className="flex justify-between mb-10" key={item.title}><span>{item.title} X {item.quantity}</span>
                            <span>${Number(item.price.replace("$", "")) * +item.quantity}</span></div>)}
                    </section>
                    <section className=" text-2xl flex justify-between ">
                        <span className="font-semibold">Total</span>
                        <span className="text-[#3452ff]">${shippingFee === "free" ? cartTotalPrice : shippingFee === "local" ? cartTotalPrice + 5 : cartTotalPrice + 10}</span>
                    </section>
                    <section className="flex flex-col gap-4 mb-10"  >
                        <div className="flex gap-5">

                            <label>
                                <input defaultChecked className="mr-4" type="radio" name="payment" value="cash" {...register("payment")} />
                                Cash On Delivery
                            </label>
                        </div>

                        <div className="flex gap-5">
                            <label >
                                <input className="mr-4" type="radio" name="payment" value="paypal" {...register("payment")} />

                                Paypal <FaCcPaypal className="inline ml-5 text-6xl text-blue-900" />
                            </label>
                        </div>
                    </section>
                    <section className="flex  flex-col  gap-5">
                        <label className="flex gap-5 justify-cente items-center">
                            <input type="checkbox" className="mr-2" {...register("agree", { required: "You Must Agree To Our Terms" })} />
                            <p className="w-full"> I agree with the <span className="hover:underline text-[#3452ff] text-lg">terms and conditions</span> *</p>
                        </label>
                        {errors.agree && <span className="block bg-red-300/50 text-[#777777] text-xs  py-2 px-5 rounded-lg">{errors.agree.message}</span>}
                    </section>
                    <button type="submit" className="text-center uppercase block bg-[#3452ff] rounded-xl p-3 text-white text-lg tracking-wider" onClick={handleExternalSubmit}>Place order</button>
                </section>
            </div>
        </div>
    )
}



export default CheckOutInfo