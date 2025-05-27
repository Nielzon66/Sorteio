function sortear() {
    const input = document.getElementById('nomes').value;
    const nomes = input.split(',').map(nome => nome.trim()).filter(nome => nome !== '');

    if (nomes.length === 0) {
        alert('Por favor, insira pelo menos um nome.');
        return;
    }

    // Embaralhar os nomes
    for (let i = nomes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nomes[i], nomes[j]] = [nomes[j], nomes[i]];
    }

    // Gerar resultado formatado como lista
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<p>🎯 Ordem sorteada:</p>';

    const ul = document.createElement('ul');
    ul
