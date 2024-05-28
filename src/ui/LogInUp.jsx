import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useMain } from "../contexts/MainContext";
import { IoClose } from "react-icons/io5";
function LogInUp() {
    const { sign, handleSignUp, handleSignIn, logInRef, handleLogin, bglogin, bgLoginHandler } = useMain();
    return (
        <div className="flex">
            <div onClick={bgLoginHandler} ref={bglogin} className="fixed top-0 left-0 h-screen hidden bg-black/50 w-full z-50 ">

            </div>
            <div id="log-in" className=" overflow-y-auto scrollable-div fixed top-0 right-0 bg-white h-screen z-50 shadow-2xl" ref={logInRef}>
                <p className="mt-5 rounded-full border border-black w-fit p-1 mx-6 cursor-pointer hover:bg-black hover:text-white" onClick={handleLogin}><IoClose /></p>
                <div className=" font-light flex justify-center items-center gap-16 text-2xl text-[#919191]      border-b border-[#c5c5c5c2] w-[80%]  mx-auto" >
                    <span className={` ${sign === "sign-in" && `border-b border-[#3452ff] text-[#222]`} p-4  w-full text-center cursor-pointer`} onClick={handleSignIn} >Log In</span>
                    <span className={` ${sign === "sign-up" && `border-b border-[#3452ff] text-[#222]`} p-4 w-full cursor-pointer`} onClick={handleSignUp}>Sign Up</span>
                </div>

                {sign === "sign-in" ? <form className="text-sm flex flex-col gap-3 p-10">
                    <label htmlFor="email" className="text-[#777]" >Username or Email *</label>
                    <input type="email" name="email" className="border border-[#a1a1a1bd] p-3 rounded-md" />
                    <label className="text-[#777]">Password *</label>
                    <input type="password" className="border border-[#a1a1a1bd] p-3 rounded-md" />
                    <div className="mt-5 flex gap-6 text-xs justify-between">
                        <label className="text-[#777]">
                            <input type="radio" name="remember" className="mr-2" />
                            Remember Me
                        </label>
                        <span className="text-[#777]">Forgot Your Password ?</span>
                    </div>
                    <button type="submit" className="bg-[#222] py-3 px-7 mt-7 text-white text-xl uppercase">Sign In</button>
                    <span className="text-center mb-[-20px] mt-10 text-[#777] text-[1rem]">Or Login With</span>
                    <div className='flex gap-5 text-5xl justify-center items-center pt-[20px] mt-10 border-t border-[#ccccccbd]'>

                        <FaFacebook className="text-blue-900" />
                        <FaGooglePlus className="text-red-700" />
                        <AiFillTwitterCircle className="text-cyan-500" />
                    </div>
                </form> :




                    <form className="text-sm flex flex-col gap-3 px-10 py-6">
                        <label htmlFor="user" className="text-[#777]" >Email Address *</label>
                        <input type="text" name="user" className="border border-[#a1a1a1bd] p-3 rounded-md" />
                        <label htmlFor="email" className="text-[#777]" >Username *</label>
                        <input type="email" name="email" className="border border-[#a1a1a1bd] p-3 rounded-md" />
                        <label className="text-[#777]">Password *</label>
                        <input type="password" className="border border-[#a1a1a1bd] p-3 rounded-md" />

                        <button type="submit" className="bg-[#222] py-3 px-7 mt-7 text-white text-xl uppercase">Sign Up</button>
                        <span className="text-center mb-[-20px] mt-10 text-[#777] text-[1rem]">Or Login With</span>
                        <div className='flex gap-5 text-5xl justify-center items-center pt-[20px] mt-10 border-t border-[#ccccccbd]'>

                            <FaFacebook className="text-blue-900" />
                            <FaGooglePlus className="text-red-700" />
                            <AiFillTwitterCircle className="text-cyan-500" />
                        </div>
                    </form>
                }
            </div>
        </div>

    )
}

export default LogInUp;