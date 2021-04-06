var nos = {
  nome: "Nós",
  vitorias: 0,
  derrotas: 0,
  pontos: 0
}
var eles = {
  nome: "Eles",
  vitorias: 0,
  derrotas: 0,
  pontos: 0
}
var trucado = {
  multiplicadores:{
  0: 0,
  3: 3,
  6: 6,
  9: 9,
  12: 12,}
}

function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 1) 
  return pontos
  }

var jogadores = [nos, eles]

jogadoresTela(jogadores)

function jogadoresTela(jogadores){
 var html = "" 
 for(var i = 0; i < jogadores.length; i++){
       html += "<tr><td>" + jogadores[i].nome + "</td>"
       html += "<td>" + jogadores[i].vitorias + "</td>"
       html += "<td>" + jogadores[i].derrotas + "</td>"
       html += "<td>" + jogadores[i].pontos + "</td></tr>"
        
          }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
     
}

function adicionarVitoriaNos(i){
  var jogadorNos = jogadores[0]
  jogadorNos.vitorias++
  var jogadorEles = jogadores[1]
  jogadorEles.derrotas++
  jogadorNos.pontos = calculaPontos(jogadorNos)
  jogadoresTela(jogadores)
  var resultado = jogadores[0].pontos
  if (resultado >= 12)
    alert("Vencedor: Nós") 
  }

function adicionarVitoriaEles(i){
  var jogadorEles = jogadores[1]
  jogadorEles.vitorias++
   var jogadorNos = jogadores[0]
  jogadorNos.derrotas++
  jogadorEles.pontos = calculaPontos(jogadorEles)
  jogadoresTela(jogadores)
  var resultado = jogadores[1].pontos
  if (resultado >= 12)
    alert("Vencedor: Eles") 
  }


  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""
  for (var multiplicador in trucado.multiplicadores){
    opcoesTexto += "<input type='radio' name='atributo' value='" + multiplicador + "'>" + multiplicador
  }
  opcoes.innerHTML = opcoesTexto
console.log(trucado)

/*function obtemTrucado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
} */
