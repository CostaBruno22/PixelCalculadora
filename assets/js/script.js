var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var audioElement = document.getElementById("backgroundAudio");
var audioSource = audioContext.createMediaElementSource(audioElement);
audioSource.connect(audioContext.destination);

document.body.addEventListener("click", function () {
  audioContext.resume().then(function () {
    console.log("Áudio iniciado após interação do usuário.");
  });
  document.body.removeEventListener("click", this);
});

let radioWidth = document.getElementById("radio-width");
let radioHeight = document.getElementById("radio-height");
let width = document.getElementById("width");
let height = document.getElementById("height");

let calculateWidth = () => {
  let aspectRatio = radioWidth.value / radioHeight.value;
  width.value = parseFloat((height.value * aspectRatio).toFixed(2));
};

let calculateHeight = () => {
  let aspectRatio = radioWidth.value / radioHeight.value;
  height.value = parseFloat((width.value / aspectRatio).toFixed(2));
};

height.addEventListener("input", calculateWidth);
width.addEventListener("input", calculateHeight);
radioHeight.addEventListener("input", calculateWidth);
radioWidth.addEventListener("input", calculateHeight);
