import pageLoad from "./pageLoad.js";
import menuLoad from "./menu.js";
import contactLoad from "./contact.js";
import "../styles/style.css";

pageLoad();

const content = document.querySelector("#content");

content.addEventListener("click", (event) => {
  if (event.target.matches("#home") || event.target.matches(".image-small")) {
    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
    pageLoad();
  }
});

content.addEventListener("click", (event) => {
  if (event.target.matches("#menu")) {
    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
    menuLoad();
  }
});

content.addEventListener("click", (event) => {
  if (event.target.matches("#contact")) {
    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
    contactLoad();
  }
});
