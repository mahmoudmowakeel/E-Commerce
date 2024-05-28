import { useParams } from "react-router-dom"
import { useMain } from "../contexts/MainContext";


function OrderInfo() {
    const { orderId } = useParams();
    const { cart, newOrder } = useMain()
    return (
        <div>
            {
                cart?.length > 0 ?

                    <div className="mt-[40px] container  mx-auto w-full md:w-[30%] p-12 flex flex-col gap-5 h-fit   md:rounded-2xl border-2 border-[#604efc]">
                        <h1 className="text-center text-green-600">-Thanks MR/MRS {newOrder.firstName}-</h1>
                        <h2 className="text-center text-xl ">Your Order Has Been Placed Successfully 😉</h2>
                        <span className="text-center text-sm text-[#777777]">Thanks For Choosing Us...</span>
                        <span className="text-center text-[#777777]">Your Order Id: {orderId}</span>

                        <h3>Order Summary : </h3>
                        <div>
                            {cart?.map(item => <span key={item?.title}>- {item?.title} X {item.quantity}</span>)}
                        </div>
                        <p>Payment Method: <span className="uppercase"> {newOrder?.payment} </span></p>
                        <div className="flex flex-col text-2xl text-center">
                            <span>Total Paid</span>
                            <span className="text-green-600">$1828</span>
                        </div>

                        <p className="text-sm">- Estimated Time To Arrive: 3-4 Working Days 🚚</p>


                    </div>

                    :
                    <div className="mt-[40px] container  mx-auto w-[30%] p-12 flex flex-col gap-3 h-fit  rounded-2xl border-2 border-[#604efc]">
                        <h1 className="text-center text-xl ">No Order Detailes Found !! </h1>

                    </div>
            }
        </div>

    )
}


export default OrderInfo