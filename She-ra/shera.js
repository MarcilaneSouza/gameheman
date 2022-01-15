function selecioneFases() {
    // alert ("Selecione o número correspondente a fase desejada");
    let fases = prompt("Selecione o número correspondente a fase desejada: \n 1º fase \n 2º fase \n 3º fase");
    if (fases == 1) {
        alert("Jogo perdido! She-ra e Ventania cairam na armadilha de Esqueleto e não conseguiram salvar He-Man.");
        location.replace("gameover.html");
    } 
    else if (fases == 2) {
        alert("VOCÊ PERDEU! She-ra Foi atingida antes de subir a torre e não conseguiu salvar He-Man.");
        location.replace("gameover.html");
    }
    else if (fases == 3) {
        alert("Eh! VOCÊ VENCEU! She-ra prendeu Esqueleto e conseguiu salvar He-Man.");
        location.replace("vocevenceu.html");
    }
}