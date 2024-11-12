const form = document.querySelector("form");
const inps = document.querySelectorAll(".radio");
const rate = document.querySelector(".rating");
const thank = document.querySelector(".thank");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  let ratingValue = Object.fromEntries(formData).rating;
  rate.classList.add("hide");
  // if nothing selected 0 will be defult rating
  ratingValue = ratingValue ? ratingValue : 0;
  thank.classList.remove("hide");
  //updating rating on thank you state
  thank.querySelector(".thank__rate--number").innerHTML = ratingValue;
});
