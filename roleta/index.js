let rodar = document.querySelector('.rodar');
let girarBtn = document.querySelector('.girarBtn');
let numeroSelct = Math.ceil(Math.random() * 6)
let angulo = (360 / 8) * (numeroSelct - 1) + (360 * 5);

girarBtn.addEventListener("click", function () {
  let numeroSelct = Math.ceil(Math.random() * 7); // ✅ de 1 a 7, igual ao total de perguntas
  let angulo = (360 / 8) * (numeroSelct - 1) + (360 * 5);
  rodar.style.transform = `rotate(${angulo}deg)`;


  let acerto = document.getElementById("acerto").value;
  let erro = document.getElementById("erro").value;

  setTimeout(function () {
    window.location.href = "../quiz/index.html?valor=" + numeroSelct + "&acerto=" + acerto + "&erro=" + erro;
  }, numeroSelct + 5000);

})
function Recipiente() {
  var recipiente = document.querySelector('.Recipiente');
  recipiente.style.display = 'none';
}
