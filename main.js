let genus = document.querySelector('#genus');
let maskulin = document.querySelector('#maskulin');
let neutral = document.querySelector('#neutral');
let feminin = document.querySelector('#feminin');

feminin.addEventListener('click', () => {
    genus.src = 'anim/Feminin.gif';
})

neutral.addEventListener('click', () => {
    genus.src = 'anim/Neutrum.gif';
})

var animation = bodymovin.loadAnimation({
    container: document.getElementById('lernen'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'anim/lernen.json'
})