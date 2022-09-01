let favcountDOM = document.querySelector('#fav-count');
let favcount = localStorage.getItem('favcount') ? Number(localStorage.getItem('favcount')) : 0;

favcountDOM.innerHTML = favcount;

function arttirplus(){
    console.log(typeof(counter));
    counter += 1;
    localStorage.setItem('counter',counter);
    document.getElementById('cart-count').innerHTML = counter;
};

function arttirheart(){
    console.log(typeof(favcount));
    favcount += 1;
    localStorage.setItem('favcount',favcount);
    document.getElementById('fav-count').innerHTML = favcount;
};