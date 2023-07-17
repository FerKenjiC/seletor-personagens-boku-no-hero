const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('click', () => {

        if(window.innerWidth < 910) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        removerSelecaoDePersonagem();
        personagem.classList.add('selecionado');
        alterarImagemDoPersonagemSelecionado(personagem);
        alterarNomeDoPersonagemSelecionado(personagem);
        alterarDescricaoDoPersonagem(personagem);
    });
});

function alterarDescricaoDoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomeDoPersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemDoPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/uniforme/${idPersonagem}.webp`;
}

function removerSelecaoDePersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
