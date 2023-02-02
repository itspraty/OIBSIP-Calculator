let  clk= 0;

let btn_inp = document.querySelectorAll(".input-button");

let inp = document.getElementById("input");
let equals = document.getElementById("equal");
let removeall = document.getElementById("removeall");
let del = document.getElementById("del");
window.onload = () => {
  inp.value = "";
};

btn_inp.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (clk == 1) {
      inp.value = "";
      clk = 0;
    }
  
    inp.value += button_class.value;
  });
});

equals.addEventListener("click", () => {
  clk = 1;
  let input_val = inp.value;
  try {
    
    let result = eval(input_val);
    
    if (Number.isInteger(result)) {
      inp.value = result;
    } else {
      inp.value = result.toFixed(2);
    }
  } catch (err) {
    
    alert("Invalid");
  }
});

removeall.addEventListener("click", () => {
  inp.value = "";
});

del.addEventListener("click", () => {
  inp.value = inp.value.substr(0, inp.value.length - 1);
});