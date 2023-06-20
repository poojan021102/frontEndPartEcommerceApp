import { useParams } from "react-router-dom"
import Product from "../components/Product"
import { useEffect, useState } from "react";
import axios from "axios";

export default function AllProductPage(){
    
    const {cat} = useParams();
    const [proList,setProList] = useState([]);

    useEffect(()=>{
        axios.get('https://dummyjson.com/products/category/'+cat).then((response)=>{
            setProList(response.data.products);
        });
    },[cat]);

    const setTitle = ()=>{
        return(
            <div className="d-flex m-3 align-items-center">
                <div style = {{width:"20px",height:"50px",backgroundColor:"red",borderRadius:"5px"}}></div>
                <p className="ms-3" style={{fontSize:"20px"}}>{cat}</p>
            </div>
        )
    }

    const showProducts = ()=>{
        return(
            <div className="container-fluid">
                <div className="row">
                    {
                        proList.map((item,index)=>{
                            console.log(item)
                            return(
                                    <div key = {index} className="col d-flex justify-content-center align-items-center mt-2 mb-2">
                                        <Product imageLink={item.thumbnail} title = {item.title} price = {item.price} ratings={item.rating} id={item.id}/>
                                    </div>
                                )
                            })
                    }
                </div>
            </div> 
        )
    }
    
    return (
        <>
            <div className="m-3">
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    {setTitle({cat})}
                </div>
                {showProducts()}
            </div>
        </>
    );
}