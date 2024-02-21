

function setInnerTextById(elementId,value){
    const elementValue = document.getElementById(elementId);
    elementValue.innerText = value;
 }  
function getInnerTextById( elementId){
    const elementValue = document.getElementById(elementId);
    const elementInnerText = elementValue.innerText;
    return elementInnerText;
}

function getTextAndConvertParseIntElementById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const  value = parseInt(elementValueText);
    return value}