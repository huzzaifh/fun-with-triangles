var angleSelect=document.querySelectorAll(".angles");
var buttonClick=document.querySelector("#button-click");
var result=document.querySelector("#answer");

buttonClick.addEventListener("click",checkAngle)

function checkAngle(){
    var addSum=addAngle(Number(angleSelect[0].value),Number(angleSelect[1].value),Number(angleSelect[2].value));

    if (addSum===180){
        result.innerText="Yes It is a triangle";
    }else{result.innerText="No It is not a triangle";}
}


function addAngle(angle1,angle2,angle3){
    var addSum=angle1+angle2+angle3;
    return addSum;

}