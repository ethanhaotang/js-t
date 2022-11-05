console.log("h");

const button = document.querySelector("#button");

button.addEventListener("click", function () {
  const heightInput = document.querySelector("#height-input").value;
  const weightInput = document.querySelector("#weight-input").value;
  //弹窗提醒如果input是空值
  if (heightInput === "" || weightInput === "") {
    alert("enter value");
  } else {
    const heightValue = Number.parseInt(heightInput);
    const weightValue = Number.parseInt(weightInput);

   

    const bmi = weightValue / (heightValue * heightValue);
    const bmiString=bmi.toFixed(2)
    console.log(`you bmi is ${bmi}`);
  

const resultNode=document.querySelector("#result")
resultNode.innerHTML= `you bmi is ${bmiString}`

  // console.log('clicked');
  // console.log('height',heightValue);
  // console.log('weight',weightValue);
}});
