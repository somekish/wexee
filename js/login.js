'use strict';

let buttonReg = document.getElementById('buttonReg');
let buttonAuth = document.getElementById('buttonAuth');
let auth = document.getElementById('auth');
let reg = document.getElementById('reg');
let block1 = document.getElementById('block1');

buttonReg.addEventListener('click', function(){  
    auth.classList.toggle('hide');
    buttonReg.classList.toggle('hide');
    block1.classList.add('go-right');
    setTimeout(function(){
        reg.classList.toggle('hide');
        buttonAuth.classList.toggle('hide');
    }, 600);
    block1.classList.remove('go-left');
});

buttonAuth.addEventListener('click', function(){  
    debugger
    reg.classList.toggle('hide');
    buttonAuth.classList.toggle('hide');
    block1.classList.add('go-left');
    setTimeout(function(){
        auth.classList.toggle('hide');
        buttonReg.classList.toggle('hide');
    }, 750);
    block1.classList.remove('go-right');
});








