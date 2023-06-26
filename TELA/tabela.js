const table = document.querySelector("table"),
  tbody = table.querySelector("tbody"),
  rows = tbody.querySelectorAll("tr");
localStorage.getItem("values");
var values;
function adicionarConta(e, t, a, o, n, l) {
  criaLinha(e, t, a, o, n, l),
    (lista = { data: e, descricao: t, entrada: a, saida: o, saldo: n }),
    adicionarRegistro(lista);
}
function criaLinha(e, t, a, o, n, l) {
  const r = document.createElement("tr"),
    d = document.createElement("td"),
    i = document.createElement("td"),
    s = document.createElement("td"),
    c = document.createElement("td"),
    m = document.createElement("td"),
    u = document.createElement("td"),
    (g.className = "botaoXmaisclaro"),
  var p = e.split("-").reverse().join("/");
  (d.textContent = p),
    (i.textContent = t),
    (s.textContent = a.toFixed(2)),
    (c.textContent = o.toFixed(2)),
    (m.textContent = n.toFixed(2)),
    u.appendChild(g),
    r.appendChild(d),
    r.appendChild(i),
    r.appendChild(s),
    r.appendChild(c),
    r.appendChild(m),
    r.appendChild(u),
    tabelaContas.appendChild(r),
    (l.textContent = saldoTotal.toFixed(2)),
    (saldoTotal += n),
    (l.textContent = saldoTotal.toFixed(2));
}
void 0 === localStorage.getItem("values") &&
  localStorage.setItem("values", JSON.stringify(new Array())),
  (window.onload = function () {
    total.textContent = saldoTotal.toFixed(2);
    var e = JSON.parse(localStorage.getItem("values"));
    null != e &&
      e
        .sort((e, t) => e.data > t.data)
        .forEach((e) => {
          criaLinha(e.data, e.descricao, e.entrada, e.saida, e.saldo, total);
        });
  }),
  (values = localStorage.getItem("values")) &&
    (valuesParsed = JSON.parse(values)),
  formConta.addEventListener("submit", (e) => {
    e.preventDefault();
    var t = e.target.elements.data.value,
      a = e.target.elements.descricao.value,
      o = parseFloat(e.target.elements.entrada.value),
      n = parseFloat(e.target.elements.saida.value),
      e = o - n;
    adicionarConta(t, a, o, n, e, e), formConta.reset();
    saldoTotal += saldo;
    total.textContent = saldoTotal.toFixed(2);
  }),
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
