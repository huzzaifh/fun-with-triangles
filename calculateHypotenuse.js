var lengthSide=document.querySelectorAll(".length");
var buttonClick=document.querySelector("#button-click");
var result=document.querySelector("#answer");

buttonClick.addEventListener("click",calculateHypotenuse);

function calculateHypotenuse(){
    var sum=calculateSum(Number(lengthSide[0].value),Number(lengthSide[1].value));
    const sqrt=Math.sqrt(sum);
    result.innerText="The length of hypotenuse is "+sqrt;
}

function calculateSum(a,b){
 var sum=a*a + b*b;
 return sum;
}