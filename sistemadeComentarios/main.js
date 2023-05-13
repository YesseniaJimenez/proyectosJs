const comments = [];

const inputContainer = document.createElement("div");
const input = document.createElement("input");
const commentsContainer = document.querySelector("#comments-container"); // Declara commentsContainer como variable local
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

    renderComments(comments, commentsContainer);
  }
}

function renderComments(arr, parent) {
  arr.forEach((element) => {
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("comment-container");

    const responsesContainer = document.createElement("div");
    responsesContainer.classList.add("responses-container");

    const replyButton = document.createElement("button");
    const likeButton = document.createElement("button");
    const textContainer = document.createElement("div");
    textContainer.textContent = element.text;

    const actionsContainer = document.createElement("div");

    replyButton.textContent = "Reply";
    likeButton.textContent = `${
      element.likes > 0 ? `${element.likes} likes` : "Like"
    }`; // Usa element.likes en lugar de element.liked

    replyButton.addEventListener("click", (e) => {});
    likeButton.addEventListener("click", (e) => {});

    commentContainer.appendChild(textContainer);
    commentContainer.appendChild(actionsContainer);
    actionsContainer.appendChild(replyButton);
    actionsContainer.appendChild(likeButton);

    commentContainer.appendChild(responsesContainer);

    if (element.responses.length > 0) {
      renderComments(element.responses, responsesContainer);
    }
    parent.appendChild(commentContainer);
  });
}
