import { Link } from "react-router-dom"
import { Breadcrumb } from "react-bootstrap"

export default function NotFoundPage(){
    
    return(
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>
                        Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    404 Error
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="m-2" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <p style = {{fontSize:"100px"}}>404 Not Found</p>
                <p className="fw-bolder mt-2 mb-2" >Your Visited Page Not Found. You may go home page.</p>
                <Link to = "/" className="btn btn-danger m-5 ps-5 pe-5 pt-2 pb-2" style={{fontWeight:"50px"}}>Go To Home Page</Link>
            </div>
        </div>
    )
}