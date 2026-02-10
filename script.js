let step = 1;
let noCount = 0;

const title = document.getElementById("title");
const text = document.getElementById("text");
const gifMain = document.getElementById("gifMain");
const gifAlt = document.getElementById("gifAlt");
const primaryBtn = document.getElementById("primaryBtn");
const noBtn = document.getElementById("noBtn");

// 👉 REPLACE THESE WITH YOUR OWN GIF LINKS
const flirtyGif = "PASTE_FLIRTY_GIF_URL";
const warmGif = "PASTE_WARM_GRATITUDE_GIF_URL";
const happyGif = "PASTE_EXCITED_GIF_URL";
const sadGif = "PASTE_SAD_GIF_URL";

loadStep1();

function loadStep1() {
  title.innerText = "Hey you 💫";
  text.innerText = "I just wanted to say… you look extra cute today.";
  gifMain.src = flirtyGif;
  primaryBtn.innerText = "Tell me more 😌";
}

function loadStep2() {
  title.innerText = "Something real 💗";
  text.innerText =
    "You make my days softer, my laughs louder,\nand my life better just by being in it.";
  gifMain.src = warmGif;
  primaryBtn.innerText = "One more thing…";
}

function loadStep3() {
  title.innerText = "So… 💕";
  text.innerText = "Will you be my Valentine?";
  gifMain.src = happyGif;
  gifAlt.src = sadGif;
  gifAlt.classList.remove("hidden");

  primaryBtn.innerText = "Yes 💖";
  primaryBtn.onclick = sayYes;

  noBtn.classList.remove("hidden");
}

function nextStep() {
  if (step === 1) {
    step = 2;
    loadStep2();
  } else if (step === 2) {
    step = 3;
    loadStep3();
  }
}

function sayYes() {
  title.innerText = "YAYYYY 💘🎉";
  text.innerText =
    "I’m really grateful for you.\nFeb 14 — you & me.\nI can’t wait.";

  gifMain.src = happyGif;
  gifAlt.classList.add("hidden");
  noBtn.classList.add("hidden");
  primaryBtn.classList.add("hidden");

  confetti({
    particleCount: 180,
    spread: 90,
    origin: { y: 0.6 }
  });

  document.body.style.background =
    "linear-gradient(135deg, #FF758C, #FF7EB3)";
}

function sayNo() {
  noCount++;

  title.innerText = "😔";
  text.innerText =
    noCount < 3
      ? "Okay… I’ll still be right here."
      : "Okay okay 😌 I get it… maybe you don’t mean no.";

  gifMain.src = sadGif;
  gifAlt.src = happyGif;

  if (noCount >= 3) {
    noBtn.addEventListener("mouseover", dodgeNo);
  }
}

function dodgeNo() {
  const x = Math.random() * 160 - 80;
  const y = Math.random() * 60 - 30;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
