import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect,useState } from 'react';
import axios from "axios";
export default function ButtonCarousel(){
  const [category,setCategory] = useState([]);
  useEffect(()=>{
    const fetchCategory = async()=>{
      const resp = await axios.get("https://dummyjson.com/products/categories");
      for(let i = 0;i<resp.data.length;++i){
        setCategory(pre=>[...pre,resp.data[i]]);
      }
    }
    fetchCategory();
  },[]);
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 8,
          paritialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          paritialVisibilityGutter: 30
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          paritialVisibilityGutter: 30
        }
      };
      const showButton = (item)=>{
        return (
          <div className='btn btn-outline-secondary' style = {{width:"100px",height:"100px",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}>
            <p className='text-center m-0'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg></p>
            <p className='text-center m-0' style={{fontSize:"15px"}}>{item}</p>
          </div>
        )
      }
    return(
        <>
            <Carousel partialVisbile = {true} autoPlay = {true} autoPlaySpeed = {3000} infinite = {true} paritialVisibile='right' className='m-3' responsive={responsive} draggable = {true} swipeable = {true}>
                {
                  category.map((item,index)=>{
                    return showButton(item.charAt(0).toUpperCase() + item.slice(1));
                  })
                }
            </Carousel>
        </>
    )
}