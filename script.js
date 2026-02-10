let stage = 0;

function ask() {
  const message = document.getElementById("message");
  const sub = document.getElementById("sub");
  const buttons = document.querySelector(".buttons");

  if (stage === 0) {
    message.innerText = "Will you be my Valentine? 💖";
    sub.innerText = "";
    buttons.innerHTML = `
      <button onclick="yes()">Yes 💕</button>
      <button onclick="no()">Hmm…</button>
    `;
    stage = 1;
  }
}

function yes() {
  const message = document.getElementById("message");
  const sub = document.getElementById("sub");
  const buttons = document.querySelector(".buttons");

  message.innerText = "YAY!!! 🎉💘";
  sub.innerText = "Feb 14. You & Me. I can’t wait.";
  buttons.innerHTML = "";
  document.body.style.background =
    "linear-gradient(135deg, #fbc2eb, #a6c1ee)";
}

function no() {
  const message = document.getElementById("message");
  const sub = document.getElementById("sub");
  const buttons = document.querySelector(".buttons");

  message.innerText = "😔";
  sub.innerText = "Okay… I’ll just be here, hoping you reconsider.";
  buttons.innerHTML = `
    <button onclick="yes()">Okay fine 😌</button>
    <button onclick="no()">Still thinking…</button>
  `;
}
