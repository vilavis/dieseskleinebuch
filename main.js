let genus = document.querySelector('#genus');
let maskulin = document.querySelector('#maskulin');
let neutral = document.querySelector('#neutral');
let feminin = document.querySelector('#feminin');
let reg = document.querySelector('#reg');
let unreg = document.querySelector('#unreg');
let verb = document.querySelector('#verb');

feminin.addEventListener('click', () => {
    genus.src = 'anim/Feminin.gif';
})

neutral.addEventListener('click', () => {
    genus.src = 'anim/Neutrum.gif';
})

maskulin.addEventListener('click', () => {
    genus.src = 'anim/Maskulin.gif';
})

reg.addEventListener('click', () => {
    verb.src = 'anim/Maskulin.gif';
})

unreg.addEventListener('click', () => {
    verb.src = 'anim/Feminin.gif';
})