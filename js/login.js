'use strict';

var buttonReg = document.getElementById('buttonReg');
var buttonAuth = document.getElementById('buttonAuth');
var auth = document.getElementById('auth');
var reg = document.getElementById('reg');
var block1 = document.getElementById('block1');
var block2 = document.getElementById('block2');

buttonReg.addEventListener('click', function(){
    setTimeout(block1.classList.add('go-left'), 1000);
    auth.classList.toggle('hide');
    reg.classList.toggle('hide');
    buttonReg.classList.toggle('hide');
    buttonAuth.classList.toggle('hide');
    setTimeout(block1.classList.toggle('hide'), 1000);
    block2.classList.toggle('hide');
});

buttonAuth.addEventListener('click', function(){
    block2.classList.add('go-right');
    auth.classList.toggle('hide');
    reg.classList.toggle('hide');
    buttonReg.classList.toggle('hide');
    buttonAuth.classList.toggle('hide');
    setTimeout(block2.classList.toggle('hide'), 1000);
    block1.classList.toggle('hide');
});


// buttonReg.addEventListener('click', function(){
//     setTimeout(block1.classList.add('go-left'), 1000);
//     auth.classList.toggle('hide');
//     reg.classList.toggle('hide');
//     buttonReg.classList.toggle('hide');
//     buttonAuth.classList.toggle('hide');
//     setTimeout(block1.classList.toggle('hide'), 1000);
//     block2.classList.toggle('hide');
    
// });

// buttonAuth.addEventListener('click', function(){
//     block2.classList.add('go-right');
//     auth.classList.toggle('hide');
//     reg.classList.toggle('hide');
//     buttonReg.classList.toggle('hide');
//     buttonAuth.classList.toggle('hide');
//     setTimeout(block2.classList.toggle('hide'), 1000);
//     block1.classList.toggle('hide');
// });
