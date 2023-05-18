import React from 'react'
import { Allmovies } from "./Allmovies.js"
import { Link } from 'react-router-dom';



const Carousel = () => {
    const genreOrder = ["Trending", "Horror", "Sci-Fi" ];

    const itemsByGenre = Allmovies.reduce((acc, item) => {
        if (!acc[item.genre]) {
            acc[item.genre] = [];
        }
        acc[item.genre].push(item);
        return acc;
    }, {});

    return (
        <>
            <div style={{ padding: "0px 48px" }}>
                {genreOrder.map((genre) => {
                    const movies = itemsByGenre[genre];
                   
                        return (
                            <section key={genre}>
                                <h2 style={{ padding: "10px", fontFamily: "Poppins", fontWeight: "600", color:"#FFFFFF" }}>{genre}</h2>
                                <div style={{ display: "flex", width: "1342px", justifyContent: "space-between" }}>
                                    {movies.map((item) => (
                                        <div
                                            style={{
                                                marginBottom: "20px",
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                            key={item.id}
                                        >
                                            <div>
                                                <Link to={`/movies/${item.id}`} style={{ textDecoration: 'none' }}>
                                                    <img src={item.image} alt={item.name} style={{ height: "227.92px", paddingRight: "22px" }} />
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        );
                    
                    
                })}
            </div>
        </>
    );
};

export default Carousel;

