const birthDate = document.querySelector(".birthDate");
const luckyNumber = document.querySelector(".luckyNumber");
const btnSubmit = document.querySelector(".submit");
const output = document.querySelector(".output");

function findLuckyDate(lDate, Num) {
  let sum = 0;
  for (let i = 0; i < lDate.length; i++) {
    sum += Number(lDate[i]);
  }
  if (sum % Num === 0) {
    output.innerText = "You are a lucky charm 🤩 ❕";
  } else {
    output.innerText = "As per your lucky number, you are not so lucky 🥺 ";
  }
}

btnSubmit.addEventListener("click", function () {
  const date = birthDate.value;
  const newDate = date.replaceAll("-", "");
  const lNum = luckyNumber.value;
  if (newDate === "" || lNum === "" || lNum === "0") {
    output.innerText =
      "Enter a valid date or check your entered lucky number ❗️❗️❗️";
  } else {
    findLuckyDate(newDate, lNum);
  }
});
