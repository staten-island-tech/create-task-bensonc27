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
    .then((res) => res.json()) // issue with this api idk why
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

getMovies();

function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * genreID.length);

  const item = genreID[randomIndex];

  return item;
}
console.log(getRandomItem(genreID));

function createCards() {}
