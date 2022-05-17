const botoespresionado = document.querySelectorAll('.botao')



botoespresionado.forEach((botao) => {
    botao.addEventListener('click', () => {
        const botaoselecionado = document.querySelector('.selecionado')

        botaoselecionado.classList.remove('selecionado')

        botao.classList.add('selecionado')
    });

});


