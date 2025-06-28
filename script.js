const keys = [
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ..."0123456789",
  "!", "@", "#", "&", "*", "(", ")", "[", "]", "\\", "/", "?", "|", ";", ":", '"', "'", "=", "+", "-", "Backspace", "Delete", "Space"
];

const keyboard = document.getElementById("keyboard");
const textInput = document.getElementById("textInput");
const sounds = [document.getElementById("type1"), document.getElementById("type2"), document.getElementById("type3")];

keys.forEach((key) => {
  const btn = document.createElement("div");
  btn.className = "key";
  btn.innerText = key === "Space" ? "␣" : key;
  btn.onclick = () => {
    playRandomSound();
    if (key === "Backspace") {
      textInput.value = textInput.value.slice(0, -1);
    } else if (key === "Delete") {
      textInput.value = "";
    } else if (key === "Space") {
      textInput.value += " ";
    } else {
      textInput.value += key;
    }
  };
  keyboard.appendChild(btn);
});

function playRandomSound() {
  const sound = sounds[Math.floor(Math.random() * sounds.length)];
  sound.currentTime = 0;
  sound.play();
}
