import React from 'react';
import { Allmovies } from './Allmovies.js';
import { Link } from 'react-router-dom';

const Similarmovies = ({ genre }) => {
   
 
const itemsByGenre = Allmovies.reduce((acc, item) => {
    if (!acc[item.genre]) {
      acc[item.genre] = [];
    }
    acc[item.genre].push(item);
    return acc;
  }, {});

  const movies = itemsByGenre[genre];




  return (
    <div style={{paddingLeft:"120px", overflow:"hidden"}}>
      <h2 style={{ padding: "10px 0px", fontFamily: "Poppins", fontWeight: "600", color:"#FFFFFF" }}>More like this</h2>
      <div style={{ display: "flex", width: "100%", justifyContent: "space-between"}}>
        {movies.map((item) => (
          <div
            style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between" }}
            key={item.id}
          >
            <div>
              <Link to={`/movies/${item.id}`} style={{ textDecoration: 'none'}}>
                <img src={item.image} alt={item.name} style={{ height: "227.92px", paddingRight: "22px" }} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Similarmovies;
