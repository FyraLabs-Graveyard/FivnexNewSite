var initScroll = "header-float";

if (window.location.pathname == "/") {
  initScroll = "header-top";
}

document.addEventListener("scroll", (e) => {
  const scroll = window.scrollY;

  if (window.location.pathname == "/") {
    if (scroll == 0) {
      document
        .getElementsByClassName("header")[0]
        .setAttribute("class", "header header-top");
    } else {
      document
        .getElementsByClassName("header")[0]
        .setAttribute("class", "header header-float");
    }
  } else {
    document
      .getElementsByClassName("header")[0]
      .setAttribute("class", "header header-float");
  }
});

return `
    <div class="header ${initScroll}">
        <div class="breathable-container">
            h
        </div>
    </div>
`;
