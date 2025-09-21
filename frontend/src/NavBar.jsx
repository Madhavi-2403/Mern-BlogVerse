import { Link } from "react-router-dom"

const NavBar=()=>{
    return(
        <div className="flex justify-around h-15 items-center sm:w-[90%] lg:w-full border-1  border-gray-400 bg-white">
            <h1 className="text-xl md:sm font-xl font-bold">BlogVerse</h1>
            <Link to="/home" className="text-black  hover:bg-blue-500 px-7 py-2 rounded-3xl cursor-pointer">Home</Link>
            <div className="flex gap-5 ">
                <button >🌙</button>
                <Link to="/login" className="font-bold text-gray-700 py-2 px-5 cursor-pointer ">SignIn</Link>
                <Link to="/signup" className="bg-blue-500 py-2 px-5 rounded-xl cursor-pointer">SignUp</Link>
            </div>
        </div>
    )
}
export default NavBar