const comments = [];

const inputContainer = document.createElement("div");
const input = document.createElement("input");
commentsContainer = document.querySelector("#comments-container");
input.classList.add("input");

input.addEventListener("keydown", (e) => {
  handleEnter(e, null);
});

commentsContainer.appendChild(inputContainer);
inputContainer.appendChild(input);

function handleEnter(e, current) {
  if (e.key === "Enter" && e.target !== "") {
    const newComment = { text: e.target.value, likes: 0, responses: [] };

    if (current === null) {
      comments.unshift(newComment);
    } else {
      current.responses.unshift(newComment);
    }

    e.target.value = "";
    commentsContainer.innerHTML = "";
    commentsContainer.appendChild(inputContainer);
    console.log(comments);

    renderComments(comments, commentsContainer);
  }
}
console.log(comments);
function renderComments(arr, parent) {}
