import React from 'react'

function Footer() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", padding:"0px", backgroundColor:"black", color:"white", margin:"0px", height:"227px" }} >
        <div style={{padding:"90px 48px", display:"flex"}}>
          <p style={{fontFamily:"Oswald", fontWeight:"700", fontSize:"32px", lineHeight:"47px", color:"#FFFFFF"}}>Watch</p><p style={{fontFamily:"Oswald", fontWeight:"700", fontSize:"32px", lineHeight:"47px", color:"#DA3714"}}>Flix</p>
        </div>

        <div style={{height:"127px", display: "flex", justifyContent: "space-between", marginRight:"140px", width:"975px", paddingTop:"48px"}}>
            <div>
              <h1 style={{ fontFamily: "Overpass", fontSize: "24px", fontWeight: "700", marginBottom: "10px", color:"#DA3714", lineHeight:"30px" }} >Connect Us</h1>
              <div style={{ fontFamily: "Jost", color: "#FFFFFF", display: "flex", flexDirection: "column", fontSize: "12px" }}>
                <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-About</button>
                <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-Contact Us</button>
                <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-Help center</button>
                <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-Career</button>
              </div>
            </div>
            <div>
              <h1 style={{ fontFamily: "Overpass", fontSize: "24px", fontWeight: "700", marginBottom: "10px", color:"#DA3714", lineHeight:"30px" }} >Manage </h1>
              <div style={{ fontFamily: "Jost", color: "#4D5053", display: "flex", flexDirection: "column", fontSize: "22px", marginBottom: "18px" }}>
                <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-Account</button>
                <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-Manage Account</button>
                <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-Buy Gift Card</button>
                <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-Redeem Gift Card</button>
              </div>
            </div>
            <div>
              <h1 style={{ fontFamily: "Overpass", fontSize: "24px", fontWeight: "700", marginBottom: "10px", color:"#DA3714", lineHeight:"30px" }} >Information </h1>
              <div style={{ fontFamily: "Jost", color: "#4D5053", display: "flex", flexDirection: "column", fontSize: "22px", marginBottom: "18px" }}>
                <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-Privacy</button>
                <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-Terms & Condition</button>
                <button style={{color:"white", background:"none",marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-Cookies</button>
                <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-FAQ</button>
              </div>
            </div>

        </div>




       



        

      </div>

      
    </>
  )
}

export default Footer
