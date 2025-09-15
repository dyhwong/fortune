addEventListener("load",app);

const fortuneList = [
  "A thrilling time is in your near future.",
  "Now is the time to try something new.",
  "You will soon embark on a business venture.",
  "The early bird gets the worm, but the second mouse gets the cheese.",
  "Your ability for accomplishment will follow with success.",
  "A fresh start will put you on your way.",
  "Your talents will be recognized and suitably rewarded.",
  "You will travel to many exotic places in your lifetime.",
  "An unexpected event will soon bring you fortune.",
  "Happiness begins with facing life with a smile and a wink.",
  "A new perspective will come with the new year.",
  "Good news will come to you by mail.",
  "Adventure can be real happiness.",
  "Patience is a key to joy.",
  "Your life will be filled with magical moments.",
  "You will conquer obstacles to achieve success.",
  "A faithful friend is a strong defense.",
  "Your dreams are about to come true.",
  "You will soon make a profitable investment.",
  "Your hard work will pay off today."
];

function getFortune(fortunes) {
  return fortunes[~~(Math.random() * fortunes.length)];
}

function app() {
	const fcBtn = document.querySelector("button");
	const fortuneText = document.querySelector(".fc-fortune-text");
	fortuneText.innerHTML = getFortune(fortuneList);

  setTimeout(function() {
    fcBtn.classList.remove("spawned");
    fcBtn.classList.add("opened");
  }, 500);
}

document.querySelectorAll(".left, .right").forEach(el => {
  el.addEventListener("animationend", e => {
    if (e.animationName === "breakLeft" || e.animationName === "breakRight") {
      el.style.display = "none";
    }
  })
})