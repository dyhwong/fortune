addEventListener("load",app);

const fortuneList = [
  "Take a photo with your whole table 📸",
  "Take a photo of someone else taking a photo 📸",
  "Take a photo with someone who has foreign money in their wallet 📸",
  "Take a sneaky/candid photo of the couple 📸",
  "Take a photo with someone who has a pet (bonus points if they have a photo of their pet) 📸",
  "Take a photo with someone while making a heart 📸",
  "Take a photo of something (or someone!) bubbly 📸",
  "Take a photo with someone who lives in Massachusetts 📸",
  "Take a photo with someone who went to school in Massachusetts 📸",
  "Take a photo with someone you're accidentally twinning with 📸",
  "Take a photo with the person who's wearing the best socks 📸",
  "Take a photo with someone who had their nails done recently 📸",
  "Take a photo with someone who got their hair cut recently 📸",
  "Take a photo with Alicia’s bouquet 📸",
  "Take a photo with as many people in frame as you can 📸",
  "Take a photo of the best thing you ate 📸",
  "Take a photo with someone who you’ve attended a different wedding with 📸",
  "Take a photo of someone who’s getting married soon 📸",
  "Take a photo with someone who flew in for this wedding 📸",
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
