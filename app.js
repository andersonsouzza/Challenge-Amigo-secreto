// app.js

// Seleção de elementos do DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Agora usamos let para a declaração do array de amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nome = inputAmigo.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }

    // Verifica se o nome já está na lista de amigos
    if (amigos.includes(nome)) {
        alert('Esse nome já foi adicionado!');
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Chama a função para exibir a lista atualizada
    exibirAmigos();

    // Limpa o campo de input para o próximo nome
    inputAmigo.value = '';
    inputAmigo.focus();
}

// Função para exibir a lista de amigos
function exibirAmigos() {
    const lista = document.getElementById('listaAmigos'); // Seleciona a lista HTML
    lista.innerHTML = ""; // Limpa a lista existente

    // Percorre o array amigos e cria um <li> para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li'); // Cria um novo elemento <li>
        li.textContent = amigos[i]; // Define o texto do <li> como o nome do amigo
        lista.appendChild(li); // Adiciona o <li> à lista HTML
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, adicione ao menos um amigo na lista!');
        return;
    }

    // Sorteia um amigo aleatório
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o resultado na tela
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}
