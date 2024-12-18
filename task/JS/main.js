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
