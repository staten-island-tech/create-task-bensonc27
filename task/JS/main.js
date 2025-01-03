const DomSelectors = {
  container: document.querySelector(".container"),
  search: document.getElementById("search"),
  button: document.getElementById("button"),
};

async function getData() {
  try {
    const response = await fetch("");

    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
    }
  } catch (error) {
    console.log(error);
    alert("sorry could not find that.");
  }
}

//Select a genre, randomize the movie, take two movies and make cards
//Cards should have title and image. Under the cards should be a submit button
//Correct card remains, the other card is removed
//If wrong card is chosen
function Createcard() {
  DomSelectors.container.innerHTML = "";

  data.array.forEach((element) => {
    const CardHTML = 
// include movie name and image
// create a submit button
  });
}

function higherview() {
// assign the movie views to the submit button and set that as the value
// if the views of the movie on card A > the views of the movie on card B, return A
// else return card B
// const bigMovie = the larger movie
}

// add event listener to the button A and button B
// if the user selects the correct button, then the card stays on the page and the other card is removed.
// if the user selects the wrong button, then the container is cleared and an alert message pops up saying "Wrong Choice, Restart."

