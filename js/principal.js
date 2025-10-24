var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = ("Aparecida Nutricionista");




21/10


var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) {


   var paciente = pacientes[i];


   var tdPeso = paciente.querySelector(".info-peso");
   var peso = tdPeso.textContent;


   var tdAltura = paciente.querySelector(".info-altura");
   var altura = tdAltura.textContent;


   var tdImc = paciente.querySelector(".info-imc");


   var pesoEhValido = true;
   var alturaEhValida = true;


   if (peso <= 0 || peso >= 1000) {
       console.log("Peso inválido!");
       pesoEhValido = false;
       tdImc.textContent = "Peso inválido";
       // paciente.style.backgroundColor = "red";
       paciente.classList.add("paciente-invalido");
   }


   if (altura <= 0 || altura >= 3.00) {
       console.log("Altura inválida!");
       alturaEhValida = false;
       tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
   }


 if (alturaEhValida && pesoEhValido) {
       var imc = peso / (altura * altura);
       tdImc.textContent = imc.toFixed(2);
   }
}


// 23/10


// titulo.addEventListener() adiciona um escutador de eventos.
// PRIMEIRO MOSTRAR ESSA - DEPOIS ALTERA-LA PARA FICAR ANONIMA
titulo.addEventListener("click", mostraMensagem);
function mostraMensagem(){
   alert("Olá eu fui clicado.")
}


// funcao anonima = a de cima mas diferente
titulo.addEventListener("click", function(){
   alert("Ola eu fui clicado numa funcao anonima");
});
