let fem = document.querySelector('fem');
let feminine = document.querySelector('feminine');
let neutral = document.querySelector('neutral');

var animation = bodymovin.loadAnimation({
    container: document.getElementById('fem'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'anim/fem.json'
})

var animation = bodymovin.loadAnimation({
    container: document.getElementById('lernen'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'anim/lernen.json'
})