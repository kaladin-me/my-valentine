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
const warmGif = "https://media1.tenor.com/m/YIRrOK53KKgAAAAd/shibuya-station-haru.gif";
const happyGif = "https://media1.tenor.com/m/H67cGShC7nQAAAAC/butler-anime.gif";
const sadGif = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp3eGsyYXQ4Y3p1Ymtnd2xsZnM4d3pmMjVoOHAweXVwOHI5bGFjdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Aa7LPlzUFSHyiKkmHg/giphy.gif";

// ---------- CUSTOM STAGES CONFIG ----------

let maybeStage = 0;

const maybeStages = [
  {
    text: "Hmmm..? What do you mean?\nShreya, I can’t stop thinking about you.",
    button: "Hmmm...",
    gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2RibnZ4MTU3eDkxcTM4bWplcThrOHNsaXMyb3N4ZWh4NGZ5OG1xcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vAJFVXa9y91LsYRPY9/giphy.gif"
  },
  {
    text: "Maybe?? But I love you so muchhhh Shreya 😭💕",
    button: "Maybe..",
    gif: "https://media1.tenor.com/m/7WyMlRe9-QcAAAAC/cry-sad.gif"
  },
  {
    text: "Love, when it comes to you Shreya, I have oceans of it",
    button: "How much??",
    gif: "https://media1.tenor.com/m/7WyMlRe9-QcAAAAC/cry-sad.gif"
  }
];

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

// ---------- STEP 3 ----------

function loadStep3() {
  fadeContent();

  title.innerText = "My Lady 🧎‍♂️";
  text.innerText = "Would you grace me with your hand and be my Valentine forever?";

  gifMain.src = happyGif;

  primaryBtn.innerText = "Yes 💖";
  primaryBtn.onclick = sayYes;

  noBtn.classList.remove("hidden");
  noBtn.innerText = maybeStages[0].button;
  noBtn.onclick = handleMaybe;

  maybeStage = 0;
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

function handleMaybe() {
  fadeContent();

  if (maybeStage < maybeStages.length) {
    const current = maybeStages[maybeStage];

    text.innerText = current.text;
    noBtn.innerText = current.button;
    gifMain.src = current.gif;

    maybeStage++;

    // Start dodging after last defined stage
    if (maybeStage >= maybeStages.length) {
      noBtn.addEventListener("mouseover", dodgeNo);
    }
  }
}

// ---------- MAYBE LOOP ----------

function sayMaybe() {
  noCount++;

  fadeContent();

  if (noCount === 1) {
    text.innerText =
      "Hmmm? What do you mean?\nI can’t stop thinking about you.";
    noBtn.innerText = "maybe?";
  }

  else if (noCount === 2) {
    text.innerText =
      "Maybe?? But I love you so muchhhh 😭💕";
    noBtn.innerText = "still thinking…";
  }

  else if (noCount >= 3) {
    text.innerText =
      "Okay okay 😌 I see how it is…\nbut that button looks tired of running.";
    noBtn.innerText = "try catching me 😏";

    noBtn.addEventListener("mouseover", dodgeNo);
  }

  gifMain.src = sadGif;
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
