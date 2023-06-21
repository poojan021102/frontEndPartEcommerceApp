import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkIfUserAlreadyExists } from "../redux/actions";
import { Link } from "react-router-dom";
function Completion() {
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(checkIfUserAlreadyExists());
    },[]);
    return (
    <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center", padding:"20px"}}>
      <h1>Thank you! 🎉 Your order has been placed and will be delivered soon</h1>;
      <Link to = "/" className = "btn btn-danger px-5 py-2 mb-5">Shop More</Link>
    </div>
    )
  }
  
  export default Completion;
  