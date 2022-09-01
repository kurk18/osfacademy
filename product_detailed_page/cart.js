let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0;
let counterDOM = document.querySelector('#cart-count');
let increaseDOM = document.querySelector('#increase');
let decreaseDOM = document.querySelector('#decrease');


counterDOM.innerHTML = counter;


increaseDOM.addEventListener("click", arttir);
decreaseDOM.addEventListener("click", azalt);

function arttir(){
    console.log(typeof(counter));
    counter += 1;
    let i = document.getElementById('sayi').innerHTML;
    let x = Number(i);
    x += 1;
    document.getElementById('sayi').innerHTML = x;
}

function azalt(){
    let i = document.getElementById('sayi').innerHTML;
    let x = Number(i);
    console.log(typeof(counter));
    if(counter != 1 && x != 1){
        counter -= 1;
        x -= 1;
        document.getElementById('sayi').innerHTML = x;
    }
}

let btnn = document.querySelector('#ad-btn');

btnn.addEventListener('click', function(){
    counter += 1;
    localStorage.setItem('counter',counter);
    document.getElementById('cart-count').innerHTML = counter;
    document.getElementById('sayi').innerHTML = '1';
})
