const gridItems = document.querySelectorAll(".gallery__item");

const showDetail = (e) => {
  // hide every grid item
  gridItems.forEach((item) => item.classList.add("hide"));
  // expand clicked item
  e.currentTarget.classList.add("expanded-item");
  e.currentTarget.classList.remove("hide");
  // use recorded details to show details view
};

gridItems.forEach((item) => item.addEventListener("click", showDetail));
