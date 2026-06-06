document.addEventListener("DOMContentLoaded", function() {

    let btnMenu = document.getElementById("btn-menu");
    let linksMenu = document.getElementById("links-menu");

    if (btnMenu && linksMenu) {
        btnMenu.addEventListener("click", function() {
            if (linksMenu.style.display === "flex") {
                linksMenu.style.display = "none";
            } else {
                linksMenu.style.display = "flex";
            }
        });
    }

    let passo1 = document.getElementById("simulacao-passo-1");
    let passo2 = document.getElementById("simulacao-passo-2");
    let passo3 = document.getElementById("simulacao-passo-3");
    let passo4 = document.getElementById("simulacao-passo-4");
    let passo5 = document.getElementById("simulacao-passo-5");

    let btnInicializar = document.getElementById("btn-inicializar");
    let btnTransmitir = document.getElementById("btn-transmitir");
    let logScanner = document.getElementById("log-scanner");
    let txtCoordenadas = document.getElementById("coordenadas-dinamicas");
    let resultadoDinamico = document.getElementById("resultado-triagem-dinamico");
    let mensagemErro = document.getElementById("mensagem-erro");

    if (btnInicializar && passo1 && passo2 && passo3) {
        btnInicializar.addEventListener("click", function() {
            passo1.classList.add("painel-oculto");
            passo2.classList.remove("painel-oculto");

            setTimeout(function() {
                logScanner.innerText = "Sinal de portadora detectado. Sincronizando relógio atômico...";
            }, 1000);

            setTimeout(function() {
                logScanner.innerText = "Calculando triangulação com 4 satélites ativos. Fixando posição...";
            }, 2200);

            setTimeout(function() {
                let latAleatoria = (-23.5505 + (Math.random() - 0.5) * 0.1).toFixed(4);
                let lonAleatoria = (-46.6333 + (Math.random() - 0.5) * 0.1).toFixed(4);
                txtCoordenadas.innerText = "LAT: " + latAleatoria + " | LON: " + lonAleatoria;

                passo2.classList.add("painel-oculto");
                passo3.classList.remove("painel-oculto");
            }, 3500);
        });
    }

    if (btnTransmitir && passo3 && passo4 && passo5) {
        btnTransmitir.addEventListener("click", function() {
            let opcoesMarcadas = document.querySelectorAll('input[name="problemas"]:checked');
            
            if (opcoesMarcadas.length === 0) {
                if (mensagemErro) {
                    mensagemErro.classList.remove("painel-oculto");
                }
                return;
            } else {
                if (mensagemErro) {
                    mensagemErro.classList.add("painel-oculto");
                }
            }

            passo3.classList.add("painel-oculto");
            passo4.classList.remove("painel-oculto");

            setTimeout(function() {
                let gravidadeMaxima = "estavel";
                let possuiTrauma = false;
                let possuiRespiratorio = false;
                let possuiUrgente = false;
                let possuiIsolamento = false;

                opcoesMarcadas.forEach(function(checkbox) {
                    if (checkbox.value === "trauma") possuiTrauma = true;
                    if (checkbox.value === "respiratorio") possuiRespiratorio = true;
                    if (checkbox.value === "urgente") possuiUrgente = true;
                    if (checkbox.value === "isolamento") possuiIsolamento = true;
                });

                if (possuiTrauma || possuiRespiratorio) {
                    gravidadeMaxima = "critico";
                } else if (possuiUrgente || possuiIsolamento) {
                    gravidadeMaxima = "urgente";
                }

                let tituloClassificacao = "";
                let classeEstilo = "";
                let themeClass = ""; 
                let statusResgate = "";
                let orientacaoMedica = "";
                let tempoEstimado = "";

                if (gravidadeMaxima === "critico") {
                    tituloClassificacao = "🔴 EMERGÊNCIA CRÍTICA (RISCO VERMELHO)";
                    classeEstilo = "risco-vermelho";
                    themeClass = "theme-vermelho";
                    statusResgate = "<strong>🚨 AEROMÉDICO DESPACHADO</strong><br>O Centro de Regulação Aeroespacial interceptou o sinal da sua unidade.";
                    orientacaoMedica = "<strong>Mantenha a vítima deitada.</strong><br>Estanque sangramentos com pressão firme. Não ofereça líquidos de forma alguma.";
                    tempoEstimado = "<strong>⏱️ 12 a 18 MINUTOS</strong><br>Aeronave a caminho da zona de exclusão.";
                } else if (gravidadeMaxima === "urgente") {
                    tituloClassificacao = "🟡 PACIENTE COM URGÊNCIA (RISCO AMARELO)";
                    classeEstilo = "risco-amarelo";
                    themeClass = "theme-amarelo";
                    statusResgate = "<strong>⚠️ BUSCA TERRESTRE ATIVA</strong><br>Sua posição foi incluída na fila de extração prioritária das equipes.";
                    orientacaoMedica = "<strong>Permaneça abrigado sob estruturas rígidas.</strong><br>Evite movimentar membros com suspeita de fratura grave.";
                    tempoEstimado = "<strong>⏱️ 35 a 50 MINUTOS</strong><br>Aguarde no ponto atual de emissão do sinal.";
                } else {
                    tituloClassificacao = "🟢 CASO ESTÁVEL REGISTRADO (RISCO VERDE)";
                    classeEstilo = "risco-verde";
                    themeClass = "theme-verde";
                    statusResgate = "<strong>📡 REGISTRO PREVENTIVO</strong><br>Sinal processado pela IA orbital como situação estável e segura.";
                    orientacaoMedica = "<strong>Monitore o estado do ferido.</strong><br>Permaneça no local. Se novos sintomas surgirem, reinicie este terminal.";
                    tempoEstimado = "<strong>🔍 SUPORTE AGENDADO</strong><br>Equipes secundárias chegarão após a triagem dos casos críticos.";
                }

                resultadoDinamico.innerHTML = `
                    <div class="resultado-triagem ${classeEstilo}">
                        <h3>${tituloClassificacao}</h3>
                    </div>
                    <div class="resposta-hospital ${themeClass}">
                        <h4>Diretriz Oficial do Hospital de Campanha</h4>
                        
                        <div class="painel-resposta-cards">
                            <div class="sub-card-resposta">
                                <h5>Status do Resgate</h5>
                                <p>${statusResgate}</p>
                            </div>
                            
                            <div class="sub-card-resposta">
                                <h5>Primeiros Socorros</h5>
                                <p>${orientacaoMedica}</p>
                            </div>
                            
                            <div class="sub-card-resposta">
                                <h5>Tempo de Espera</h5>
                                <p>${tempoEstimado}</p>
                            </div>
                        </div>

                        <button type="button" class="btn-recarregar" onclick="location.reload()">Encerrar e Iniciar Nova Transmissão</button>
                    </div>
                `;

                passo4.classList.add("painel-oculto");
                passo5.classList.remove("painel-oculto");
            }, 4000);
        });
    }
});