function selecioneFases() {
    // alert ("Selecione o número correspondente a fase desejada");
    let fases = prompt("Selecione o número correspondente a fase desejada: \n 1.fase1 \n 2.fase2 \n 3.fase3");
    if (fases == 1) {
        alert("VOCÊ PERDEU! Teela foi atingida por Esqueleto.");
        location.replace("gameover.html");
    } 
    else if (fases == 2) {
        alert("VOCÊ PERDEU! Teela não conseguiu chegar até a torre.");
        location.replace("gameover.html");
    }
    else if (fases == 3) {
        alert("Uhu, VOCÊ VENCEU! Teela conseguiu desarmar Esqueleto, chegou a até a torre e salvou He-Man.");
        location.replace("vocevenceu.html");
    }
}