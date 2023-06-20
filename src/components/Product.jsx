import { useDispatch,useSelector } from 'react-redux';
import { addProductToCart, addProductToWishlist, removeFromWishlist } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Product({imageLink,title,ratings,price,id}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state=>state.user);
    let qty = 1;

    const showRatings = ()=>{
        let a = [];
        for(let i = 0;i<Math.round(ratings);++i){
            a.push("checked")
        }
        while(a.length != 5)a.push("unchecked")
        return(
            a.map((status,index)=>{
                return(
                status=="checked"?(<span key = {index} className="fa fa-star" style={{color:"yellow","fontSize":"20px"}} ></span>):(<span key = {index} className="fa fa-star" style={{color:"gray","fontSize":"20px"}} ></span>)
                )
            })
        )
    }

    const AddProToCart = () => {
        const obj = {
            id,
            title,
            price,
            imageLink,
            qty,
        }
        dispatch(addProductToCart(obj));
    } 

    const addtolist = () => {
        const obj = {
            id,
            title,
            price,
            imageLink,
            ratings,
        }
        dispatch(addProductToWishlist(obj));
    }

    const removefromlist = () => {
        const obj = {id: Number(id)};
        dispatch(removeFromWishlist(obj));
    }

    return(
        <>
            <div className="card" style={{width: "270px",paddingBottom:"10px"}}>
                <img onClick={()=>navigate(`/singleProduct/${id}`)} style={{height:"170px",width:"100%"}} src={imageLink} className="card-img-top" alt="..."/>
                <div className="card-body">
                        <div onClick={()=>navigate(`/singleProduct/${id}`)}>
                            <Link to = {`/singleProduct/${id}`}><p className="card-text">{title}</p></Link>
                            <p className = "card-text text-danger">Rs {price}</p>
                        </div>
                        <div className='d-flex flex-row justify-content-between align-items-center'>
                            {ratings && <p className="card-text">{showRatings()}</p>}
                            {
                                !user.wishlist.find((item)=>item.id == id) && (
                                    <input type="checkbox" className='heart mb-5 mr-4' onChange={()=>addtolist()}/>
                                )
                            }
                            {
                                user.wishlist.find((item)=>item.id == Number(id)) && (
                                    <input type="checkbox" checked className='heart mb-5 mr-4' onChange={()=>removefromlist()}/>
                                )
                            }
                        </div>
                    <p onClick={AddProToCart} className="text-center btn btn-outline-secondary" style={{fontSize:"10px",width:'100%'}}>Add To Cart</p>
                </div>
            </div>
        </>
    )
}