import Product from "../components/Product"
import { useSelector } from 'react-redux';

export default function WishListPage(){
    const user = useSelector(state=>state.user);

    const setTitle = (title)=>{
        return(
                <div className="d-flex m-3 align-items-center">
                    <div style = {{width:"20px",height:"50px",backgroundColor:"red",borderRadius:"5px"}}></div>
                    <p className="ms-3" style={{fontSize:"20px"}}>{title}</p>
                </div>
        )
    }
    const showProducts = ()=>{
        return(
            <div className="container-fluid">
                <div className="row">
                    {
                        user.wishlist.map((item,index)=>{
                            return(
                                    <div key = {index} className="col d-flex justify-content-center align-items-center mt-2 mb-2">
                                        <Product imageLink={item.imageLink} title = {item.title} price = {item.price} ratings={item.ratings} id={item.id}/>
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
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p>WishList({user.wishlist.length})</p>
                    <p className="btn btn-outline-secondary">Move All Item to bag</p>
                </div>
                {showProducts()}
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    {setTitle("Just For You")}
                    <p className="btn btn-outline-secondary" style = {{display:"flex",alignItems:"center"}}>See All</p>
                </div>
                {showProducts()}
            </div>
        </>
    )
}