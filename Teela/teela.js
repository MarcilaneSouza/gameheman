function selecioneFases() {
    // alert ("Selecione o número correspondente a fase desejada");
    let fases = prompt("Selecione o número correspondente a fase desejada: \n 1º fase \n 2º fase \n 3º fase");
    if (fases == 1) {
        alert("Não foi desta vez! Teela por teimosia e por não reconhecer sua arrogância, foi atingida por Esqueleto.");
        location.replace("gameover.html");
    } 
    else if (fases == 2) {
        alert("Infelizmente, você perdeu! Teela não conseguiu chegar até a torre, pois mais uma vez agiu sem pensar no perigo.");
        location.replace("gameover.html");
    }
    else if (fases == 3) {
        alert("Uhu, VOCÊ VENCEU! Teela agiu com humildade e conseguiu desarmar Esqueleto, chegou até a torre e salvou He-Man.");
        location.replace("vocevenceu.html");
    }
}