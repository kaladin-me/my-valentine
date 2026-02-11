let step = 0;
let noCount = 0;
let isPlaying = false;

const title = document.getElementById("title");
const text = document.getElementById("text");
const gifMain = document.getElementById("gifMain");
const gifAlt = document.getElementById("gifAlt");
const primaryBtn = document.getElementById("primaryBtn");
const noBtn = document.getElementById("noBtn");

const music = document.getElementById("bgMusic");
// const musicBtn = document.getElementById("musicToggle");

// 👉 REPLACE WITH YOUR OWN GIF LINKS
const flirtyGif = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp3eGsyYXQ4Y3p1Ymtnd2xsZnM4d3pmMjVoOHAweXVwOHI5bGFjdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Aa7LPlzUFSHyiKkmHg/giphy.gif";
const warmGif = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp3eGsyYXQ4Y3p1Ymtnd2xsZnM4d3pmMjVoOHAweXVwOHI5bGFjdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Aa7LPlzUFSHyiKkmHg/giphy.gif";
const happyGif = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp3eGsyYXQ4Y3p1Ymtnd2xsZnM4d3pmMjVoOHAweXVwOHI5bGFjdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Aa7LPlzUFSHyiKkmHg/giphy.gif";
const sadGif = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp3eGsyYXQ4Y3p1Ymtnd2xsZnM4d3pmMjVoOHAweXVwOHI5bGFjdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Aa7LPlzUFSHyiKkmHg/giphy.gif";

// ---------- STEP LOADERS ----------

loadStep0();

function loadStep0() {
  fadeContent();
  title.innerText = "Heyyyy Shreya!! 👋";
  text.innerText = "";
  gifMain.classList.add("hidden");
  gifAlt.classList.add("hidden");
  noBtn.classList.add("hidden");

  primaryBtn.innerText = "Hiiiii 💃";
  primaryBtn.onclick = startExperience;
}

function loadStep1() {
  fadeContent();
  title.innerText = "Soooo 👉👈";
  text.innerText = "I wanted to talk to you about something special...";
  gifMain.src = flirtyGif;
  gifMain.classList.remove("hidden");

  primaryBtn.innerText = "What is it? 🧐";
  primaryBtn.onclick = nextStep;
}

function loadStep2() {
  fadeContent();
  title.innerText = "Are Ruko Thoda 😋";
  text.innerText =
    "Pehle thoda bhaav khalu...\nFir batata hu";
  gifMain.src = warmGif;

  primaryBtn.innerText = "Jaldi Bataoooo 😤";
}

function loadStep3() {
  fadeContent();
  title.innerText = "Your Highness 🧎‍♂️";
  text.innerText = "Would you grace me with your hand and be my Valentine forever?";
  gifMain.src = happyGif;
  gifAlt.src = sadGif;
  gifAlt.classList.remove("hidden");

  primaryBtn.innerText = "Yes 💖";
  primaryBtn.onclick = sayYes;

  noBtn.classList.remove("hidden");
}

// ---------- FLOW CONTROL ----------

function startExperience() {
  startMusic();
  step = 1;
  loadStep1();
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

// ---------- YES / NO ----------

function sayYes() {
  fadeContent();
  title.innerText = "YAYYYY 💘🎉";
  text.innerText =
    "I love you so much\nI’m really grateful for you.\nFeb 14 — you & me.\nI can’t wait.";

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

  fadeContent();
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

// ---------- EFFECTS ----------

function startMusic() {
  if (!isPlaying) {
    music.volume = 0;
    music.play();

    const fade = setInterval(() => {
      if (music.volume < 0.4) {
        music.volume += 0.02;
      } else {
        clearInterval(fade);
      }
    }, 100);

    // musicBtn.innerText = "🔊";
    isPlaying = true;
  }
}

function dodgeNo() {
  const x = Math.random() * 160 - 80;
  const y = Math.random() * 60 - 30;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function fadeContent() {
  title.classList.remove("fade");
  text.classList.remove("fade");
  void title.offsetWidth; // reset animation
  title.classList.add("fade");
  text.classList.add("fade");
}
