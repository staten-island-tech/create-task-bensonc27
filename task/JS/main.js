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
  container: document.querySelector("#container"),
  list: document.getElementById("list"),
  answer: document.querySelector(".answer"),
  score: document.querySelector(".score"),
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
    getMovies(genreID);
  });
}

getUserInput();

async function getMovies(genreID) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODhiNzlkNzYwZjNiNWQ4ZTBlMGU4MDhlMTJlNzRhOSIsIm5iZiI6MTczNjE4MjQwNy4yMywic3ViIjoiNjc3YzBhODcyNWUwZTkxYzU3NzUxYmRjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Hp_s_sCHgUH2q9J5mwMMKNWmr5DJPqD3PysNbtAxbqc",
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreID}`,
      options
    );

    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
      const randomMovies = randomizer(data.results, 2);
      console.log(randomMovies);
      const morePopularMovie =
        randomMovies[0].popularity > randomMovies[1].popularity
          ? randomMovies[0]
          : randomMovies[1];
      console.log(morePopularMovie);
      createMovies(randomMovies);
      userChoice(morePopularMovie);
    }
  } catch (error) {
    console.log(error);
    alert("Sorry could not find that movie.");
  }
}

function randomizer(randomMovies, number) {
  const randomMoviearray = [];
  for (let i = 0; i < number; i++) {
    const randomNumber = Math.floor(Math.random() * randomMovies.length);
    const randomMovie = randomMovies[randomNumber];
    randomMoviearray.push(randomMovie);
  }
  return randomMoviearray;
}

function createMovies(randomMovies) {
  DomSelectors.container.innerHTML = "";

  randomMovies.forEach((randomMovie) => {
    const CardHTML = `
   <div class="card">
      <h2>Movie: ${randomMovie.title}</h2>
      <img class="picture" src="https://image.tmdb.org/t/p/w500${randomMovie.poster_path}">
      <p class="popularity" hidden>${randomMovie.popularity}</p>
       <button id="${randomMovie.title}" class="button">Choose</button>
    </div>
`;
    DomSelectors.container.insertAdjacentHTML("beforeend", CardHTML);
  });
}

let score = 0;
function userChoice(mostPopularMovie) {
  const userButtons = document.querySelectorAll(".button");
  for (let x = 0; x < userButtons.length; x++) {
    userButtons[x].addEventListener("click", function (event) {
      if (userButtons[x].id === mostPopularMovie.title) {
        alert("Correct!");
        score++;
      } else {
        alert("Wrong.");
        score--;
      }
      DomSelectors.score.innerHTML = `${score}`;
      DomSelectors.answer.innerHTML = `The most popular movie was ${mostPopularMovie.title}`;
      const popularity = document.querySelectorAll(".popularity");
      popularity.forEach((pop) => {
        pop.hidden = false;
      });

      setTimeout(function () {
        const userSelectedGenre = DomSelectors.list.value;
        DomSelectors.answer.innerHTML = "";
        const listedGenre = websiteGenre.find(
          (genre) => genre.name === userSelectedGenre
        );
        const genreID = listedGenre ? listedGenre.number : null;
        console.log(genreID);
        getMovies(genreID);
      }, 3000);
    });
  }
}
