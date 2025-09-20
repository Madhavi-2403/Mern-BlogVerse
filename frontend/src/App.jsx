import ProductCard from "./ProductCard";

import NavBar from "./NavBar"
import Home from "./Home"
 //import HomePage from "./HomePage"
// import SignUp from "./SignUp"
import Login from "./login"
function App() {
  return (
    <div className="bg-gray-100">

      <NavBar />
      <Home/>
      {/* <HomePage/> */}
     {/* <SignUp />  */}
      <Login />

    </div>
    // <div className="flex justify-center items-center min-h-screen gap-8">
    //   <ProductCard/>
    //    <ProductCard/>
    //     <ProductCard/>
    // </div>
  )
}

export default App
