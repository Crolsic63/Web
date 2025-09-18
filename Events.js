let count = 0;


function onClickButton(element) {
    // alert("Вы нажали на кнопку!");
    count++;
    element.innerHTML = "Вы нажали на кнопку = " + count;
    console.log(element.name);
    element.style.background = "red";
    element.style.color = "green";
    element.style.cssText = "font-size: 20px";
}

function onMouseOver(element) {
    if(element.value == "Hello"){
        alert("Тебе тоже привет");
    }
    console.log(element.value);
}