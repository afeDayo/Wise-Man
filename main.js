const adviceContent = document.querySelector(".quo");
const adviceID = document.querySelector(".adv");
const loading = document.querySelector(".loading");
const button = document.querySelector(".glow");

async function getData() {
  const response = await fetch("https://api.adviceslip.com/advice");
  console.log(response);
  const data = await response.json();
  console.log(data.slip);
  loading.classList.add("d-none");
  adviceContent.textContent = data.slip.advice;
  adviceID.textContent = `ADVICE #${data.slip.id}`;
}

button.addEventListener("click", () => {
  location.reload();
});

setTimeout(() => {
  getData();
}, 3000);
