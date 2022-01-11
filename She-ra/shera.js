function selecioneFases() {
    // alert ("Selecione o número correspondente a fase desejada");
    let fases = prompt("Selecione o número correspondente a fase desejada: \n 1.fase1 \n 2.fase2 \n 3.fase3");
    if (fases == 1) {
        alert("VOCÊ PERDEU! She-ra caiu na armadilha de Esqueleto e não conseguiu salvar He-man.");
        location.replace("gameover.html");
    } 
    else if (fases == 2) {
        alert("VOCÊ PERDEU! She-ra caiu da torre e não conseguiu salvar He-man.");
        location.replace("gameover.html");
    }
    else if (fases == 3) {
        alert("Eh! VOCÊ VENCEU! She-ra prendeu Esqueleto e conseguiu salvar He-man.");
        location.replace("vocevenceu.html");
    }
}