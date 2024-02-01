velha = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

jogada = 0; //Quantidade de jogadas realizadas
maxJogadas = 9; //número máximo de jogadas
quemJoga = 1; // representa o jogador1 ou jogador2
venceu = false; //variável de controle de vitória

function jogar() {
  linha = document.getElementById("linha").value;
  coluna = document.getElementById("coluna").value;
  if (jogada < maxJogadas && venceu == false) {
    if (velha[linha][coluna] == "") {
      if (quemJoga == 1) {
        velha[linha][coluna] = "X";
        quemJoga = 2;
      } else {
        velha[linha][coluna] = "O";
        quemJoga = 1;
      }
      jogada++;
    } else {
      alert("Linha e/ou Coluna inválidas");
    }
    tela();
    venceu = verificar();
  }
  if (venceu) {
    btnJogar = document.getElementById("btnJogar");
    btnJogar.classList.add("d-none");
    btnReiniciar = document.getElementById("btnReiniciar");
    btnReiniciar.classList.remove("d-none");
  }
}

function tela() {
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      celula = document.getElementById("l" + i + "c" + j);
      celula.value = velha[i][j];
    }
  }
}

function verificar() {
  vitoria = false;
  simbolos = ["X", "O"];

  for (i = 0; i < 2; i++) {
    //verifiar vitória em linhas
    vitoria = false;
    l = c = 0;
    for (l = 0; l < 3; l++) {
      //percorrer as linhas
      soma = 0; //contar quantidade de simbolos iguais em uma linha
      c = 0; // inicialização de variavel

      for (c = 0; c < 3; c++) {
        //percorrer as colunas
        if (velha[l][c] == simbolos[i]) {
          soma++;
        }
        
      }
      //verificar se o jogador ganhou
      if (soma == 3) {
        vitoria = true;
        break; //para o 1° while (linhas)
      }
  
    }
    //confirmar a vitoria
    if (vitoria) {
      alert("O jogador " + simbolos[i] + " ganhou!");
      break; //para o for
    }
    //verificar vitoria coluna
    l = c = 0;
    for (c = 0; c < 3; c++){
      soma = 0;
      
      for (l = 0; l < 3; l++) {
        if (velha[l][c] == simbolos[i]) {
          soma++;
        }
      }if(soma == 3){
        vitoria = true;
        break;
      }
    
    }if (vitoria){
      alert("O jogador " + simbolos[i] + " ganhou!");
      break;
    }

    //verificar vitória diagonal 1
    soma = 0;
    for (idiag = 0; idiag < 3; idiag++){
      if (velha[idiag][idiag] == simbolos[i])
      soma++;
    }if(soma == 3){
      alert("O jogador " + simbolos[i] + " ganhou!");
      vitoria = true;
      break;
    }
    //verificar vitória diagonal 2
    soma = 0;
    idiagl = 0;
    

    for (idiagc = 2; idiagc >= 0; idiagc--){
      if(velha[idiagl][idiagc] == simbolos[i])
      soma++;
    idiagl++;
    
    }if (soma == 3){
      alert("O jogador " + simbolos[i] + " ganhou!");
      vitoria = true;
      break;
    }
  }

  return vitoria; //retorna o valor da váriavel vitoria
}

function reiniciar(){
  location.reload(true);
}
