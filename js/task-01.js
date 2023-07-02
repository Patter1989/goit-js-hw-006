const navEl = document.querySelectorAll(".item");
const numOfCat = `Number of categories: ${navEl.length}`;
console.log(numOfCat);
const categories = navEl.forEach((category) => {
  console.log("Category: " + category.querySelector("h2").textContent);
  console.log("Elements: " + category.querySelectorAll("li").length);
});
