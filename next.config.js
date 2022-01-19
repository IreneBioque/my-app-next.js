module.exports = {
  reactStrictMode: true,
  // exportPathMap: async function() {
  //   const paths = {
  //     "/": { page: "/" },
  //     "/movies": { page: "/movies" },
  //     "/contact": { page: "/contact" }
  //   };

  //   const res = await fetch("https://api.myjson.com/bins/o3kfc");
  //   const movies = await res.json();
  //   movies.forEach(movie => {
  //     paths[`/movie/${movie.id}`] = {
  //       page: "/movie/[id]",
  //       query: { id: movie.id }
  //     };
  //   });

  //   return paths;
  // },
  
}
