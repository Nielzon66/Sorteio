function sortear() {
    const input = document.getElementById('nomes').value;
    const nomes = input.split(',').map(nome => nome.trim()).filter(nome => nome !== '');

    if (nomes.length === 0) {
        alert('Por favor, insira pelo menos um nome.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indiceSorteado];

    document.getElementById('resultado').innerText = `🎉 Nome sorteado: ${nomeSorteado}`;
}
