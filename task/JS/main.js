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
function higherview() {}
// find which movie higher view
