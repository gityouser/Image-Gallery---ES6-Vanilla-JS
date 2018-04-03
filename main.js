const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const auto = document.querySelector(".auto");
const backwardsButton = document.querySelector('.backwards');
const forwardsButton = document.querySelector('.forwards');

const opacity = 0.6;
let currentIndex = 0;
let interval;

function setImage(index) {
  const image = imgs[index];
    current.src = image.src;
    styleImgs(index);
}

function styleImgs(index) {
  const image = imgs[index];
  imgs.forEach((img) => img.style.opacity = 1);
  image.style.opacity = opacity;
  current.classList.add("fade-in");
  setTimeout(() => current.classList.remove("fade-in"), 500);
}

function loop() {
  currentIndex = currentIndex < imgs.length -1 ? currentIndex + 1 : 0
  setImage(currentIndex);
  console.log(currentIndex);
}

backwardsButton.addEventListener('click', () => currentIndex > 0 ? (currentIndex -= 1, setImage(currentIndex)) : currentIndex = 0);
forwardsButton.addEventListener('click', () => currentIndex < imgs.length - 1? (currentIndex += 1, setImage(currentIndex)) : currentIndex = 0, setImage(currentIndex));

imgs.forEach((e, index) => e.addEventListener('click', () => setImage(index)));
interval = setInterval(loop, 2000);

auto.addEventListener('click', () => {
  if(interval) {
    clearInterval(interval);
    interval = null;
  } else {
    interval = setInterval(loop, 2000);
  }
})




















// imgs[0].style.opacity = opacity;


// function loadImage(e) {
//   imgs.forEach((img) => img.style.opacity = 1);
//   current.src = e.target.src;
//   current.classList.add("fade-in");
//   setTimeout(() => current.classList.remove("fade-in"), 500);
//   e.target.style.opacity = opacity;
// }
