
var clickCount = 0; 

var motivateButton = document.getElementById("motivateButton");

motivateButton.addEventListener("click", sendMotivation);

function sendMotivation(){
  clickCount += 1;
  if (clickCount == 1){
    sendMotivation1(); 
  }
  if (clickCount == 2){
    sendMotivation2(); 
  }
  if (clickCount == 3){
    sendMotivation3();
    resetClickCount();
  }
}

function sendMotivation1(){
  alert("300 Million tons of plastic gets created yearly, and this weighs the same as the entire human population, and 50% is single-use only.");
}

function sendMotivation2(){
  alert("70% of our debris sinks into the ocean's ecosystem, 15% floats, and 15% lands on our beaches.");   
}

function sendMotivation3(){
  alert("Oil spills are vastly dangerous to the oceans, but only 12% come from actual spills – the rest leaks in from drains and rivers.");
}

function resetClickCount(){
  clickCount = 0; 
}
