const table = document.querySelector("table"),
  tbody = table.querySelector("tbody"),
  rows = tbody.querySelectorAll("tr");
localStorage.getItem("values");
let mesBotao = window.location.assign("?mes=JANEIRO"),
  mes;
switch (mesBotao) {
  case "JANEIRO":
    mes = 1;
    break;
  case "FEVEREIRO":
    mes = 2;
    break;
  case "MARÇO":
    mes = 3;
    break;
  case "ABRIL":
    mes = 4;
    break;
  case "MAIO":
    mes = 5;
    break;
  case "JUNHO":
    mes = 6;
    break;
  case "JULHO":
    mes = 7;
    break;
  case "AGOSTO":
    mes = 8;
    break;
  case "SETEMBRO":
    mes = 9;
    break;
  case "OUTUBRO":
    mes = 10;
    break;
  case "NOVEMBRO":
    mes = 11;
    break;
  case "DEZEMBRO":
    mes = 12;
}
console.log(mes);
