"use strict";

const linkCategories = document.querySelector("#categories");
const linkItem = document.querySelectorAll(".item");
console.log(`Numbers of categories: ${linkCategories.children.length}`);


function result(array) {
  for (const item of array) {
    let index = 0;
    console.log(`category: ${item.children[index].textContent}`);
    console.log(`Elements: ${item.children[index + 1].children.length}`);
    index += 1;
  }
}
result(linkItem);