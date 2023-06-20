export default function Poster(){

    return(
        <div className="m-3 d-flex justify-content-center align-items-center flex-wrap">
            <div style = {{width:"50%",height:"400px",border:"2px solid black", borderRadius:"5px"}}>

            </div>
            <div style = {{width:"50%",height:"400px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <div style={{width:"98%",height:"200px",border:"2px solid black", borderRadius:"5px"}}>

                </div>

                <div style={{width:"98%",height:"200px",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>
                    <div style = {{width:"48%",height:"190px",border:"2px solid black", borderRadius:"5px"}}>

                    </div>
                    <div style = {{width:"48%",height:"190px",border:"2px solid black", borderRadius:"5px"}}>

                    </div>
                </div>
            </div>
            
        </div>
    )
}