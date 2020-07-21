import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchAndSetMovies() {
            const resp = await fetch("http://localhost:3100/movies")
            const data = await resp.json();
            setMovies(data.data);
        }
        fetchAndSetMovies();
    }, [])

    return (
        <div>
            <h2>Movies</h2>
            <ul>
                {
                    movies.map(m => (
                        <li key={m.id}>
                            {m.title} <small> ({m.year}) </small>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
