const articleID = new URL(window.location).searchParams.get("id");

setTimeout(() => {
  fetch(`/blog/articles/${articleID}.json`).then((response) => {
    if (response.status == 200) {
      response.json().then((data) => {
        const wordSplit = data.description.split(" ");
        const readTime = Math.floor(wordSplit.length / 6);
        const readTimeMins = Math.floor(readTime / 60);

        let readTimeText = null;
        if (readTimeMins == 0) {
          readTimeText = "Less than a minute read";
        } else {
          readTimeText = `${readTimeMins} min read`;
        }

        document.getElementsByClassName("news-art")[0].innerHTML = `
                <h1>${data.title}</h1>
                <p>${data.author}</p>
                <p>${readTimeText}</p>
                <br>
            `;
        var description = document.createElement("p");
        description.innerText = data.description;

        document.getElementsByClassName("news-art")[0].appendChild(description);
      });
    }
  });
}, 500);
