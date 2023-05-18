import React from 'react'
import './index.css'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", paddingRight: "49px", paddingLeft: "49px", backgroundColor: "#111111", height: "78px" }}>

            <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: "0px", width: "1440px", color: "white" }}>
                <div style={{ paddingTop: "21px" }} >
                    <div style={{ display: "flex" }}>
                        <p style={{ fontFamily: "Oswald", fontWeight: "700", fontSize: "24px", lineHeight: "36px", color: "#FFFFFF" }}>Watch</p><p style={{ fontFamily: "Oswald", fontWeight: "700", fontSize: "24px", lineHeight: "36px", color: "#DA3714" }}>Flix</p>
                    </div>

                </div>



                <div style={{ paddingTop: "25px" }}>
                    <Link to='/'>
                        <button style={{ color: "white", background: "none", fontFamily: "Poppins", fontWeight: "400", fontSize: "16px" }}>Movies</button>
                    </Link>
                    <Link to='/'>
                        <button style={{ color: "white", background: "none", marginRight: "57px", marginLeft: "57px", fontFamily: "Poppins", fontWeight: "400", fontSize: "16px" }}>TV Series</button>
                        </Link>
                    <button style={{ color: "white", background: "none", marginRight: "57px", fontFamily: "Poppins", fontWeight: "400", fontSize: "16px" }}>Documentaries</button>
                   <Link to='/categories'>
                    <button style={{ color: "white", background: "none", fontFamily: "Poppins", fontWeight: "400", fontSize: "16px" }}>Categories</button>
                    </Link>
                </div>




                <div style={{ paddingTop: "25px",  display: "flex", justifyContent:"space-between", width:"200px"  }}>
                    <div style={{}}>
                        <button style={{background: "none" }}><img src='/Images/magicon.png' alt='search' />
                        </button>
                        <button style={{ background: "none", marginLeft: "44px" }}><img src='/Images/noticon.png' alt='notifications' />
                        </button>

                    </div>
                    <button style={{ color: "white", background: "none", fontFamily: "Poppins", fontWeight: "700", fontSize: "16px", lineHeight: "24px", marginBottom:"20px"}}>Sign up</button>
                </div>


            </div>
        </nav>
    )
}

export default Navbar
