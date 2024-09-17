// Adiciona uma nova linha à tabela com nome e idade
document.getElementById('addRowBtn').addEventListener('click', function() {
    const table = document.getElementById('infoTable');
    const newRow = table.insertRow();
    
    // Adiciona células à nova linha
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    
    cell1.textContent = 'João';
    cell2.textContent = 25;
});

// Atualiza o conteúdo da div e adiciona um novo parágrafo
document.getElementById('updateContentBtn').addEventListener('click', function() {
    const contentDiv = document.getElementById('content');
    
    // Modifica o texto do cabeçalho h2
    const header = contentDiv.querySelector('h2');
    header.textContent = 'Conteúdo Atualizado';
    
    // Adiciona um novo parágrafo abaixo do cabeçalho
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Este é um novo parágrafo adicionado abaixo do cabeçalho.';
    contentDiv.insertBefore(newParagraph, header.nextSibling);
});


// Muda a cor do link ao passar o mouse sobre ele
const myLink = document.getElementById('myLink');

myLink.addEventListener('mouseover', function() {
    myLink.style.color = 'red'; // Muda a cor para vermelho
});

myLink.addEventListener('mouseout', function() {
    myLink.style.color = 'blue'; // Volta à cor azul original
});


// Cria e adiciona uma nova div à div existente com o texto especificado
document.getElementById('addDivBtn').addEventListener('click', function() {
    const newDiv = document.createElement('div');
    newDiv.id = 'newDiv';
    newDiv.textContent = 'Este é um novo bloco de conteúdo.';
    
    // Adiciona a nova div dentro da div content
    document.getElementById('content').appendChild(newDiv);
});


// Remove o parágrafo original da div content
document.getElementById('removeParagraphBtn').addEventListener('click', function() {
    const paragraph = document.querySelector('#content p');
    
    if (paragraph) {
        paragraph.remove();
    } else {
        alert('O parágrafo já foi removido.');
    }
});
