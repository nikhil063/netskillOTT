import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Allmovies } from './Allmovies.js';
import Similarmovies from './Similarmovies.js';

const Moviedetails = () => {
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 

  const { id } = useParams();
  const movie = Allmovies.find((item) => item.id === parseInt(id));
  

  return (
    <>
      <div style={{ color: "#FFFFFF" , paddingBottom:"48px"}}>

      <div style={{ position: "relative" }}>
    <img style={{marginLeft:"48px", width: "1304px", height: "716px"}} src={movie.banner} alt={movie.name} />
    <div
      style={{marginLeft:"48px",
        position: "absolute",
        top: 0,
        left: 0,
        borderRadius:"17px",
        width: "1304px",
        height: "716px",
        background: "linear-gradient(2.7deg, #1A1A1D -0.65%, rgba(26, 26, 29, 0) 42.05%)",
        zIndex: 0
      }}
    />
  </div>


        

    
        <div style={{ padding: "0px 121px", position: "absolute", bottom: "-123px" }}>

          <div style={{ display: "flex", justifyContent: "space-between", width: "1154px" }}>
            <h2 style={{ fontFamily: "Oswald", fontWeight: "500", fontSize: "94px" }}>{movie.name}</h2>
            <div style={{ display: "flex", }}>
              <div style={{ width: "84px", height: "60px", paddingTop: "39px" }}>
                <button style={{ backgroundColor: "transparent" }}>
                  <img src='/Images/addvector.svg' alt='add' style={{ height: "30px", width: "30px", paddingRight: "33px", paddingLeft: "33px", color: "#FFFFFF" }} />
                  <p style={{ color: "#FFFFFF", fontFamily: "Overpass", fontSize: "15px" }}>WATCHLIST</p>
                </button>
              </div>
              <div style={{ width: "52px", height: "60px", marginLeft: "44px", paddingTop: "39px" }}>
                <button style={{ backgroundColor: "transparent" }}>
                  <img src='/Images/sharevector.svg' alt='share' style={{ height: "30px", width: "30px", paddingRight: "17px", paddingLeft: "17px", color: "#FFFFFF" }} />
                  <p style={{ color: "#FFFFFF", fontFamily: "Overpass", fontSize: "15px" }}>SHARE</p>
                </button>
              </div>

              <div style={{ backgroundColor: "#DA3714", width: "116px", height: "116px", borderRadius: "100px", marginLeft: "63px" }}>
                <img src='/Images/playvector.svg' alt='play' style={{ height: "50px", width: "37px", paddingLeft: "46.04px", paddingTop: "33.27px" }} />

              </div>

            </div>

          </div>

        </div>



        <div style={{ marginTop: "110px", marginLeft: "120px", paddingBottom: "72px" }}>
          <div style={{ display: "flex", width: "460px", justifyContent: "space-between", fontFamily: "Poppins", fontWeight: "400", fontSize: "32px", lineHeight: "48px", color: "#727171", paddingBottom: "25px" }}>
            <img style={{ width: "60px", height: "40px" }} src='../Images/imdb.svg' alt='imdb' />
            <p >{movie.imdb}</p>
            <p>{movie.duration}</p>
            <p>{movie.year}</p>
          </div>
          <p style={{ fontSize: "21px", fontFamily: "Montserrat", fontWeight: "400", color: "#DA3714", border: "1px solid #DA3714", borderRadius: "22px", padding: "7px 48px", width: "72px" }}>{movie.tags}</p>

        </div>

        <p style={{ width: "1179px", fontFamily: "Overpass", fontWeight: "400", fontSize: "32px", marginLeft: "120px" }}>{movie.desc}</p>
      </div>

      <Similarmovies genre={movie.genre} />
    </>
  );


};

export default Moviedetails;









