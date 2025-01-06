const DomSelectors = {
  container: document.querySelector(".container"),
  search: document.getElementById("search"),
  button: document.getElementById("button"),
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODhiNzlkNzYwZjNiNWQ4ZTBlMGU4MDhlMTJlNzRhOSIsIm5iZiI6MTczNjE4MjQwNy4yMywic3ViIjoiNjc3YzBhODcyNWUwZTkxYzU3NzUxYmRjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Hp_s_sCHgUH2q9J5mwMMKNWmr5DJPqD3PysNbtAxbqc",
  },
};

async function getData() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en, options"
    );
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    alert("sorry could not find that.");
  }
}