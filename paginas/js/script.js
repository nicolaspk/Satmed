document.addEventListener("DOMContentLoaded", function() {
    
    let botaoTransmitir = document.querySelector("button");
    // Seleciona o campo específico de sintomas pela sua estrutura
    let inputSintomas = document.querySelector("input[aria-label='Campo para descrever os sintomas da vítima']");

    // WEB STORAGE: Verifica se a vítima já tinha um sintoma salvo antes de recarregar a página
    if (inputSintomas && localStorage.getItem("ultimoSintoma")) {
        alert("Sistema Offline: Recuperando seu último registro de triagem salvo localmente.\n\nSintoma anterior: " + localStorage.getItem("ultimoSintoma"));
        // Preenche o campo automaticamente com o dado salvo
        inputSintomas.value = localStorage.getItem("ultimoSintoma");
    }

    if (botaoTransmitir) {
        botaoTransmitir.addEventListener("click", function() {
            let campos = document.querySelectorAll("input[type='text']");
            let tudoPreenchido = true;

            for (let i = 0; i < campos.length; i++) {
                if (campos[i].value === "") {
                    tudoPreenchido = false;
                }
            }

            if (tudoPreenchido) {
                // WEB STORAGE: Salvando a informação no navegador através de chave/valor
                if (inputSintomas) {
                    localStorage.setItem("ultimoSintoma", inputSintomas.value);
                }
                alert("SINAL RECEBIDO! 🛰️\nPacote de dados e coordenadas GPS enviados via satélite para a Defesa Civil com sucesso.");
            } else {
                alert("ERRO DE TRANSMISSÃO! ⚠️\nPor favor, preencha os sintomas e informações antes de transmitir o pedido de socorro.");
            }
        });
    }
});