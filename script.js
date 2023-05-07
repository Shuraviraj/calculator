//
let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    let comp = e.target.innerHTML;
    if (comp == "=") {
      string = eval(string);
      input.value = string;
    } else if (comp == "AC") {
      string = "";
      input.value = "";
    } else if (comp == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
