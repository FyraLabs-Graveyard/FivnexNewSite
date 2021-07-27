document.addEventListener("scroll", (e) => {
  const scroll = window.scrollY;

  if (scroll == 0) {
    document
      .getElementsByClassName("header")[0]
      .setAttribute("class", "header header-top");
  } else {
    document
      .getElementsByClassName("header")[0]
      .setAttribute("class", "header header-float");
  }
});

return `
    <div class="header header-top">
        <div class="breathable-container">
            h
        </div>
    </div>
`;
