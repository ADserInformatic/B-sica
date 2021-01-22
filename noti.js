let bot1 = document.getElementById('bot1');
let not1 = document.getElementById('not1');
let not2 = document.getElementById('not2');
let not3 = document.getElementById('not3');
let not4 = document.getElementById('not4');
let art1 = document.getElementById('art1');
let art2 = document.getElementById('art2');
let art3 = document.getElementById('art3');
let art4 = document.getElementById('art4');
let articulo = document.querySelector('.articulo')
let body = document.querySelector('body');
let articulos = document.querySelector('.articulos');

console.log(not1)
articulos.addEventListener('click', (e)=>{
    let boton = e.target.id;
    switch(boton){
        case 'bot1':
            not1.style.display = 'grid';
            art1.style.display = 'none';
            break
        case 'bot2':
            not2.style.display = 'grid';
            art2.style.display = 'none';
            break
        case 'bot3':
            not3.style.display = 'grid';
            art3.style.display = 'none';
            break
        case 'bot4':
            not4.style.display = 'grid';
            art4.style.display = 'none';
            break
        case 'cierro':
            not1.style.display = 'none';
            art1.style.display = 'block';
            break;
        case 'cierro1':
            not2.style.display = 'none';
            art2.style.display = 'block';
            break
        case 'cierro2':
            not3.style.display = 'none';
            art3.style.display = 'block';
            break
        case 'cierro3':
            not4.style.display = 'none';
            art4.style.display = 'block';
            break;
    }
})
