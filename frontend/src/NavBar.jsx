const NavBar=()=>{
    return(
        <div className="flex justify-around h-15 items-center border-1 border-gray-400 bg-white">
            <h1 className="text-xl font-bold">BlogVerse</h1>
            <button className="text-black  hover:bg-blue-500 px-7 py-2 rounded-3xl cursor-pointer">Home</button>
            <div className="flex gap-5 ">
                <button >🌙</button>
                <button className="font-bold text-gray-700 cursor-pointer">SignIn</button>
                <button className="bg-blue-500 py-2 px-5 rounded-xl cursor-pointer">SignUp</button>
            </div>
        </div>
    )
}
export default NavBar