import React from "react";
import Menu from "../components/Menu";
import Link from "next/link";

export default function movies(props) {
    const { movies } = props

const list = () => {
    return (
        movies.map((movie, i) => {
            return (
            <li key={i}>
                <Link key={i} href='/movie/[movie]' as={`/movie/${movie.id}`}>

                {movie.name}
                
                </Link>
            </li>
            )
        })
    )
}

    return (
<div>
    <Menu />
    <h1>Estamos en la página de peliculas</h1>
    {/* {movies.map((movie, i) => {
    return (
        <Link key={i} href='/movie/[movie]' as={`/movie/${movie.id}`}>
            {movie.name}
        </Link>
)
        })} */}
        <ul>{list()}</ul>
</div>
    )
  }

// Petición fetch falsa
// Sirve para inicializar props en esta pagina o componente

  movies.getInitialProps = async () => {


    // Np funciona por la seguridad del navegador 
    // const res = await fetch('http://myjson.dit.upm.es/api/bins/6wxz')
    // const movies = await res.json()

    const movies = [
        {
            id:"joker",
            name: "Joker"
        },
        {
            id:"spiderman",
            name: "Spider-Man"
        },
        {
            id:"batman",
            name: "Batman"
        }
    ]

    return {movies};
  }