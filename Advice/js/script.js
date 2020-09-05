// var h2 = document.querySelector('h2')
var button= document.querySelector('button')
button.addEventListener('click',fetchFunction)

function fetchFunction(){
fetch(`https://api.adviceslip.com/advice`)
    .then(response => response.json())
    .then(data => {
      document.querySelector('h2').innerHTML = data.slip.advice;

    console.log(data);
    })
}
