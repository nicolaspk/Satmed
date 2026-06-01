document.addEventListener("DOMContentLoaded", function() {
    let botaoTransmitir = document.getElementById("btn-transmitir");
    let selectSituacao = document.getElementById("situacao");
    let formTriagem = document.getElementById("form-triagem");
    let painelSimulacao = document.getElementById("painel-simulacao");

    if (botaoTransmitir) {
        botaoTransmitir.addEventListener("click", function() {
            if (selectSituacao.value !== "") {
                
                formTriagem.style.display = "none";
                painelSimulacao.style.display = "block";
                
                painelSimulacao.innerHTML = `
                    <div class="animacao-envio">
                        <p>📡 Compactando pacote de dados...</p>
                        <p>🛰️ Transmitindo via satélite D2D...</p>
                    </div>
                `;

                setTimeout(function() {
                    let corClassificacao = "";
                    let classeNivel = "";
                    let respostaMedico = "";

                    if (selectSituacao.value === "vermelho") {
                        corClassificacao = "🔴 CLASSIFICAÇÃO: RISCO VERMELHO (#001)";
                        classeNivel = "risco-vermelho";
                        respostaMedico = "O helicóptero de resgate foi despachado para suas coordenadas. Mantenha a calma, pressione o ferimento com um pano limpo e permaneça no local. Chegada estimada: 15 minutos.";
                    } else if (selectSituacao.value === "amarelo" || selectSituacao.value === "amarelo2") {
                        corClassificacao = "🟡 CLASSIFICAÇÃO: RISCO AMARELO (#002)";
                        classeNivel = "risco-amarelo";
                        respostaMedico = "Uma equipe de resgate terrestre foi acionada. Mantenha-se em local seguro e evite esforço físico. Previsão de chegada: 45 minutos.";
                    } else {
                        corClassificacao = "🟢 CLASSIFICAÇÃO: RISCO VERDE (#003)";
                        classeNivel = "risco-verde";
                        respostaMedico = "Seu sinal foi recebido. Equipes estão focadas em casos críticos no momento. Mantenha-se abrigado, beba água e aguarde novas instruções via satélite.";
                    }

                    painelSimulacao.innerHTML = `
                        <div class="resultado-triagem ${classeNivel}">
                            <h3>${corClassificacao}</h3>
                        </div>
                        <div class="resposta-hospital">
                            <h4>Resposta Recebida do Hospital Central</h4>
                            <p><strong>👨‍⚕️ Médico Regulador:</strong></p>
                            <p>${respostaMedico}</p>
                            <button type="button" class="btn-recarregar" onclick="location.reload()">Nova Transmissão</button>
                        </div>
                    `;
                }, 3500); 

            } else {
                alert("Por favor, selecione sua situação atual na lista antes de transmitir o pedido de socorro.");
            }
        });
    }
});