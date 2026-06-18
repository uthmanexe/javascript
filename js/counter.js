const display = document.getElementById("display");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

let count = 0;

decrease.onclick = function () {
  count--;
  display.textContent = count;
};

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    count++;
    display.textContent = count;
  } else if (e.key === "ArrowDown") {
    count--;
    display.textContent = count;
  } else if (e.key === " ") {
    count = 0;
    display.textContent = count;
  } else if (e.key !== " " && e.key !== "ArrowUp" && e.key !== "ArrowDown") {
    window.alert(
      `Hint: Press \n"ArrowUp" to increment,\n"ArrowDown" to decrement\n"SpaceBar" to reset `,
    );
  }
});

reset.onclick = function () {
  count = 0;
  display.textContent = count;
};

increase.onclick = function () {
  count++;
  display.textContent = count;
};
