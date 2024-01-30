const drop = document.getElementById('drop').children;

const era = {
        drama:{
                id: drop[0]
        },
        better:{
                id: drop[1]
        },
        girls:{
                id: drop[2]
        },
        mamba:{
                id: drop[3]
        }
}

const girls = {
        home:{
                id: document.getElementById('home')
        },
        karina:{
                id: document.getElementById('karina')
        },
        winter:{
                id: document.getElementById('winter')
        },
        giselle:{
                id: document.getElementById('giselle')
        },
        ning:{
                id: document.getElementById('ning')
        }
}


console.log(drop);

//const path = '/assets/img/';

era.drama.id.addEventListener('click', () =>{
        girls.home.id.style.backgroundImage = 'url(/assets/img/drama/aespad2.jpg)';
        girls.winter.id.style.backgroundImage = 'url(/assets/img/drama/winterd2.jpg)';
        girls.karina.id.style.backgroundImage = 'url(/assets/img/drama/karinaD.jpg)';
        girls.giselle.id.style.backgroundImage = 'url(/assets/img/drama/giselled2.jpg)';
        girls.ning.id.style.backgroundImage =  'url(/assets/img/drama/ningD.jpg)';

})

era.better.id.addEventListener('click', () =>{

})

era.girls.id.addEventListener('click', ()=>{

})

era.mamba.id.addEventListener('click', ()=>{

})