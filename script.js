let noCount = 0;

const message = document.getElementById("message");
const sub = document.getElementById("sub");
const yesGif = document.getElementById("yesGif");
const noGif = document.getElementById("noGif");
const noBtn = document.getElementById("noBtn");

// 👉 PASTE YOUR GIF LINKS HERE
const happyGif = "PASTE_EXCITED_GIF_URL_HERE";
const sadGif = "PASTE_SAD_GIF_URL_HERE";

yesGif.src = happyGif;
noGif.src = sadGif;

function yes() {
  message.innerText = "YAYYYY 💖🎉";
  sub.innerText = "Feb 14. You & Me. I can’t wait.";

  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.6 }
  });

  yesGif.src = happyGif;
  noGif.style.display = "none";
  document.body.style.background =
    "linear-gradient(135deg, #ff758c, #ff7eb3)";
}

function no() {
  noCount++;

  message.innerText = "😔";
  sub.innerText =
    noCount < 3
      ? "Okay… I’ll be right here if you change your mind."
      : "Okay okay 😌 I’ll stop asking… maybe.";

  yesGif.src = happyGif;
  noGif.src = sadGif;

  if (noCount >= 3) {
    noBtn.addEventListener("mouseover", dodge);
  }
}

function dodge() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
