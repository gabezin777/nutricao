//console.log(document.querySelector("h1"));
var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = ("gabe");

var paciente = document.querySelector("#primeiro-paciente");
var tdNome = document.querySelector(".info-nome");
var nome = tdNome.textContent;
console.log(nome);

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
console.log(peso);

var tdAltura = document.querySelector(".info-altura");
var altura = tdAltura.textContent;
console.log(altura);

var tdImc = document.querySelector(".info-imc");

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
var pesoehValido = true;
var alturaehValido = true;

if (peso < 0 || peso > 1000) {
  console.log("peso inválido"); 
  var pesoehValido = false;
  tdImc.textContent = "Peso invalido!";
}

if(altura < 0||altura > 3.00){
   console.log("Altura inválida");
    var alturaehValido = false;
    tdImc.textContent="Altura invalida!";
}

 if(alturaEhValida && pesoehValido){
   var imc = peso / (altura * altura) ;
   tdImc.textContent = imc;
 }