const drop = document.getElementById('drop').children;

const era = {
        drama:{
                id: drop[0]
        },
        better:{
                id: drop[1]
        },
        savage:{
                id: drop[2]
        },
        world:{
                id: drop[3]
        },
        life:{
                id: drop[4]
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


era.drama.id.addEventListener('click', () =>{
        girls.home.id.style.backgroundImage = 'url(./src/assets/img/drama/aespad2.jpg)';
        girls.winter.id.style.backgroundImage = 'url(./src/assets/img/drama/winterd2.jpg)';
        girls.karina.id.style.backgroundImage = 'url(./src/assets/img/drama/karinaD.jpg)';
        girls.giselle.id.style.backgroundImage = 'url(./src/assets/img/drama/giselled2.jpg)';
        girls.ning.id.style.backgroundImage =  'url(./src/assets/img/drama/ningd2.jpg)';

});

era.better.id.addEventListener('click', () =>{
        girls.home.id.style.backgroundImage = 'url(./src/assets/img/better/homeB.jpg)';
        girls.winter.id.style.backgroundImage = 'url(./src/assets/img/better/winterB.jpg)';
        girls.karina.id.style.backgroundImage = 'url(./src/assets/img/better/karinaB.jpg)';
        girls.giselle.id.style.backgroundImage = 'url(./src/assets/img/better/giselleB.jpg)';
        girls.ning.id.style.backgroundImage =  'url(./src/assets/img/better/ningB.jpg)';
});

era.savage.id.addEventListener('click', ()=>{
        girls.home.id.style.backgroundImage = 'url(./src/assets/img/savage/homeS3.jpg)';
        girls.winter.id.style.backgroundImage = 'url(./src/assets/img/savage/winterS3.jpg)';
        girls.karina.id.style.backgroundImage = 'url(./src/assets/img/savage/karinaS3.jpg)';
        girls.giselle.id.style.backgroundImage = 'url(./src/assets/img/savage/giselleS3.jpg)';
        girls.ning.id.style.backgroundImage =  'url(./src/assets/img/savage/ningS3.jpg)';
});

era.world.id.addEventListener('click', ()=>{
        girls.home.id.style.backgroundImage = 'url(./src/assets/img/world/homeM.jpg)';
        girls.winter.id.style.backgroundImage = 'url(./src/assets/img/world/winterM3.jpg)';
        girls.karina.id.style.backgroundImage = 'url(./src/assets/img/world/karinaM2.jpg)';
        girls.giselle.id.style.backgroundImage = 'url(./src/assets/img/world/giselleM2.jpg)';
        girls.ning.id.style.backgroundImage =  'url(./src/assets/img/world/ningM4.jpg)';
});

era.life.id.addEventListener('click', ()=>{
        girls.home.id.style.backgroundImage = 'url(./src/assets/img/life/homeL1.jpg)';
        girls.winter.id.style.backgroundImage = 'url(./src/assets/img/life/winterL2.jpg)';
        girls.karina.id.style.backgroundImage = 'url(./src/assets/img/life/karinaL.jpg)';
        girls.giselle.id.style.backgroundImage = 'url(./src/assets/img/life/giselleL2.jpg)';
        girls.ning.id.style.backgroundImage =  'url(./src/assets/img/life/ningL2.jpg)';
});