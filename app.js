// select items
const title = document.querySelectorAll(".title");
const error = document.querySelectorAll(".error");

const dayInput = document.querySelector(".input-days");
const monthInput = document.querySelector(".input-months");
const yearInput = document.querySelector(".input-years");

const button = document.querySelector(".btn");

const days = document.querySelector(".days span");
const months = document.querySelector(".months span");
const years = document.querySelector(".years span");

document.addEventListener("DOMContentLoaded", function () {
  button.addEventListener("click", function () {
    isValidDate(yearInput.value, monthInput.value, dayInput.value);
  });
});

function isValidDate(year, month, day) {
  // return to the defult
  if ((dayInput.nextElementSibling.innerHTML = "enter a valid day")) {
    dayInput.nextElementSibling.innerHTML = "";
  }

  if ((dayInput.nextElementSibling.innerHTML = "enter a valid date")) {
    dayInput.nextElementSibling.innerHTML = "";
  }

  if ((monthInput.nextElementSibling.innerHTML = "enter a valid month")) {
    monthInput.nextElementSibling.innerHTML = "";
  }

  if ((yearInput.nextElementSibling.innerHTML = "enter a valid year")) {
    yearInput.nextElementSibling.innerHTML = "";
  }

  // check if there errors
  if (!dayInput.value || dayInput.value > 31 || dayInput.value < 1) {
    dayInput.nextElementSibling.innerHTML = "enter a valid day";
    return;
  }

  if (!monthInput.value || monthInput.value > 12 || monthInput.value < 1) {
    monthInput.nextElementSibling.innerHTML = "enter a valid month";
    return;
  }

  let date = new Date();

  if (
    !yearInput.value ||
    yearInput.value > date.getFullYear() ||
    yearInput.value < 1
  ) {
    yearInput.nextElementSibling.innerHTML = "enter a valid year";
    return;
  }
  let personDate = new Date(year, month - 1, day);

  let yearsResult = date.getFullYear() - personDate.getFullYear();
  let monthsResult = date.getMonth() - personDate.getMonth();
  let daysResult = date.getDate() - personDate.getDate();

  if (
    !(personDate.getMonth() == Number(month - 1)) &&
    !(personDate.getDate() == Number(day))
  ) {
    return (dayInput.nextElementSibling.innerHTML = "enter a valid date");
  }
  if (monthsResult < 0 || (monthsResult === 0 && daysResult < 0)) {
    yearsResult--;
    monthsResult += 12;
  }

  if (daysResult < 0 && monthsResult > 0) {
    monthsResult--;
    daysResult += new Date(
      personDate.getFullYear(),
      personDate.getMonth(),
      0
    ).getDate();
  }

  startCount(years, yearsResult);
  startCount(months, monthsResult);
  startCount(days, daysResult);
}

// counter function
function startCount(el, end) {
  el.textContent = 0;
  let count = setInterval(() => {
    if (el.textContent == end) {
      return clearInterval(count);
    }
    el.textContent++;
  }, 30);
}
