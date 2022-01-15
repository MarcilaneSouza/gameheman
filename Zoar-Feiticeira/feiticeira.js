function selecioneFases() {
    // alert ("Selecione o número correspondente a fase desejada");
    let fases = prompt("Selecione o número correspondente a fase desejada : \n 1º fase \n 2º fase \n 3º fase");
    if (fases == 1) {
        alert("Não foi desta vez! Feiticeira foi presa por Esqueleto e não conseguiu salvar He-man.");
        location.replace("gameover.html");
    } 
    else if (fases == 2) {
        alert("VOCÊ PERDEU! Feiticeira perdeu sua magia perdendo a chance de salvar He-man.");
        location.replace("gameover.html");
    }
    else if (fases == 3) {
        alert("Parabéns! VOCÊ VENCEU! Feiticeira conseguiu sua magia de volta e derrotou Esqueleto, salvando He-man.");
        location.replace("vocevenceu.html");
    }
}