import ProductCarousel from "../components/ProductCarousel";
import ButtonCarousel from "../components/ButtonCarousel";
import Features from "../components/Features";
import Poster from "../components/Poster";
import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from "react";
import {checkIfUserAlreadyExists} from "../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
export default function HomePage(){
    const [bestSelling,setBestSelling] = useState([]);
    const [flashSales,setFlashSales] = useState([]);
    const [explore,setExplore] = useState([]);
    const dispatch = useDispatch();
    const [allCategories,setAllCategories] = useState([]);
    useEffect(()=>{
        dispatch(checkIfUserAlreadyExists());
        const fetchAllProducts = async()=>{
            try{
                const resp = await axios("https://dummyjson.com/products");
                console.log(resp.data.products);
                for(let i = 0;i<Math.min(resp.data.products.length,10);++i){
                    setBestSelling(pre=>[...pre,resp.data.products[i]]);
                    setFlashSales(pre=>[...pre,resp.data.products[i]]);
                    setExplore(pre=>[...pre,resp.data.products[i]]);
                }
            }
            catch(err){
                console.log("error:",err);
            }
        }
        fetchAllProducts();
    },[]);

    useEffect(()=>{
        const fetchCategories = async()=>{
            try{
                const resp = await axios.get("https://dummyjson.com/products/categories");
                for(let i = 0;i<resp.data.length;++i){
                    setAllCategories(pre=>[...pre,resp.data[i]]);
                }
            }
            catch(err){

            }
        }
        fetchCategories();
    },[]);
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
        <div>
            <div className="d-flex flex-row">
                <div className='mt-5 ml-5'>
                    <ul className="px-5 border-right" style={{width:"100%"}}>
                        <li>
                            <Dropdown drop = 'end' autoClose = {true}>
                                <Dropdown.Toggle variant="white" id="dropdown-basic">
                                    Women's Fashion
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant = 'dark'>
                                {
                                    allCategories.filter(category=>category.toLowerCase().includes("women")).map((item,index)=>{
                                        return(
                                            <Link to = {`/allProduct/${item}`} key = {index}><Dropdown.Item ><Link to = {`/allProduct/${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link></Dropdown.Item></Link>
                                        )
                                    })
                                }
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown drop = 'end' autoClose = {true} className=''>
                                <Dropdown.Toggle variant="white" id="dropdown-basic">
                                    Men's Fashion
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant = 'dark'>
                                {
                                    allCategories.filter(category=>category.toLowerCase().includes("women")).map((item,index)=>{
                                        return(
                                            <Link to = {`/allProduct/${item}`} key = {index}><Dropdown.Item ><Link to = {`/allProduct/${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link></Dropdown.Item></Link>
                                        )
                                    })
                                }
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown drop = 'end' autoClose = {true} className=''>
                                <Dropdown.Toggle variant="white" id="dropdown-basic">
                                    Electronics
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant = 'dark'>
                                {
                                    allCategories.map((item,index)=>{
                                        return(
                                            <>
                                            {
                                                (item.toLowerCase() == "laptops" || item.toLowerCase() == "smartphones" || item.toLowerCase() == "automotive") && 
                                                <Link to = {`/allProduct/${item}`} key = {index}><Dropdown.Item ><Link to = {`/allProduct/${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link></Dropdown.Item></Link>
                                            }
                                            </>
                                        )
                                    })
                                }
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown drop = 'end' autoClose = {true} className=''>
                                <Dropdown.Toggle variant="white" id="dropdown-basic">
                                    Home & Lifestyle
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant = 'dark'>
                                {
                                    allCategories.map((item,index)=>{
                                        return(
                                            <>
                                            {
                                                (item.toLowerCase() == "lighting" || item.toLowerCase() == "furniture" || item.toLowerCase() == "home-decoration") && 
                                                <Link to = {`/allProduct/${item}`} key = {index}><Dropdown.Item ><Link to = {`/allProduct/${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link></Dropdown.Item></Link>
                                            }
                                            </>
                                        )
                                    })
                                }
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown drop = 'end' autoClose = {true} className=''>
                                <Dropdown.Toggle variant="white" id="dropdown-basic">
                                    Health & Beauty
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant = 'dark'>
                                {
                                    allCategories.map((item,index)=>{
                                        return(
                                            <>
                                            {
                                                (item.toLowerCase() == "skincare" || item.toLowerCase() == "fragrances" || item.toLowerCase() == "sunglasses") && 
                                                <Link to = {`/allProduct/${item}`} key = {index}><Dropdown.Item ><Link to = {`/allProduct/${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link></Dropdown.Item></Link>
                                            }
                                            </>
                                        )
                                    })
                                }
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        {
                            allCategories.map((item,index)=>{
                                    return(
                                    <>
                                        {
                                            (item.toLowerCase() == "tops") && 
                                            <li key = {index}>
                                                <Link to = {`/allProduct/${item}`} key = {index}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
                                            </li>
                                        }
                                    </>
                                )
                            })
                        }
                        {
                            allCategories.map((item,index)=>{
                                    return(
                                    <>
                                        {
                                            (item.toLowerCase() == "groceries") && 
                                            <li key = {index}>
                                                <Link to = {`/allProduct/${item}`} key = {index}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
                                            </li>
                                        }
                                    </>
                                )
                            })
                        }
                        {
                            allCategories.map((item,index)=>{
                                    return(
                                    <>
                                        {
                                            (item.toLowerCase() == "motorcycle") && 
                                            <li key = {index}>
                                                <Link to = {`/allProduct/${item}`} key = {index}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
                                            </li>
                                        }
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='m-5'>
                <Carousel className='me-5 px-5'>
                    {
                        bestSelling.map((item,index)=>{
                            return (
                                <Carousel.Item style={{width:"100%"}}>
                                    <img src={item.thumbnail} alt={item.title} style={{width:"900px",height:"500px"}}/>
                                    <Link key = {index} to = {`/singleProduct/${item.id}`}>
                                    <Carousel.Caption>
                                        {item.title}
                                    </Carousel.Caption>
                                    </Link>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
                </div>
            </div>
            
            {setTitle("Today's","FLash Sales")}
            <ProductCarousel data = {flashSales}/>
            <p className="mt-5" style={{display:"flex",justifyContent:"center"}}>
                <Link to = "/allProducts"><p className="btn btn-danger ps-5 pe-5" style={{textAlign:"center"}}>View All Products</p></Link>
            </p>

            <p className="border-bottom mt-5 mb-5"></p>
            {setTitle("Category","Browse By Category")}
            <ButtonCarousel/>
            <p className="border-bottom mt-5 mb-5"></p>
            {setTitle("This Month","Best Selling Products")}
            <ProductCarousel data = {bestSelling}/>
            <p className="mt-5" style={{display:"flex",justifyContent:"center"}}>
                <Link to = "/allProducts"><p className="btn btn-danger ps-5 pe-5" style={{textAlign:"center"}}>View All Products</p></Link>
            </p>
            <p className="border-bottom mt-5 mb-5"></p>

            {setTitle("Our Products","Explore Our Products")}
            <ProductCarousel data = {explore}/>
            <p className="mt-5" style={{display:"flex",justifyContent:"center"}}>
                <Link to = "/allProducts"><p className="btn btn-danger ps-5 pe-5" style={{textAlign:"center"}}>Vew All Products</p></Link>
            </p>
            <p className="border-bottom mt-5 mb-5"></p>

            {/* {setTitle("Featured","New Arrival")}
            <Poster/>
            <p className="border-bottom mt-5 mb-5"></p> */}
            <Features/>
        </div>
    )
}