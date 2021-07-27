const typeOf = element.getAttribute("type");
const seqNum = element.getAttribute("number");
const random = btoa(Math.random());

setTimeout(() => {
  if (typeOf == "news") {
    fetch("/blog/index.json").then((response) => {
      if (response.status == 200) {
        response.json().then((data) => {
          if (data[seqNum] != undefined) {
            fetch(`/blog/articles/${data[seqNum]}.json`).then((response) => {
              if (response.status == 200) {
                response.json().then((datab) => {
                  const wordSplit = datab.description.split(" ");
                  const readTime = Math.floor(wordSplit.length / 6);
                  const readTimeMins = Math.floor(readTime / 60);

                  let readTimeText = null;
                  if (readTimeMins == 0) {
                    readTimeText = "Less than a minute read";
                  } else {
                    readTimeText = `${readTimeMins} min read`;
                  }

                  document.getElementById(random).innerHTML = `
                        <h2>${datab.title}</h2>
                        <p>${readTimeText}</p>
                    `;

                  document
                    .getElementById(random)
                    .setAttribute(
                      "onclick",
                      `window.location.href = "/news.html?id=${data[seqNum]}"`
                    );
                  document
                    .getElementById(random)
                    .setAttribute("style", `cursor: pointer;`);
                });
              } else {
                document
                  .getElementById(random)
                  .setAttribute("class", "caro-card caro-card-hidden");
              }
            });
          } else {
            document
              .getElementById(random)
              .setAttribute("class", "caro-card caro-card-hidden");
          }
        });
      } else {
        document
          .getElementsByClassName("recent-news-section")[0]
          .setAttribute("style", "display: none;");
      }
    });
  }
}, 600);

return `
    <div id="${random}" class="caro-card">
    <div style="margin-bottom: 5px; height: 30px; width: 90%; border-radius: 5px;" class="skel"></div>
    <div style="margin-bottom: 10px; height: 30px; width: 30%; border-radius: 5px;" class="skel"></div>
    <div style="height: 15px; width: 40%; border-radius: 5px;" class="skel"></div>
    </div>
`;
