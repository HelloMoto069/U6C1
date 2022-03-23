import {Route, Routes} from "react-router-dom"
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Products } from "../components/ProductsDashboard";
import { SingleProductList } from "../components/SingleProduct";

export const MainRoutes = ()=>{
    return(
        <>
        <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path ="/about" element = {<About/>}/>
        <Route path ="/products" element = {<Products/>}/>
        <Route path ="/products/:productId" element = {<SingleProductList/>}/>
        </Routes>
        </>
    )
}