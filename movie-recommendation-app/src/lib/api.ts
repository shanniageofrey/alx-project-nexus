const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMovies(query: string) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`
  );

  return res.json();//converts the API’s response (raw data) into usable JavaScript objects
}

export async function fetchMovieById(id: string){
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`
  );
  return res.json();
}

export async function fetchRecommendations(movieId: string) {
  const res = await fetch(
    `${BASE_URL}/movie/${movieId}/recommendations?api_key=${process.env.TMDB_API_KEY}`
  );   

  return res.json();//it returns the parsed JSON data from teh API response
}
