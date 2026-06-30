const movieLists = [
  [
    { id: 1, title: "Inception", genre: "Sci-Fi", rating: 9 },
    { id: 2, title: "Avatar", genre: "Sci-Fi", rating: 7 }
  ],
  [
    { id: 3, title: "Titanic", genre: "Drama", rating: 8 },
    { id: 2, title: "Avatar", genre: "Sci-Fi", rating: 7 }
  ]
];
function flattenMovies(movieLists) {
    // Directly return the result of flatMap
    return movieLists.flatMap(film => film.map(m => m.title));
}

const result = flattenMovies(movieLists);
console.log(result);
function removeDuplicates(movies){
         return [...new Set(movies)];


}

console.log(removeDuplicates(result))

filterTopRated(movies){
    return movies.filter(e=>e.rating>=8)
}
