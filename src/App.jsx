import {Route,Routes} from "react-router-dom"
import './App.css'
import LoginPage from "./pages/LoginPage"
import Layout from "./Layout"
import HomePage from "./pages/HomePage"
import WishListPage from "./pages/WishListPage"
import NotFoundPage from "./pages/NotFoundPage"
import CartPage from "./pages/CartPage"
import SingleProductPage from "./pages/SingleProductPage"
import AllProductPage from "./pages/AllProductPage"
import AllProductsPage from "./pages/AllProductsPage"
import Payment from "./pages/Payment"
import Completion from "./pages/Completion"
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path = "/logIn" element={<LoginPage/>} />
        <Route index element={<HomePage />}></Route>
        <Route path='/WishList' element={<WishListPage />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
        <Route path='/singleProduct/:id' element={<SingleProductPage />}/>
        <Route path="/allProducts" element = {<AllProductsPage/>}/>
        <Route path="/checkOut" element = {<Payment/>}/>
        <Route path="/completion" element = {<Completion/>}/>
        <Route path='/allProduct/:cat' element={<AllProductPage />}></Route>
        <Route path = "*" element = {<NotFoundPage/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
