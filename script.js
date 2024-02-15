//Complete the given scaffold to implement all the functionalities mentioned in the problem Statement.
const sentences = `The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump!`;

const inputField = document.querySelector("#input");
const btn = document.querySelector("#start-btn");
const timer = document.querySelector("#timer");
const result = document.querySelector("#result");
const TypingSpeed = document.querySelector("#speed");
const Accuracy = document.querySelector("#accuracy");
const retryBtn = document.querySelector("#retry-btn");

// to get sentence

function displaySentence() {
  const newSentence = document.querySelector("#sentence");
  newSentence.textContent = `${sentences}`;
}

//  to add action btn  to enable input field and on timer
btn.addEventListener("click", () => {
  displaySentence();
  inputField.disabled=false;
  btn.disable=true;

  let second = 30;
  timer.textContent = `${second}`;

  const newtimer = setInterval(function () {
    second--;
    timer.textContent = `${second}`;

    if (second <= 0) {
      clearInterval(newtimer);
      showResult();
    }
  }, 1000);
});
//to calculate the typing speed

function calculateSpeed(typesWord, timeInSeconds) {
  const typingSpeed = (typesWord / timeInSeconds) * 60;
  return typingSpeed.toFixed(2);
}

// to calculate accuracy
function calculateAccuracy(correctChar, totalChar) {
  const accuracyPercentage = (correctChar / totalChar) * 100;
  return accuracyPercentage.toFixed(2);
}


// to set the result

function showResult(){
  result.style.display = "block";
  const typesWord = inputField.value.trim().split(/\s+/).filter(word => word !== '').length;
  const correctChar = inputField.value.trim().replace(/\s/, "").length;
  const totalChar = sentences.replace(/\s/g,"").length;

  TypingSpeed.textContent = calculateSpeed(typesWord,30);
  Accuracy.textContent = calculateAccuracy(correctChar,totalChar);
  inputField.disabled = true;
  retryBtn.style.display="block"
}
retryBtn.addEventListener("click",function () {
  btn.disabled=false;
  result.style.display = "none";
  inputField.value = " ";
  inputField.focus();
  inputField.disabled = false;
  retryBtn.style.display="none"
});
