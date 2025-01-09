const websiteGenre = [
  { name: "Action", number: 28 },
  { name: "Adventure", number: 12 },
  { name: "Animation", number: 16 },
  { name: "Comedy", number: 35 },
  { name: "Crime", number: 80 },
  { name: "Documentary", number: 99 },
  { name: "Drama", number: 18 },
  { name: "Family", number: 10751 },
  { name: "Fantasy", number: 14 },
  { name: "History", number: 36 },
  { name: "Horror", number: 27 },
  { name: "Music", number: 10402 },
  { name: "Mystery", number: 9648 },
  { name: "Romance", number: 10749 },
  { name: "Science Fiction", number: 878 },
  { name: "TV Movie", number: 10770 },
  { name: "Thriller", number: 53 },
  { name: "War", number: 10752 },
  { name: "Western", number: 37 },
];
const DomSelectors = {
  container: document.querySelector(".container"),
  list: document.getElementById("list"),
};

function getUserInput() {
  DomSelectors.list.addEventListener("change", function () {
    const userSelectedGenre = DomSelectors.list.value;
    console.log(userSelectedGenre);
    const listedGenre = websiteGenre.find(
      (genre) => genre.name === userSelectedGenre
    );
    const genreID = listedGenre ? listedGenre.number : null;
    console.log(genreID);
    return genreID;
  });
}

getUserInput();

function getMovies(genreID) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODhiNzlkNzYwZjNiNWQ4ZTBlMGU4MDhlMTJlNzRhOSIsIm5iZiI6MTczNjE4MjQwNy4yMywic3ViIjoiNjc3YzBhODcyNWUwZTkxYzU3NzUxYmRjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Hp_s_sCHgUH2q9J5mwMMKNWmr5DJPqD3PysNbtAxbqc",
    },
  };
  fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreID}`,
    options
  )
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

getMovies();

// function getGenre() {
//   if (genres) {
//     const options = {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODhiNzlkNzYwZjNiNWQ4ZTBlMGU4MDhlMTJlNzRhOSIsIm5iZiI6MTczNjE4MjQwNy4yMywic3ViIjoiNjc3YzBhODcyNWUwZTkxYzU3NzUxYmRjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Hp_s_sCHgUH2q9J5mwMMKNWmr5DJPqD3PysNbtAxbqc",
//       },
//     };
//     fetch(
//       `https://api.themoviedb.org/3/discover/movie?with_genres=${genres}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
//       options
//     )
//       .then((res) => res.json())
//       .then((res) => console.log(res.results))
//       .catch((err) => console.error(err));
//   }
// }

// getGenre();

// function createCards() {
//   const randomCard = (genres) =>
//     genres[Math.floor(Math.random() * genres.length)];
//   randomCard.forEach((card) => {
//     DomSelectors.container.insertAdjacentHTML(
//       "beforeend",
//       `<h2>: ${randomCard.name}</h2>
//              <img>: ${randomCard.image}`
//     );
//   });
// }

// fetch(
//   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
//   options
// )
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// async function getGenre() {
//   try {
//     const response = await fetch(
//       "https://api.themoviedb.org/3/genre/movie/list?language=en",
//       options
//     );
//     if (response.status != 200) {
//       throw new Error(response);
//     } else {
//       const data = await response.json();
//       genres = data.genres;
//       console.log(genres);
//     }
//   } catch (error) {
//     console.log(error);
//     alert("sorry could not find that Genre.");
//   }
// }

// function findGenre() {
//   DomSelectors.button.addEventListener("click", function () {
//     const userInput = DomSelectors.search.value;
//     const foundGenre = genres.find((genre) => genre.name === userInput);
//     DomSelectors.container.innerHTML = "";

//     if (foundGenre) {

//       const options = {
//         method: "GET",
//         headers: {
//           accept: "application/json",
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODhiNzlkNzYwZjNiNWQ4ZTBlMGU4MDhlMTJlNzRhOSIsIm5iZiI6MTczNjE4MjQwNy4yMywic3ViIjoiNjc3YzBhODcyNWUwZTkxYzU3NzUxYmRjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Hp_s_sCHgUH2q9J5mwMMKNWmr5DJPqD3PysNbtAxbqc",
//         },
//       };

//       fetch(
//         "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
//         options
//       )
//         .then((res) => res.json())
//         .then((res) => console.log(res))
//         .catch((err) => console.error(err));
//     } else {
//       alert("Sorry, that genre is not available");
//     }
//   });
// }

// async function start() {
//   await getGenre();
//   findGenre();
// }

// start();

// // function generateCards() {
// //   array.forEach(element => {

// //   });
// // }

// function highorlow(){
//   if ()
//   else

//   let i = 0
//   // for each correct answer, add one point
//   //
//   array.forEach(element => {

//   });
// }
// // function findGenre(data) {
// //   DomSelectors.button.addEventListener();
// // }
// // //Select a genre, randomize the movie, take two movies and make cards
// // //Cards should have title and image. Under the cards should be a submit button
// // //Correct card remains, the other card is removed
// // //If wrong card is chosen
// // function Createcard() {}

// // function higherview() {
// //   // assign the movie views to the submit button and set that as the value
// //   // if the views of the movie on card A > the views of the movie on card B, return A
// //   // else return card B
// //   // const bigMovie = the larger movie
// // }

// // // add event listener to the button A and button B
// // // if the user selects the correct button, then the card stays on the page and the other card is removed.
// // // if the user selects the wrong button, then the container is cleared and an alert message pops up saying "Wrong Choice, Restart."
