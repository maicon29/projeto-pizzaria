let show = true;

const conteudo = document.querySelector('.conteudo');
const toggle = conteudo.querySelector('.toggle');

 toggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    conteudo.classList.toggle('on', show);
    show = !show;
})

alert('Em processo de criação')