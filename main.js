let genus = document.querySelector('#genus');
let maskulin = document.querySelector('#maskulin');
let neutral = document.querySelector('#neutral');
let feminin = document.querySelector('#feminin');
let reg = document.querySelector('#reg');
let unreg = document.querySelector('#unreg');
let verb = document.querySelector('#verb');

feminin.addEventListener('click', () => {
    genus.src = '../anim/Feminin.gif';
})

neutral.addEventListener('click', () => {
    genus.src = '../anim/Neutrum.gif';
})

maskulin.addEventListener('click', () => {
    genus.src = '../anim/Maskulin.gif';
})

reg.addEventListener('click', () => {
    verb.src = '../anim/Verb_R.gif';
})

unreg.addEventListener('click', () => {
    verb.src = '../anim/Verb_U.gif';
})

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener ('click', () => {
    const modals = document.querySelectorAll ('.modal.active')
    modals.forEach(modal => {
    closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
