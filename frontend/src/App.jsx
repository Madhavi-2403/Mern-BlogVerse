import ProductCard from "./ProductCard";
import NavBar from "./NavBar"
import Home from "./Home"
//import HomePage from "./HomePage"
import SignUp from "./SignUp"
import Login from "./Login";
import { Routes, Route } from 'react-router-dom'
function App() {

  
  return (
    // <div className="bg-gray-100">

    <Routes>
      
      {/* <NavBar />
      <Home/> */}
      {/* <HomePage/> */}
      {/* <SignUp /> 
      <Login /> */}
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
       {/* <Route path="/sample1" element={<Sample />} /> */}
      <Route path="/home" element={<Home />} />



    </Routes>
    // <div className="flex justify-center items-center min-h-screen gap-8">
    //   <ProductCard/>
    //    <ProductCard/>
    //     <ProductCard/>
    // </div>
  )
}

export default App
