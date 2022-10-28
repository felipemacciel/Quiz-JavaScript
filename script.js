let button = document.getElementById('read_button');

button.addEventListener('click', function() {
    let card = document.querySelector ('.answer');
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        return button.textContent = 'Voltar';
    }

    button.textContent = 'Veja a resposta!';
});

