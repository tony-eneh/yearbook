const gridItems = document.querySelectorAll(".gallery__item");
const closeButton = document.querySelector(".close-button");

const showDetail = (e) => {
  // hide every grid item
  gridItems.forEach((item) => item.classList.add("hide"));
  // expand clicked item
  e.currentTarget.classList.add("expanded-item");
  e.currentTarget.classList.remove("hide");

  //   display close button
  closeButton.classList.remove("hide");
};

gridItems.forEach((item) => item.addEventListener("click", showDetail));
