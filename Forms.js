// console.log("Привет");

let text = document.getElementById('text');
console.log(text.title);

text.style.color = 'gold';
text.style.backgroundColor = 'purple';
text.innerHTML = 'New<br>string';

// document.getElementById('text').style.color = 'blue';
// let spans = document.getElementsByTagName('span');
// for (let i = 0; i < spans.length; i++) {
//     console.log(spans[i].innerHTML);
// }

let spans = document.getElementsByClassName('simple_text');

for (let i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
}

