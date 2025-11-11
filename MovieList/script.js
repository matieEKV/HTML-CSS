document.addEventListener("DOMContentLoaded", loadAndDisplayMovies);

let movieListElement = document.querySelector(".movie-list");

//creating HTML element for the movie

function createMovieElement(movie) {
  const img = document.createElement("img");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const p5 = document.createElement("p");
  const container = document.createElement("div");
  container.classList.add("movie");

  img.classList.add("ui-image");
  img.src = movie.movieImage;
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("movie-info");

  const legend = document.createElement("section");
  legend.classList.add("legend");

  const sectionTwo = document.createElement("section");
  sectionTwo.classList.add("tag");
  const l1 = document.createElement("p");
  l1.classList.add("tag");
  l1.textContent = "Name: ";
  const l2 = document.createElement("p");
  l2.classList.add("tag");
  l2.textContent = "Genre: ";
  const l3 = document.createElement("p");
  l3.classList.add("tag");
  l3.textContent = "Released: ";
  const l4 = document.createElement("p");
  l4.classList.add("tag");
  l4.textContent = "Directed by: ";
  const l5 = document.createElement("p");
  l5.classList.add("tag");
  l5.textContent = "Description: ";

  p1.classList.add("ui-name");
  p1.textContent = movie.movieName;

  p2.classList.add("ui-genre");
  p2.textContent = movie.movieGenre;

  p3.classList.add("ui-year");
  p3.textContent = movie.releaseYear;

  p4.classList.add("ui-director");
  p4.textContent = movie.director;

  p5.classList.add("ui-description");
  p5.textContent = movie.description;

  movieListElement.appendChild(container);
  container.appendChild(img);
  container.appendChild(infoContainer);

  infoContainer.appendChild(legend);
  infoContainer.appendChild(sectionTwo);

  legend.appendChild(l1);
  legend.appendChild(l2);
  legend.appendChild(l3);
  legend.appendChild(l4);
  legend.appendChild(l5);

  sectionTwo.appendChild(p1);
  sectionTwo.appendChild(p2);
  sectionTwo.appendChild(p3);
  sectionTwo.appendChild(p4);
  sectionTwo.appendChild(p5);
}
const newMovieName = document.getElementById("movie-name");
const newMovieGenre = document.getElementById("movie-genre");
const newMovieYear = document.getElementById("release-year");
const newMovieDirector = document.getElementById("director-name");
const newMovieDescription = document.getElementById("description");
const newMovieImage = document.getElementById("movie-image");

//import movie List from module
// import { movieList } from './movieList.js';
let movieList = [];

//elements for displaying a movie
let movieName = document.querySelector(".ui-name");
let releaseYear = document.querySelector(".ui-year");
let movieGenre = document.querySelector(".ui-genre");
let director = document.querySelector(".ui-director");
let description = document.querySelector(".ui-description");
let movieImage = document.querySelector(".ui-image");

function displayLastMovie() {
  if (movieList?.length > 0) {
    let i = movieList.length - 1;
    let movie = movieList[i];
    createMovieElement(movie);
  }
}

function loadAndDisplayMovies() {
  movieList = loadMovies();
  displayMovies(movieList);
}

function loadMovies() {
  //get parsed array from local storage
  return JSON.parse(localStorage.getItem("movieList"))
    ? JSON.parse(localStorage.getItem("movieList"))
    : []; //??[];

  // const ml = JSON.parse(localStorage.getItem("movieList"));
  // return ml ? ml : [];
}

function displayMovies(list) {
  if (!list || list.length < 1) {
    return;
  }
  list.forEach((item) => {
    createMovieElement(item);
  });
}
let addMovieButton = document.querySelector("#addMovie");

addMovieButton.addEventListener("click", addDisplaySaveMovies);

//will add a movie to the array
function addMovie() {
  const newMovie = {
    movieName: newMovieName.value,
    movieGenre: newMovieGenre.value,
    releaseYear: newMovieYear.value,
    director: newMovieDirector.value,
    description: newMovieDescription.value,
    movieImage: newMovieImage.value,
  };
  if (movieList) {
    movieList.push(newMovie);
  }
  closePopup();
}

function saveMovies() {
  //saves movies locally
  localStorage.setItem("movieList", JSON.stringify(movieList));
}

function addDisplaySaveMovies() {
  addMovie();
  saveMovies();
  displayLastMovie();
}

function filterMovies() {
  //will filter movies by genre using for loop
}
let ascendingButton = document.querySelector(".ascending");

ascendingButton.addEventListener("click", sortMoviesAscending);

function sortMoviesAscending() {
  //will sort movies by release year using for loop
  let sortedlist = movieList.sort(function (a, b) {
    return a.releaseYear - b.releaseYear;
  });
  // movieList.setItem('movieList', JSON.stringify(movieList));
  removeChildNodes();
  displayMovies(sortedlist);
}

let descendingButton = document.querySelector(".descending");

descendingButton.addEventListener("click", sortMoviesDescending);
function sortMoviesDescending() {
  //will sort movies by release year using for loop
  let sortedlist = movieList.sort(function (a, b) {
    return b.releaseYear - a.releaseYear;
  });
  removeChildNodes();
  displayMovies(sortedlist);
}

sortMoviesDescending();
//open and close the popup
let popup = document.querySelector(".popupContainer");
let addButton = document.querySelector("#openForm");

addButton.addEventListener("click", openPopup);

function openPopup() {
  popup.classList.add("open-popup");
  document.getElementById("overlay").style.display = "block";
}

function displaySortedList(list) {
  list.forEach((item) => {
    createMovieElement(item);
  });
}

let closeButton = document.querySelector("#cancel");
closeButton.addEventListener("click", closePopup);
let overlay = document.querySelector("#overlay");
overlay.addEventListener("click", closePopup);

function closePopup() {
  popup.classList.remove("open-popup");
  document.getElementById("overlay").style.display = "none";
}
let movieContainer = document.querySelector(".movie");

function removeChildNodes() {
  while (movieListElement.firstChild) {
    // The list is LIVE so it will re-index each call
    movieListElement.removeChild(movieListElement.firstChild);
  }
}
