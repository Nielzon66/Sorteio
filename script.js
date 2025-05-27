function sortear() {
    const input = document.getElementById('nomes').value;
    const nomes = input.split(',').map(nome => nome.trim()).filter(nome => nome !== '');

    if (nomes.length === 0) {
        alert('Matehus, Kayke, Moises, Erick');
        return;
    }

    // Embaralhar os nomes usando o algoritmo de Fisher-Yates
    for (let i = nomes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nomes[i], nomes[j]] = [nomes[j], nomes[i]];
    }

    // Gerar resultado formatado
    const resultadoFormatado = nomes.map((nome, index) => `${index + 1}. ${nome}`).join('<br>');

    document.getElementById('resultado').innerHTML = `<p>🎯 Ordem sorteada:</p> ${resultadoFormatado}`;
}
