const ProductCard = () => {

    // const name="mobile"
    // const price=60000
    //flex col means inline 
    // padding-top =pt and bottom pb
    // py-padding 
    // border radius- rounded
    return (
        <div className="border-2 border-black w-[300px] flex flex-col items-center gap-5 py-3 rounded-xl">
            <img src="krishna.jpg" alt="loading" className="w-[250px] h-[200px] border-1 border-black rounded-4xl " />
            <div className="flex flex-col gap-3 items-center py-4 px-3 ">
                <p className="font-bold text-3xl text-blue-400">Product:mobile</p>
                <p className="text-2xl text-black-800 text-center">sample code , mern stack from devastra </p>
                <p className="text-orange-500 text-2xl font-extrabold">Price:50000</p>
            </div>
            <button className="bg-blue-600 w-[120px] h-[30px] rounded-3xl text-white cursor-pointer hover:bg-blue-800">Cart</button>
        </div>
    )
}
export default ProductCard