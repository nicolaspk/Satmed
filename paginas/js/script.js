
document.addEventListener("DOMContentLoaded", function() {
    
    // Selecionamos o botão de transmissão (usado no index.html e contato.html)
    let botaoTransmitir = document.querySelector("button");

    // Validação básica do formulário 
    if (botaoTransmitir) {
        botaoTransmitir.addEventListener("click", function() {
            let campos = document.querySelectorAll("input[type='text']");
            let tudoPreenchido = true;

            // Laço de repetição básico para verificar se há algum campo vazio
            for (let i = 0; i < campos.length; i++) {
                if (campos[i].value === "") {
                    tudoPreenchido = false;
                }
            }

            if (tudoPreenchido) {
                alert("SINAL RECEBIDO! 🛰️\nPacote de dados e coordenadas GPS enviados via satélite para a Defesa Civil com sucesso.");
            } else {
                alert("ERRO DE TRANSMISSÃO! ⚠️\nPor favor, preencha os sintomas e informações antes de transmitir o pedido de socorro.");
            }
        });
    }
});