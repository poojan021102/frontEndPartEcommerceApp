import {useState,useEffect} from "react";
import axios from "axios";
import Product from "../components/Product";
export default function AllProductsPage(){
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const fetchProducts = async()=>{
            try{
                const resp = await axios.get("https://dummyjson.com/products");
                for(let i = 0;i<resp.data.products.length;++i){
                    setProducts(pre=>[...pre,resp.data.products[i]]);
                }
            }
            catch(err){
                console.log("Error",err);
            }
        }
        fetchProducts();
    },[]);
    const showProducts = (a)=>{
        return(
            <div className="container-fluid">
                <div className="row">
                    {
                        a.map((item,index)=>{
                            return(
                                    <div key = {index} className="col d-flex justify-content-center align-items-center mt-2 mb-2">
                                        <Product id = {item.id} imageLink={item.thumbnail} title = {item.title} price = {item.price} ratings={Math.round(item.rating)}/>
                                    </div>
                                )
                            })
                    }
                </div>
            </div> 
        )
    }
    const setTitle = (title,name)=>{
        return(
            <div>
                <div className="d-flex m-3 align-items-center">
                    <div style = {{width:"20px",height:"50px",backgroundColor:"red",borderRadius:"5px"}}></div>
                    <p className="ms-3 text-danger fw-bold">{title}</p>
                </div>
                <p className="ms-3 h3 fw-bold">{name}</p>
            </div>
        )
    }
    return(
        <div className="m-3">
            {setTitle("All Products","See All Our Products")}
            {showProducts(products)}
        </div>
    )
}