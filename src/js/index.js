const drop = document.getElementById('drop').children;

const winter = document.getElementById('winter');

console.log(winter);

//const path = '/assets/img/';

drop[0].addEventListener('click', () =>{
        winter.style.backgroundImage = 'url(/assets/img/drama/winterd2.jpg)';
})