import './index.css';
import Horror from './Horror';
import Scifi from './Scifi';
import Trending from './Trending';
import { FaStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';


function Home() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/335984?api_key=e6c2085daccec2eb8012b84387460472'

        );
        console.log('Response:', response);
        if (response.ok) {

          const data = await response.json();
          setMovie(data);
          console.log('Data:', data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, []);

  const renderStarRating = () => {

    const rating = Math.round(movie.vote_average / 2);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} color="#ffd700" />);
      } else {
        stars.push(<FaStar key={i} color="#c4c4c4" />);
      }
    }

    return stars;
  };

  return (
    <>
      {movie && (
        <div style={{ marginRight: "5vw", marginLeft: "5vw", marginBottom: "4vw" }}>

          <div style={{ backgroundImage: `linear-gradient(91.99deg, #000000 -1.19%, rgba(0, 0, 0, 0) 73.82%), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`, width: "90vw", height: "50vw", borderRadius: "1vw", backgroundSize: "cover", marginLeft: "0vw" }}>


            <p style={{ fontFamily: "Oswald", fontWeight: "700", fontSize: "7vw", color: "#FFFFFF", padding: "3vw 4vw 1vw" }}>{movie.title}</p>

            <p style={{ width: "70vw", fontFamily: "Overpass", fontSize: "1.5vw", fontWeight: "500", color: "#FFFFFF", paddingLeft: "4vw" }}>{movie.overview} </p>

            <div style={{ display: "flex", color: "#FFFFFF", padding: "1.5vw 4vw 3.5vw" }}>
              {renderStarRating()}
            </div>

            <div style={{ display: "flex", width: "33vw", justifyContent: "space-between", paddingLeft: "4vw" }}>
              <button style={{ backgroundColor: "#DA3714", width: "15vw", height: "4vw", fontFamily: "Overpass", borderRadius: "6vw", color: "#FFFFFF" }}>
                <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "0.1vw" }}>
                  <img src='/Images/playvector.svg' alt='play' style={{ height: "1.75vw", width: "1.75vw" }} /><p style={{ fontSize: "1.3vw", fontWeight: "700", }}>Watch Now</p>
                </div>
              </button>


              <div style={{ width: "5vw", height: "6.5vw" }}>
                <button style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <img src='/Images/addvector.svg' alt='add' style={{ height: "2.5vw", width: "2.5vw", color: "#FFFFFF" }} />
                  <p style={{ color: "#FFFFFF", fontFamily: "Overpass", fontSize: "1vw" }}>WATCHLIST</p>
                </button>
              </div>
              <div style={{ width: "5vw", height: "6.5vw" }}>
                <button style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <img src='/Images/sharevector.svg' alt='share' style={{ height: "2.5vw", width: "2.5vw", color: "#FFFFFF" }} />
                  <p style={{ color: "#FFFFFF", fontFamily: "Overpass", fontSize: "1vw" }}>SHARE</p>
                </button>
              </div>
            </div>
          </div>
        </div >
      )}


      <Trending />
      <Horror />
      <Scifi />

    </>

  )
}

export default Home;



// function Home() {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.themoviedb.org/3/trending/movie/day',
//           {
//             params: {
//               api_key: 'e6c2085daccec2eb8012b84387460472',
//               language: 'en-US'
//             }
//           }
//         );
//         const trendingMovies = response.data.results;
//         console.log(trendingMovies);
//         // Process the trending movies data
//       } catch (error) {
//         console.error('Error fetching trending movies:', error);
//       }
//     };

//     fetchData();
//   }, []);





//   return (
//     <>
// <div style={{ margin: "0 1vw", padding: "0 2vw" }}>
//   <div style={{ backgroundImage: `linear-gradient(91.99deg, #000000 -1.19%, rgba(0, 0, 0, 0) 73.82%), url(${require('./Images/bladerunner.png')})`, width: "100%", borderRadius: "1vw", backgroundSize: "cover" }}>

//     <div style={{ paddingLeft: "5vw" }}>
//       <p style={{ fontFamily: "Oswald", fontWeight: "700", fontSize: "7vw", color: "#FFFFFF", padding: "3vw 0 1vw" }}>Blade runner</p>
//       <p style={{ width: "70vw", height: "18vw", fontFamily: "Overpass", fontSize: "1.5vw", fontWeight: "500", color: "#FFFFFF" }}>Thirty years after the events of the first film, a new blade runner, LAPD Officer K (Ryan Gosling), unearths a long buried secret that has the potential to plunge what’s left of society into chaos. K’s discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former LAPD blade runner who has been missing for 30 years.</p>
//       <div style={{ color: "#FFFFFF", padding: "1.5vw 0 3.5vw" }}>
//         stars
//       </div>
//       <div style={{ display: "flex" }}>
//         <button style={{ backgroundColor: "#DA3714", width: "30vw", height: "7.5vw", fontFamily: "Overpass", fontSize: "1.5vw", fontWeight: "700", borderRadius: "27px", color: "#FFFFFF", lineHeight: "3vw" }}>
//           <div style={{ display: "flex", justifyContent: "space-evenly", paddingTop: "0.6vw" }}>
//             <img src='/Images/playvector.svg' alt='play' style={{ height: "3.75vw", width: "3.75vw" }} /><p>Watch Now</p>
//           </div>
//         </button>


//         <div style={{ width: "12vw", height: "9vw", marginLeft: "3vw" }}>
//           <button style={{ backgroundColor: "transparent" }}>
//             <img src='/Images/addvector.svg' alt='add' style={{ height: "5vw", width: "5vw", paddingRight: "6.6vw", paddingLeft: "6.6vw", color: "#FFFFFF" }} />
//             <p style={{ color: "#FFFFFF", fontFamily: "Overpass", fontSize: "1vw" }}>WATCHLIST</p>
//           </button>
//         </div>

//         <div style={{ width: "7vw", height: "9vw", marginLeft: "3vw" }}>
//           <button style={{ backgroundColor: "transparent" }}>
//             <img src='/Images/sharevector.svg' alt='share' style={{ height: "5vw", width: "5vw", paddingRight: "3.4vw", paddingLeft: "3.4vw", color: "#FFFFFF" }} />
//             <p style={{ color: "#FFFFFF", fontFamily: "Overpass", fontSize: "1vw" }}>SHARE</p>
//           </button>
//         </div>

//       </div>
//     </div>

//   </div>
// </div>

// <div style={{ height: "0.75px", backgroundColor: "#343434", margin: "3vw 5vw" }}></div>


//           <Carousel style={{height:"10vh"}} />

//     </>
//   );
// }

// export default Home;




{/* <Slider>
  <div  style={{
                  marginBottom: "2vw",
                  display: "flex",
                  justifyContent: "space-evenly",
              }}>
    {trendingMovies.map(movie=> (
      <Link to={`/movies/${movie.id}`}>
      <img src={`https://image.tmdb.org/t/p/original${movie? movie.poster_path:""}`} style={{ height: "23vw", paddingRight: "0.1vw" }} />
  
      </Link>
    ))}
  </div>
</Slider> */}
