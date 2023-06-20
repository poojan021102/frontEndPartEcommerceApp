import { useNavigate } from 'react-router-dom';
import loginPageImage from '../assets/loginPageImage.png'
import { Spinner } from 'react-bootstrap';
import {useEffect, useState} from "react"
import axios from "axios"
import { useDispatch,useSelector } from 'react-redux';
import { loginUser,checkIfUserAlreadyExists } from '../redux/actions';
export default function LoginPage(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state=>state.user);
    const handleLoginRequest = async(e)=>{
        e.preventDefault();
        setIsLoading(true);
        axios.post("https://dummyjson.com/auth/login",{username,password}).then(
            resp=>{
                if(resp.status === 200){
                    dispatch(loginUser(resp.data));
                    navigate(-1);
                }
                else{
                    alert("Invalid UserName or Password");  
                }
                setIsLoading(false);  
            }
        )
        .catch(
            error=>{
                setIsLoading(false);
                alert("Invalid UserName or Password");
            }
        );
    }
    useEffect(()=>{
        dispatch(checkIfUserAlreadyExists());
        if(user.username !== "")navigate("/homePage");
    },[])
    return (
        <div>
            <div className="cotainer-fluid">
                <div className="row d-flex align-items-center justify-content-center" style={{width:"99%"}}>
                    <div className="col-md-6 pt-5 pb-5 col-sm-6 col-xs-12 d-flex align-items-center justify-content-start pe-0">
                        <img className='border-0' src={loginPageImage} style={{height:'50%',width:'70%'}} alt="Login" />
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 d-flex justify-content-start align-items-center p-0">
                        <div className="" style={{width:'70%'}}>
                            <p className='fs-3 fw-bold'>Login To Exclusive</p>
                            <p className='fs-6 fw-lighter'>Enter Your Details bellow</p>
                            <input type="text" placeholder='Username' onChange={e=>setUsername(e.target.value)} value = {username} className='p-1' style = {{width:'100%',outline:'none'}}/><br/>
                            <input type="password" placeholder='password' value = {password} onChange={e=>setPassword(e.target.value)} className='p-1 mt-3' style = {{width:'100%',outline:'none'}}/><br/>
                            <div className='d-flex align-items-center justify-content-between mt-3'>
                                <input type="submit" value="LogIn" className='btn btn-danger ps-5 pe-5' onClick={handleLoginRequest}/>
                                {/* <Link to={'/HomePage'}>Link</Link> */}
                                <a className='text-danger'>Forget Password</a>
                            </div>
                            <p className='text-center'>{
                                isLoading && <Spinner animation="border" variant="danger" />
                            }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}