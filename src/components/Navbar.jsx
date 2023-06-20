import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions";
export default function Navbar(){
    const user = useSelector(state=>state.user);
    const dispatch = useDispatch();
    const handleLogout = (e)=>{
        e.preventDefault();
        dispatch(logoutUser()); 
    }

    return (
        <div className="container-fluid text-center border-bottom" style={{height:"60px"}}>
            <div className="row h-100">
                <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center">
                    <Link to = "/">Exclusive</Link>
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 col-xl-3 col-lg-3 col-xxl-3 col-xs-12">
                                Home
                            </div>
                            <div className="col-md-3 col-sm-3 col-xl-3 col-lg-3 col-xxl-3 col-xs-12">
                                Contact
                            </div>
                            <div className="col-md-3 col-sm-3 col-xl-3 col-lg-3 col-xxl-3 col-xs-12">
                                About
                            </div>
                            <div className="col-md-3 col-sm-3 col-xl-3 col-lg-3 col-xxl-3 col-xs-12">
                                {
                                    user.username===""?(<Link to = "/logIn">SignUP/LogIn</Link>):(
                                        <Button className="btn btn-danger" onClick = {handleLogout}>Log Out</Button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center">
                    <div className="input-group d-flex justify-content-center align-items-center">
                            <input className="bg-body-secondary border-0" style ={{outline:'none'}} type="text" placeholder="What You are looking For?" />
                        <div className="input-group-text bg-body-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>       
                        </div>
                        <div className="d-flex justify-content align-items-center">
                            <Link to = "/WishList">
                                <div className="p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                    </svg>
                                </div>
                            </Link>
                            <Link to={'/cart'} className="p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                            </Link>
                            {
                                user.username!=='' && (
                                    <div className="p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                                        </svg>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}