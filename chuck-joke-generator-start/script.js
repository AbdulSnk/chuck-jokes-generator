let jokesDiv = document.getElementById("joke");
let btn = document.getElementById("joke-btn");

const getJokes = () => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const jokeObject = JSON.parse(xhr.responseText);
      jokesDiv.innerText = jokeObject.value; // Display the joke in the div
    }
  };

  xhr.send();
};

// Fetch a joke when the page loads
// getJokes();

// Fetch a joke when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", getJokes);

// Fetch a new joke when the button is clicked
btn.addEventListener("click", getJokes);
