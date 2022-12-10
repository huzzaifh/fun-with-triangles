var lengthSide=document.querySelectorAll(".length");
var buttonClick=document.querySelector("#button-click");
var result=document.querySelector("#answer");

buttonClick.addEventListener("click",calculateArea);

function calculateArea(){
    var area=calculateBoth(Number(lengthSide[0].value),Number(lengthSide[1].value));
    const totalArea=area/2;
    result.innerText="The area of Trangle is "+totalArea+" cm^2";
}

function calculateBoth(a,b){
 var area=a*b;
 return area;
}