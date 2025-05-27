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

    // Mostrar a ordem sorteada
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<p>🎯 Ordem sorteada:</p>';

    nomes.forEach((nome, index) => {
        const p = document.createElement('p');
        p.textContent = `${index + 1}. ${nome}`;
        resultadoDiv.appendChild(p);
    });
}