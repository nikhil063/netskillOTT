import React, { useEffect } from 'react'
import Carousel from './Carousel'
import './index.css'


function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    



    return (
        <>

            <div style={{ margin: "0 48px 0px 48px" }} >
                <div style={{ backgroundImage: `linear-gradient(91.99deg, #000000 -1.19%, rgba(0, 0, 0, 0) 73.82%), url(${require('./Images/bladerunner.png')})`, width:"1432px", borderRadius: "15px", backgroundSize: "cover", height:"669px" }}>

                    <div style={{ paddingLeft: "52px" }}>
                        <p style={{ fontFamily: "Oswald", fontWeight: "700", fontSize: "96px", color: "#FFFFFF", padding: "42px 0 12px" }}>Blade runner</p>
                        <p style={{ width: "567px", height: "141px", fontFamily: "Overpass", fontSize: "18px", fontWeight: "500", color: "#FFFFFF" }}>Thirty years after the events of the first film, a new blade runner, LAPD Officer K (Ryan Gosling), unearths a long buried secret that has the potential to plunge what’s left of society into chaos. K’s discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former LAPD blade runner who has been missing for 30 years.</p>
                        <div style={{ color: "#FFFFFF", padding: "21px 0px 39px" }}>
                            stars
                        </div>
                        <div style={{ display: "flex" }}>
                            <button style={{ backgroundColor: "#DA3714", width: "176px", height: "45px", fontFamily: "Overpass", fontSize: "18px", fontWeight: "700", borderRadius: "27px", color: "#FFFFFF", lineHeight:"23px" }}>
                                <div style={{ display: "flex", justifyContent: "space-evenly", paddingTop:"5px"}}>
                                    <img src='/Images/playvector.svg' alt='play' style={{ height: "22px", width: "22px", }} /><p>Watch Now</p>
                                </div>
                            </button>


                            <div style={{ width: "84px", height: "60px", marginLeft: "36px" }}>
                            <button style={{backgroundColor: "transparent"}}>
                                <img src='/Images/addvector.svg' alt='add' style={{ height: "30px", width: "30px", paddingRight: "33px", paddingLeft: "33px", color: "#FFFFFF" }} />
                                <p style={{ color: "#FFFFFF", fontFamily: "Overpass", fontSize: "15px" }}>WATCHLIST</p>
                                </button>
                            </div>

                            <div style={{ width: "52px", height: "60px", marginLeft: "36px" }}>
                                <button style={{backgroundColor: "transparent"}}>
                                    <img src='/Images/sharevector.svg' alt='share' style={{ height: "30px", width: "30px", paddingRight: "17px", paddingLeft: "17px", color: "#FFFFFF" }} />
                                    <p style={{ color: "#FFFFFF", fontFamily: "Overpass", fontSize: "15px" }}>SHARE</p>
                                </button>
                            </div>

                        </div>
                    </div>

                </div>



            </div>

            <div style={{ height: "0.75px", backgroundColor: "#343434", margin: "24px 48px" }}></div>

                <Carousel/>


        </>
    )
}

export default Home
