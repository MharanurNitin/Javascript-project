const Generate = document.querySelector(".blue");
const Copy = document.querySelector(".red");
const container = document.querySelector(".container");
const h2 = document.querySelector(".colorCode > h2");
const bg_container = document.querySelector(".bg-container");

const getcolor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomcode = "#" + randomNumber.toString(16);
  bg_container.style.backgroundColor = randomcode;
  h2.innerText = randomcode;
};
Generate.addEventListener("click", getcolor);
Copy.addEventListener("click", () => {
  navigator.clipboard.writeText(h2.innerText);
});
getcolor();
