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

  //   undarken the image
  e.currentTarget.querySelector("figcaption").classList.add("undarken");
};

const closeDetail = (e) => {
  // hide close button
  closeButton.classList.add("hide");

  // display grid items
  //   also remove the expanded class if it exists. (it will exist for the currently expande element)
  gridItems.forEach((item) => {
    item.classList.remove("hide", "expanded-item");
    //   redarken the image
    item.querySelector("figcaption").classList.remove("undarken");
  });
};

gridItems.forEach((item) => item.addEventListener("click", showDetail));
closeButton.addEventListener("click", closeDetail);
