function guerreiras() {
var selecionepersonagens = prompt("Escolha sua princesa guerreira: \n 1. Shera \n 2. Zoar-Feiticeira \n 3. Teela");
if (selecionepersonagens == 1) {
    location.replace("./She-ra/shera.html");
  }
  else if (selecionepersonagens == 2) {
    location.replace("./Zoar-Feiticeira/feiticeira.html");
  }
  else if (selecionepersonagens == 3) {
    location.replace("./Teela/teela.html");
  }else {
      alert("opção inválida: Digite 1, 2 ou 3");
  }
  
}

