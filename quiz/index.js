document.addEventListener("DOMContentLoaded", function () {

  if (typeof window.indexQuest === "undefined") {
    window.indexQuest = 0;
  }

  const questoes = [
    {
      questao: "Qual é o valor de 2³ ",
      resposta: [
        { texto: "6", correta: false },
        { texto: "8", correta: true },
        { texto: "12", correta: false },
        { texto: "4", correta: false }
      ]
    },
    {
      questao: "Que tipo de função é f(x)= 2x-5.",
      resposta: [
        { texto: "Linear", correta: true },
        { texto: "Quadrática", correta: false },
        { texto: "Cúbica", correta: false },
        { texto: "Exponencial", correta: false }
      ]
    },
    {
      questao: 'Qual é a base do logaritmo em log_2(8) = 3?"',
      resposta: [
        { texto: '2', correta: true },
        { texto: '8', correta: false },
        { texto: '3', correta: false },
        { texto: "4", correta: false }
      ]
    },
    {
      questao: 'Qual é o limite de f(x) = 3x + 2 quando x tende a 1?',
      resposta: [
        { texto: "5", correta: true },
        { texto: "3", correta: false },
        { texto: "4", correta: false },
        { texto: "6", correta: false }
      ]
    },
    {
      questao: 'Qual é o limite de f(x) = sin(x)/x quando x tende a infty?',
      resposta: [
        { texto: "0", correta: true },
        { texto: "1", correta: false },
        { texto: "infinity", correta: false },
        { texto: "-1", correta: false }
      ]
    },
    {
      questao: 'Qual é a integral de f(x) = x?',
      resposta: [
        { texto: 'x^2/2', correta: true },
        { texto: 'x^3/3', correta: false },
        { texto: 'x', correta: false },
        { texto: '1/x', correta: false }
      ]
    },
    {
      questao: 'Qual tipo de função é usada para modelar o crescimento exponencial de dados?',
      resposta: [
        { texto: 'Logarítmica ', correta: false },
        { texto: 'Exponencial', correta: true },
        { texto: 'Linear', correta: false },
        { texto: 'Quadrática', correta: false }
      ]
    },
  ];

  const questoesRecip = document.querySelector(".questoesRec");
  const textoQuestoes = document.querySelector(".questao");
  const respostaRecip = document.querySelector(".respostaRec");

  function comecarJogo() {
    if (indexQuest == null || isNaN(indexQuest)) {
      indexQuest = 0;
    }
    questoesRecip.classList.remove("esconder");
    proximaQuest();
  }

  function proximaQuest() {
    resetState();

    if (questoes.length === indexQuest) {
      return finishGame();
    }

    if (indexQuest === undefined) {
      indexQuest = 0;
    }

    if (questoes[indexQuest] != undefined) {
      textoQuestoes.textContent = questoes[indexQuest].questao;
      textoQuestoes.classList.remove("esconder");
      questoes[indexQuest].resposta.forEach(resposta => {
        const novaResp = document.createElement("button");
        novaResp.classList.add("button", "resposta");
        novaResp.textContent = resposta.texto;
        if (resposta.correta) {
          novaResp.dataset.correta = resposta.correta;
        }
        respostaRecip.appendChild(novaResp);

        novaResp.addEventListener("click", selecioneResp);
      });
    }
  }

  function resetState() {
    while (respostaRecip.firstChild) {
      respostaRecip.removeChild(respostaRecip.firstChild);
    }
    document.body.removeAttribute("class");
  }

  function selecioneResp(event) {
    const clicarResp = event.target;

    let acerto = parseInt(document.getElementById("acerto").value);
    let erro = parseInt(document.getElementById("erro").value);

    if (clicarResp.dataset.correta === "true") {
      document.body.classList.add("correta");
      acerto++;
    } else {
      document.body.classList.add("incorreta");
      erro++;
    }

    document.querySelectorAll(".resposta").forEach(button => {
      button.disabled = true;
      if (button.dataset.correta === "true") {
        button.classList.add("correta");
      } else {
        button.classList.add("incorreta");
      }
    });

    setTimeout(function () {
      window.location.href = "../roleta/index.html?acerto=" + acerto + "&erro=" + erro;
    }, 3000);
  }

  function finishGame() {
    const acerto = document.getElementById("acerto").value;
    const erro = document.getElementById("erro").value;

    const totalQuestions = parseInt(acerto) + parseInt(erro);

    questoesRecip.innerHTML = `
      <p class="mensagem-final">
        Você acertou ${acerto} de ${totalQuestions} questões!
      </p>
      <button onclick="returnToFolder()" class="button">
        Girar novamente
      </button>
    `;

    questoesRecip.classList.remove("esconder");
  }

  function returnToFolder() {
    window.location.href = "../roleta/index.html";
  }

  window.comecarJogo = comecarJogo;

});