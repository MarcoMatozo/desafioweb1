document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('reservaForm');
    const infoReserva = document.getElementById('infoReserva');
    
    const salvarButton = document.getElementById('salvarButton');
    
    salvarButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Obter os valores do formulário
        const placa = form.elements['placa'].value;
        const nome = form.elements['nome'].value;
        const apartamento = form.elements['apartamento'].value;
        const bloco = form.elements['bloco'].value;
        const modelo = form.elements['modelo'].value;
        const cor = form.elements['cor'].value;
        const vaga = form.elements['vaga'].value;

        // Exibir os valores na tela
        const infoHTML = `
            <p><strong>Placa:</strong> ${placa}</p>
            <p><strong>Nome do Proprietário:</strong> ${nome}</p>
            <p><strong>Número do Apartamento:</strong> ${apartamento}</p>
            <p><strong>Bloco do Apartamento:</strong> ${bloco}</p>
            <p><strong>Modelo do Veículo:</strong> ${modelo}</p>
            <p><strong>Cor do Veículo:</strong> ${cor}</p>
            <p><strong>Número da Vaga de Estacionamento:</strong> ${vaga}</p>
        `;

        infoReserva.innerHTML = infoHTML;

        // Limpar o formulário
        form.reset();
    });
});
