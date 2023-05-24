import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Moviedetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e6c2085daccec2eb8012b84387460472`);
        if (response.ok) {
          const data = await response.json();
          setMovie(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div style={{ color: "#FFFFFF", paddingBottom: "48px" }}>
        <div style={{ position: "relative" }}>
          <img style={{margin:"4vw",width: "92vw",height:"50vw", borderRadius:"1vw", height:"100%" }} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
          <div
            style={{
              marginLeft:"4vw",
              marginRight:"4vw",
              position: "absolute",
              top: 0,
              left: 0,
              borderRadius: "1vw",
              width: "92vw",
              height:"52vw",
              background: "linear-gradient(2.7deg, #1A1A1D -0.65%, rgba(26, 26, 29, 0) 42.05%)",
              zIndex: 1
            }}
          />
          <div style={{ padding: "0 8vw", position: "absolute", bottom: "-4.5vw" }}>
          <div style={{ display: "flex", justifyContent: "space-between", width: "80%" }}>
            
            
          <div style={{ position: "absolute", bottom: "-2vw", left: 0, width: "80vw", zIndex:1 , display:"flex", justifyContent:"space-between", alignItems:"center", marginLeft:"8vw"}}>
  <h2 style={{ fontFamily: "Oswald", fontWeight: "500", fontSize: "6vw", maxWidth:"80%"}}>{movie.title}</h2>
  <div style={{ display: "flex", alignItems:"center", justifyContent:"space-between", width:"24vw"}}>
    <div style={{  width: "5vw", height: "6.5vw"}}>
      <Link style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <img src='/Images/addvector.svg' alt='add' style={{ height: "4.5vw", width: "4.5vw", color: "#FFFFFF" }} />
        <p style={{ color: "#FFFFFF", fontFamily: "Overpass", fontSize: "1vw" }}>WATCHLIST</p>
      </Link>
    </div>
    <div style={{ width: "5vw", height: "6.5vw"}}>
      <Link style={{ backgroundColor: "transparent",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
        <img src='/Images/sharevector.svg' alt='share' style={{height: "4.5vw", width: "4.5vw", color: "#FFFFFF" }} />
        <p style={{ color: "#FFFFFF", fontFamily: "Overpass", fontSize: "1vw" }}>SHARE</p>
      </Link>
    </div>
    <Link to={`/movies/${id}`}>
      <Link style={{ backgroundColor: "#DA3714", width: "9vw", height: "9vw", borderRadius: "100px",display:"flex",justifyContent:"space-evenly", alignItems:"center", opacity:"1" }}>
        <img src='/Images/playvector.svg' alt='play' style={{ height: "4.5vw", width: "4.5vw" , paddingLeft:"0.5vw"}} />
      </Link>
    </Link>
  </div>
</div>

          </div>
        </div>
        </div>

        

        <div style={{ marginTop: "8vw", marginLeft: "4vw", paddingBottom: "3vw" }}>
          <div style={{ display: "flex", width: "30vw", fontFamily: "Poppins", fontWeight: "400", fontSize: "2vw", color: "#727171", paddingBottom: "2vw", marginRight:"0.2vw", justifyContent:"space-between", alignItems:"center" }}>
            <img style={{ width: "4.5vw" }} src='/Images/imdb.svg' alt='imdb' />
            <div style={{marginLeft:"0",display:"flex", justifyContent:"space-between", width:"25.3vw", alignItems:"center"}}>
              <p>{movie.vote_average}</p>
              <p>{movie.runtime} min</p>
              <p>{movie.release_date.substring(0, 4)}</p>
            </div>
          </div>




          <div style={{ display: "flex", flexWrap: "wrap", marginTop: "1vw" }}>
              {movie.genres.map((genre) => (
                <p
                  key={genre.id}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.5vw",
                    fontFamily: "Montserrat",
                    fontWeight: "400",
                    color: "#DA3714",
                    border: "1px solid #DA3714",
                    borderRadius: "2.2vw",
                    padding: "1vw 2vw",
                    marginRight: "0.5vw",
                    marginBottom: "1vw",
                  }}
                >
                  {genre.name}
                </p>
              ))}
            </div>
 
         
        </div>

        <p style={{ width: "92vw", fontFamily: "Overpass", fontWeight: "400", fontSize: "2vw", marginLeft: "4vw" }}>{movie.overview}</p>
      </div>
    </>
  );
};

export default Moviedetails;










// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Allmovies } from './Allmovies.js';
// import Similarmovies from './Similarmovies.js';

// const Moviedetails = () => {
 
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
 

//   const { id } = useParams();
//   const movie = Allmovies.find((item) => item.id === parseInt(id));
  

//   return (
//     <>
//       <div style={{ color: "#FFFFFF" , paddingBottom:"48px"}}>

//       <div style={{ position: "relative" }}>
//     <img style={{marginLeft:"48px", width: "1304px", height: "716px"}} src={movie.banner} alt={movie.name} />
//     <div
//       style={{marginLeft:"48px",
//         position: "absolute",
//         top: 0,
//         left: 0,
//         borderRadius:"17px",
//         width: "1304px",
//         height: "716px",
//         background: "linear-gradient(2.7deg, #1A1A1D -0.65%, rgba(26, 26, 29, 0) 42.05%)",
//         zIndex: 0
//       }}
//     />
//   </div>

//         <div style={{ padding: "0px 121px", position: "absolute", bottom: "-123px" }}>

//           <div style={{ display: "flex", justifyContent: "space-between", width: "1154px" }}>
//             <h2 style={{ fontFamily: "Oswald", fontWeight: "500", fontSize: "94px" }}>{movie.name}</h2>
//             <div style={{ display: "flex", }}>
//               <div style={{ width: "84px", height: "60px", paddingTop: "39px" }}>
//                 <button style={{ backgroundColor: "transparent" }}>
//                   <img src='/Images/addvector.svg' alt='add' style={{ height: "30px", width: "30px", paddingRight: "33px", paddingLeft: "33px", color: "#FFFFFF" }} />
//                   <p style={{ color: "#FFFFFF", fontFamily: "Overpass", fontSize: "15px" }}>WATCHLIST</p>
//                 </button>
//               </div>
//               <div style={{ width: "52px", height: "60px", marginLeft: "44px", paddingTop: "39px" }}>
//                 <button style={{ backgroundColor: "transparent" }}>
//                   <img src='/Images/sharevector.svg' alt='share' style={{ height: "30px", width: "30px", paddingRight: "17px", paddingLeft: "17px", color: "#FFFFFF" }} />
//                   <p style={{ color: "#FFFFFF", fontFamily: "Overpass", fontSize: "15px" }}>SHARE</p>
//                 </button>
//               </div>

//               <button style={{ backgroundColor: "#DA3714", width: "116px", height: "116px", borderRadius: "100px", marginLeft: "63px" }}>
//                 <img src='/Images/playvector.svg' alt='play' style={{ height: "50px", width: "37px", paddingLeft: "46.04px", paddingTop: "33.27px" }} />

//               </button>

//             </div>

//           </div>

//         </div>



//         <div style={{ marginTop: "110px", marginLeft: "120px", paddingBottom: "72px" }}>
//           <div style={{ display: "flex", width: "460px", justifyContent: "space-between", fontFamily: "Poppins", fontWeight: "400", fontSize: "32px", lineHeight: "48px", color: "#727171", paddingBottom: "25px" }}>
//             <img style={{ width: "60px", height: "40px" }} src='../Images/imdb.svg' alt='imdb' />
//             <p >{movie.imdb}</p>
//             <p>{movie.duration}</p>
//             <p>{movie.year}</p>
//           </div>
//           <p style={{ fontSize: "21px", fontFamily: "Montserrat", fontWeight: "400", color: "#DA3714", border: "1px solid #DA3714", borderRadius: "22px", padding: "7px 48px", width: "72px" }}>{movie.tags}</p>

//         </div>

//         <p style={{ width: "1179px", fontFamily: "Overpass", fontWeight: "400", fontSize: "32px", marginLeft: "120px" }}>{movie.desc}</p>
//       </div>

//       <Similarmovies genre={movie.genre} />
//     </>
//   );


// };

// export default Moviedetails;









