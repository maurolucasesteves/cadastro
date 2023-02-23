function toggleMenu1() {
  var menu1 = document.getElementById("menu1");
  var menu2 = document.getElementById("menu2");
  if (menu1.style.display === "block") {
    menu1.style.display = "none";
  } else {
    menu2.style.display = "none";
    menu1.style.display = "block";
  }
  setTimeout(function() {
    menu1.style.display = "none";
  }, 5000);
}

function toggleMenu2() {
  var menu1 = document.getElementById("menu1");
  var menu2 = document.getElementById("menu2");
  if (menu2.style.display === "block") {
    menu2.style.display = "none";
  } else {
    menu1.style.display = "none";
    menu2.style.display = "block";
  }
  setTimeout(function() {
    menu2.style.display = "none";
  }, 5000);
}

function limpa_formulario() {
  $("#nome").val("");
  $("#telFixo").val("");
  $("#telCelular").val("");
  $("#cep").val("");
  $("#rua").val("");
  $("#numero").val("");
  $("#bairro").val("");
  $("#obs").val("");
  $("#cidade").val("");
  $("#uf").val("");
  $("#obsinterna").val("");
}

$(document).ready(function () {
  $("#telFixo").mask("(00) 0000-0000");
  $("#telCelular").mask("(00) 00000-0000");
  $("#cep").mask("00000-000");
});