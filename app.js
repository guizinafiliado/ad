function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    if (!container) {
        console.error('Elemento de ID "container" não encontrado!');
        return;
    }
    
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
    <div class="cartao__conteudo">
        <div class="cartao_conteudo_pergunta">
            <h3>${categoria}</h3>
            <p>${pergunta}</p>
        </div>
        <div class="cartao_conteudo_resposta">
            <p>${resposta}</p>
        </div>
    </div>
    `;

    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }
    
    cartao.addEventListener('click', viraCartao);
    container.appendChild(cartao);
}

// Example flashcards with new questions
criaCartao('Literatura', 'Quem escreveu "Dom Casmurro"?', 'Machado de Assis');
criaCartao('Ciências', 'Qual é a fórmula química da água?', 'H₂O');
criaCartao('Matemática', 'O que é um triângulo equilátero?', 'Um triângulo com três lados iguais.');
criaCartao('Música', 'Quem compôs "Quatro Estações"?', 'Antonio Vivaldi');
criaCartao('Geografia', 'Qual é o maior deserto do mundo?', 'O Deserto do Saara');