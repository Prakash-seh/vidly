import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(apiEndpoint + "/" + movieId);
}

export function deleteMovie(movieId) {
  return http.delete(apiEndpoint + "/" + movieId);
}

export function saveMovie(movie) {
  if (movie._id) {
    const movieBody = { ...movie };
    delete movieBody._id;
    return http.put(apiEndpoint + "/" + movie._id, movieBody);
  }

  return http.post(apiEndpoint, movie);
}
