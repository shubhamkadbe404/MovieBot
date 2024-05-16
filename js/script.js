// Listen for keydown event on the input field
document
  .getElementById("user-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  if (userInput.trim() === "") return;
  addUserMessage(userInput);
  sendRequest(userInput);
  document.getElementById("user-input").value = "";
}

function addUserMessage(message) {
  var chatContainer = document.getElementById("chat-container");
  var userMsgDiv = document.createElement("div");
  userMsgDiv.className = "user-msg";
  userMsgDiv.textContent = message;
  chatContainer.appendChild(userMsgDiv);
}

function addBotMessage(message) {
  var chatContainer = document.getElementById("chat-container");
  var botMsgDiv = document.createElement("div");
  botMsgDiv.className = "bot-msg";
  botMsgDiv.innerHTML = message;
  chatContainer.appendChild(botMsgDiv);
  scrollToBottom();
}

function sendRequest(userInput) {
  // Using OMDB API to search for movie information
  fetch(
    "https://www.omdbapi.com/?apikey=835c6558&t=" +
      encodeURIComponent(userInput) +
      "&plot=full"
  )
    .then((response) => response.json())
    .then((data) => {
      var response;
      if (data.Response === "True") {
        // If response contains incomplete information, fetch details using IMDb ID
        if (data.Plot === "N/A" || data.imdbRating === "N/A") {
          fetch(
            "https://www.omdbapi.com/?apikey=835c6558&i=" +
              data.imdbID +
              "&plot=full"
          )
            .then((response) => response.json())
            .then((details) => {
              response = `<b>Title:</b> ${details.Title}<br><b>Year:</b> ${details.Year}<br><b>Plot:</b> ${details.Plot}<br><b>IMDB Rating:</b> ${details.imdbRating}`;
              addBotMessage(response);
            })
            .catch((error) => {
              console.error("Error fetching details:", error);
              addBotMessage(
                "Oops! Something went wrong. Please try again later."
              );
            });
        } else {
          response = `<b>Title:</b> ${data.Title}<br><b>Year:</b> ${data.Year}<br><b>Plot:</b> ${data.Plot}<br><b>IMDB Rating:</b> ${data.imdbRating}`;
          addBotMessage(response);
        }
      } else {
        response = "Sorry, I couldn't find information about that movie.";
        addBotMessage(response);
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      addBotMessage("Oops! Something went wrong. Please try again later.");
    });
}

function clearChat() {
  var chatContainer = document.getElementById("chat-container");
  chatContainer.innerHTML = "";
}

function scrollToBottom() {
  var chatContainer = document.getElementById("chat-container");
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
