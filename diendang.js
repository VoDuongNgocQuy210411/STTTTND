const posts = JSON.parse(localStorage.getItem("posts")) || [];

function displayPosts() {
  const postsContainer = document.getElementById("postsContainer");
  postsContainer.innerHTML = "";
  posts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const contentParagraph = document.createElement("p");
    contentParagraph.textContent = post.content;
    postDiv.appendChild(contentParagraph);

    if (post.image) {
      const img = document.createElement("img");
      img.src = post.image;
      postDiv.appendChild(img);
    }

    postsContainer.appendChild(postDiv);
  });
}

document
  .getElementById("postForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const content = document.getElementById("postContent").value;
    const imageInput = document.getElementById("postImage");
    const imageFile = imageInput.files[0];

    const newPost = { content: content, image: null };

    if (imageFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
        newPost.image = e.target.result;
        posts.push(newPost);
        localStorage.setItem("posts", JSON.stringify(posts));
        displayPosts();
      };
      reader.readAsDataURL(imageFile);
    } else {
      posts.push(newPost);
      localStorage.setItem("posts", JSON.stringify(posts));
      displayPosts();
    }

    document.getElementById("postForm").reset();
  });
displayPosts();
