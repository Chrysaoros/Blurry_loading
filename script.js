const loadText = document.querySelector(".loading-text");
const background = document.querySelector(".background");

let loadPercentage = 0;
let interval = setInterval(blurring, 30);

function blurring() {
  loadPercentage++;

  if (loadPercentage > 99) {
    clearInterval(interval);
  }

  loadText.innerText = `${loadPercentage}%`;
  loadText.style.opacity = scale(loadPercentage, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(loadPercentage, 0, 100, 30, 0)}px)`;
}

// function that converts a range of numbers into another range of numbers
const scale = (num, input_min, input_max, output_min, output_max) => {
  return (
    ((num - input_min) * (output_max - output_min)) / (input_max - input_min) +
    output_min
  );
};
