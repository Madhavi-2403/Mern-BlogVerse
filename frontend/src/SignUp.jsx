// import React from "react"
const SignUp = () => {
    return (
        <div className="flex  flex-col items-center mt-7 gap-5">
            <h1 className="text-2xl font-bold text-blue-600">Join BlogVerse</h1>
            <p className="text-xl text-gray-700 text-center font-semibold">Create our account and <br />start your Blogging journey today </p>
            <form className="flex flex-col border-1 w-1/3 py-7 rounded-2xl items-center gap-5 shadow-2xl">
                <div className="w-[90%] flex flex-col gap-3">
                    <p className="text-md text-gray-600 font-semibold">FullName:</p>
                    <input type="text" placeholder="Enter your Full Name" className="border-1 w-full border-gray-300 py-2 rounded-4xl px-2 focus:outline-none focus:border-blue-400"/>

                </div>
                <div className="w-[90%] flex flex-col gap-3">
                    <p className="text-md text-gray-600 font-semibold">Email:</p>
                    <input type="email" placeholder="Enter your Mail" className="border-1 w-full border-gray-300 py-2 rounded-4xl px-2 focus:outline-none focus:border-blue-400"/>

                </div>
                <div className="w-[90%] flex flex-col gap-3">
                    <p className="text-md text-gray-600 font-semibold">Password:</p>
                    <input type="password" placeholder="Enter your Password" className="border-1 w-full border-gray-300 py-2 rounded-4xl px-2 focus:outline-none focus:border-blue-400"/>

                </div>
                
                <div className="w-[90%] flex flex-col gap-3">
                    <p className="text-md text-gray-600 font-semibold">Confirm Password:</p>
                    <input type="password" placeholder="Confirm Your Password" className="border-1 w-full border-gray-300 py-2 rounded-4xl px-2 focus:outline-none focus:border-blue-400"/>

                </div>
                <div className="flex gap-2 border-1 border-gray-300 w-[90%] py-2 rounded-4xl px-2 justify-center">
                    <input type="checkbox" name="" id=""  className="h-5 w-5"/>
                    <p>I agree for the Terms and Conditions</p>
                </div>
                <button className=" border-1 border-gray-500 bg-violet-500 w-[90%] rounded-4xl py-3 px-2 hover:bg-purple-700">Create Account</button>
                <div className="border-gray-700 border-1 w-[90%]"></div>
                <p className="text-gray-500 font-semibold">Already have an account ? <span className="text-purple-500 ">Sign In here</span></p>
                <button className=" font-semibold  hover:bg-gray-200 cursor-pointer  w-[90%] px-2 py-3 rounded-4xl">Back To Home</button>
            </form>
        </div>
    )
}
export default SignUp 