function loadArticles() {
  fetch("articles.json")
    .then((response) => response.json())
    .then((data) => {
      const articlesContainer = document.getElementById("articlesContainer");
      data.forEach((article) => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("singleArticleContainer");
        articleElement.innerHTML = `
                    <h1 class="title">${article.title}</h1>
                    <p class="paragrafStyle">${article.content}</p>
                    <div class="buttonContainer">
                        <button class="buttonStyle">Read More</button>
                        <button class="likeButton" onclick="likeArticle('${article.title}', '${article.content}')">Like</button>
                    </div>
                `;
        articlesContainer.appendChild(articleElement);
      });
    });
}

function likeArticle(articleTitle, articleContent) {
  let likedArticles = JSON.parse(localStorage.getItem("likedArticles")) || [];
  const article = { title: articleTitle, content: articleContent };

  if (!likedArticles.some((a) => a.title === articleTitle)) {
    likedArticles.push(article);
    localStorage.setItem("likedArticles", JSON.stringify(likedArticles));
    alert(`${articleTitle} has been liked!`);
  } else {
    alert(`${articleTitle} is already liked!`);
  }
}

function displayLikedArticles() {
  let likedArticles = JSON.parse(localStorage.getItem("likedArticles")) || [];
  let likedArticlesContainer = document.getElementById(
    "likedArticlesContainer"
  );
  likedArticlesContainer.innerHTML = "";
  likedArticles.forEach((article) => {
    let articleElement = document.createElement("div");
    articleElement.classList.add("singleArticleContainer");
    articleElement.innerHTML = `
            <h1 class="title">${article.title}</h1>
            <p class="paragrafStyle">${article.content}</p>
        `;
    likedArticlesContainer.appendChild(articleElement);
  });
}
