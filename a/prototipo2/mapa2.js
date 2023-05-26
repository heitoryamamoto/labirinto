//MAPA
var mapa = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 7, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 3, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 7, 0, 0, 1, 0, 3, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 7, 0, 1, 0, 1, 1, 1, 7, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 7, 7, 0, 0, 7, 1, 0, 1, 1, 7, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 1, 7, 0, 0, 1, 0, 0, 7, 0, 0, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0, 1, 1],
    [1, 0, 1, 0, 0, 0, 1, 4, 0, 1, 7, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 1, 0, 0, 7, 1, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 7, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 7, 1, 1, 1, 1, 0, 0, 7, 0, 0, 2, 0, 1, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1, 0, 7, 0, 1],
    [1, 0, 0, 7, 0, 7, 0, 1, 6, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 0, 0, 7, 1],
    [1, 7, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 7, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 7, 0, 1],
    [1, 1, 1, 0, 1, 1, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 1, 0, 0, 0, 1, 0, 0, 7, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 7, 7, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 3, 0, 1, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 6, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 2, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 0, 1, 1, 2, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

// POSICAO DO BONECO
var bonecoL = 7
var bonecoC = 7
// CONTADOR DE VIDA
var vida = 0

// EVENTO DE DESCER A TECLA
window.addEventListener("keydown", teclaBaixo)

function teclaBaixo(event) {
    //ARMAZENAR A TECLA NA VARIAVEL
    var tecla = event.keyCode
    //TECLA "D"
    if (tecla == "68") {
        // COLISAO
        if (mapa[bonecoL][bonecoC + 1] == 1 || mapa[bonecoL][bonecoC + 1] == 2) {
            colisao()
        }
        //MORTE 
        else if (mapa[bonecoL][bonecoC + 1] == 7) {
            morte()
        }
        //CHAVE NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[2][27] && mapa[8][28] == 2) {
            continuarChaveCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[12][20] && mapa[8][20] == 2) {
            continuarChaveCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[6][20] && mapa[9][11] == 2) {
            continuarChaveCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[3][20] && mapa[12][12] == 2) {
            continuarChaveCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[23][3] && mapa[26][3] == 2) {
            continuarChaveCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[23][14] && mapa[26][14] == 2) {
            continuarChaveCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[23][24] && mapa[26][24] == 2) {
            continuarChaveCMais()
        }
        // BOTAO NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[1][12]) {
            continuarBotaoCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[13][8]) {
            continuarBotaoCMais()
        }
        //PORTTA NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[9][11] && mapa[6][20] == 0) {
            continuarPortaCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[12][12] && mapa[3][20] == 0) {
            continuarPortaCMais()
        }
        //MOVIMENTO DO BONECO
        else {
            mapa[bonecoL][bonecoC] = 0
            bonecoC++
            mapa[bonecoL][bonecoC] = 4
            movimento()
        }
    }
    // TECLA "A"
    if (tecla == "65") {
        //COLISAO
        if (mapa[bonecoL][bonecoC - 1] == 1 || mapa[bonecoL][bonecoC - 1] == 2) {
            colisao()
        }
        //MORTE 
        else if (mapa[bonecoL][bonecoC - 1] == 7) {
            morte()
        }
        //CHAVE NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[2][27] && mapa[8][28] == 2) {
            continuarChaveCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[12][20] && mapa[8][20] == 2) {
            continuarChaveCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[6][20] && mapa[9][11] == 2) {
            continuarChaveCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[3][20] && mapa[12][12] == 2) {
            continuarChaveCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[23][3] && mapa[26][3] == 2) {
            continuarChaveCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[23][14] && mapa[26][14] == 2) {
            continuarChaveCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[23][24] && mapa[26][24] == 2) {
            continuarChaveCMenos()
        }
        //PORTA NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[9][11] && mapa[6][20] == 0) {
            continuarPortaCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[12][12] && mapa[3][20] == 0) {
            continuarPortaCMenos()
        }
        //BOTAO NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[25][6]) {
            continuarBotaoCMenos()
        }
        //MOVIMENTO DO BONECO
        else {
            mapa[bonecoL][bonecoC] = 0
            bonecoC--
            mapa[bonecoL][bonecoC] = 4
            movimento()
        }
    }
    //TECLA "W"
    if (tecla == "87") {
        //COLISAO
        if (mapa[bonecoL - 1][bonecoC] == 1 || mapa[bonecoL - 1][bonecoC] == 2) {
            colisao()
        }
        //MORTE
        else if (mapa[bonecoL - 1][bonecoC] == 7) {
            morte()
        }
        //CHAVE NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[2][27] && mapa[8][28] == 2) {
            continuarChaveLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[12][20] && mapa[8][20] == 2) {
            continuarChaveLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[6][20] && mapa[9][11] == 2) {
            continuarChaveLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[23][3] && mapa[26][3] == 2) {
            continuarChaveLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[23][14] && mapa[26][14] == 2) {
            continuarChaveLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[23][24] && mapa[26][24] == 2) {
            continuarChaveLMenos()
        }
        //BOTAO NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[13][8]) {
            continuarBotaoLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[25][6]) {
            continuarBotaoLMenos()
        }
        //PORTA NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[8][28] && mapa[2][27] == 0) {
            continuarPortaLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[8][20] && mapa[12][20] == 0) {
            continuarPortaLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[26][3] && mapa[23][3] == 0) {
            continuarPortaLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[26][24] && mapa[23][24] == 0) {
            continuarPortaLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[26][14] && mapa[23][14] == 0) {
            continuarPortaLMenos()
        }
        //MOVIMENTO DO BONECO
        else {
            mapa[bonecoL][bonecoC] = 0
            bonecoL--
            mapa[bonecoL][bonecoC] = 4
            movimento()
        }
    }
    //TECLA "S"
    if (tecla == "83") {
        //COLISAO
        if (mapa[bonecoL + 1][bonecoC] == 1 || mapa[bonecoL + 1][bonecoC] == 2) {
            colisao()
        }
        //MORTE
        else if (mapa[bonecoL + 1][bonecoC] == 7) {
            morte()
        }
        //CHAVE NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[2][27] && mapa[8][28] == 2) {
            continuarChaveLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[6][20] && mapa[9][11] == 2) {
            continuarChaveLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[3][20] && mapa[12][12] == 2) {
            continuarChaveLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[23][3] && mapa[26][3] == 2) {
            continuarChaveLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[23][14] && mapa[26][14] == 2) {
            continuarChaveLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[23][24] && mapa[26][24] == 2) {
            continuarChaveLMais()
        }
        //PORTA NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[8][28] && mapa[2][27] == 0) {
            continuarPortaLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[8][20] && mapa[12][20] == 0) {
            continuarPortaLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[26][3] && mapa[23][3] == 0) {
            continuarPortaLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[26][24] && mapa[23][24] == 0) {
            continuarPortaLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[26][14] && mapa[23][14] == 0) {
            continuarPortaLMais()
            window.location.replace("fase3.html")
        }
        //MOVIMENTO DO BONECO
        else {
            mapa[bonecoL][bonecoC] = 0
            bonecoL++
            mapa[bonecoL][bonecoC] = 4
            movimento()
        }
    }
    //TECLA "I"
    if (tecla == "73") {
        //ABRIR PORTA
        if (mapa[bonecoL][bonecoC] == mapa[2][27]) {
            chavePorta(8, 28)
        }
        if (mapa[bonecoL][bonecoC] == mapa[12][20]) {
            chavePorta(8, 20)
        }
        if (mapa[bonecoL][bonecoC] == mapa[6][20]) {
            chavePorta(9, 11)
        }
        if (mapa[bonecoL][bonecoC] == mapa[3][20]) {
            chavePorta(12, 12)
        }
        if (mapa[bonecoL][bonecoC] == mapa[23][3]) {
            chavePorta(26, 3)
        }
        if (mapa[bonecoL][bonecoC] == mapa[23][14]) {
            chavePorta(26, 14)
        }
        if (mapa[bonecoL][bonecoC] == mapa[23][24]) {
            chavePorta(26, 24)
        }
        //ATIVAR TRAP
        if (mapa[bonecoL][bonecoC] == mapa[25][6]) {
            trap(25, 5, 24, 6)
        }
        //DESATIVAR/ATIVAR PAREDE
        if (mapa[bonecoL][bonecoC] == mapa[1][12] && mapa[1][23] == 1) {
            botao1(0)
        }
        else if (mapa[bonecoL][bonecoC] == mapa[1][12] && mapa[1][23] == 0) {
            botao1(1)
        }
        if (mapa[bonecoL][bonecoC] == mapa[13][8] && mapa[5][19] == 1) {
            botao2(0)
        }
        else if (mapa[bonecoL][bonecoC] == mapa[13][8] && mapa[5][19] == 0) {
            botao2(1)
        }
    }
}

//CARREGAMENTO DE TELA COM O MAPA
window.onload = (function iniciarMapa() {
    movimento()
})

//ATUALIZAO DE MAPA COM AS AÇÕES 
// 0=NADA , 1=PAREDE , 2=PORTA FECHADA , 3=CHAVE , 4=BONECO , 5=PORTA ABERTA , 6=BOTÃO , 7=ESPINHO
function movimento() {
    var mapaAtualizacao = ""
    this.document.getElementById("parede").innerHTML = ""
    for (i = 0; i < 30; i++) {
        for (j = 0; j < 30; j++) {
            if (mapa[i][j] == 0) {
                mapaAtualizacao += "  "
            }
            if (mapa[i][j] == 1) {
                mapaAtualizacao += "* "
            }
            if (mapa[i][j] == 2) {
                mapaAtualizacao += '<span style="color: yellow;">D </span>';
            }
            if (mapa[i][j] == 3) {
                mapaAtualizacao += '<span style="color: deeppink;">@ </span>';
            }
            if (mapa[i][j] == 4) {
                mapaAtualizacao += '<span style="color: lime;">& </span>';
            }
            if (mapa[i][j] == 5) {
                mapaAtualizacao += '<span style="color: orange;">= </span>';
            }
            if (mapa[i][j] == 6) {
                mapaAtualizacao += '<span style="color: black;">O </span>';
            }
            if (mapa[i][j] == 7) {
                mapaAtualizacao += '<span style="color: red;"># </span>';
            }
        } mapaAtualizacao += "<br>"
    }
    document.getElementById("parede").innerHTML = mapaAtualizacao
}
// IMPRIMIR NO MAPA A PORTA
function chavePorta(i, j) {
    mapa[i][j] = 5
    this.document.getElementById("parede").innerHTML = ""
    movimento()
}

// IMPRIMIR NO MAPA A PAREDE LIGANDO/DESLIGANDO
function botao1(contagem) {
    document.getElementById("parede").innerHTML = ""
    mapa[1][23] = contagem
    mapa[6][28] = contagem
    mapa[2][24] = contagem
    mapa[3][25] = contagem
    mapa[4][26] = contagem
    mapa[5][27] = contagem
    movimento()
}

// IMPRIMIR NO MAPA A PAREDE LIGANDO/DESLIGANDO
function botao2(contagem) {
    document.getElementById("parede").innerHTML = ""
    mapa[5][19] = contagem
    mapa[5][21] = contagem
    movimento()
}
// IMPRIMIR A TRAP
function trap(i, j, k, l) {
    document.getElementById("parede").innerHTML = ""
    mapa[i][j] = 7
    mapa[k][l] = 7
    movimento()
}

// MORTE DO BONECO
function morte(params) {
    vida++
    mapa[bonecoL][bonecoC] = 0
    bonecoL = 7
    bonecoC = 7
    mapa[bonecoL][bonecoC] = 4
    mapa[25][6] = 6
    movimento()
    // CONDIÇÃO DE VIDA DO BONECO
    if (vida == 1) {
        this.document.getElementById("vida3").src = ""
    }
    else if (vida == 2) {
        this.document.getElementById("vida2").src = ""
    }
    else if (vida == 3) {
        this.document.getElementById("vida1").src = ""
        window.location.replace("gameover.html")
    }
}
// IMPRIMIR A COLISAO
function colisao() {
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
// MANTER CHAVE TECLA "D"
function continuarChaveCMais() {
    mapa[bonecoL][bonecoC] = 3
    bonecoC++
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
// MANTER CHAVE TECLA "A"
function continuarChaveCMenos() {
    mapa[bonecoL][bonecoC] = 3
    bonecoC--
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
// MANTER CHAVE TECLA "S"
function continuarChaveLMais() {
    mapa[bonecoL][bonecoC] = 3
    bonecoL++
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
// MANTER CHAVE TECLA "W"
function continuarChaveLMenos() {
    mapa[bonecoL][bonecoC] = 3
    bonecoL--
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
// MANTER BOTÃO TECLA "D"
function continuarBotaoCMais() {
    mapa[bonecoL][bonecoC] = 6
    bonecoC++
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
// MANTER BOTÃO TECLA "A"
function continuarBotaoCMenos() {
    mapa[bonecoL][bonecoC] = 6
    bonecoC--
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
// MANTER BOTÃO TECLA "W"
function continuarBotaoLMenos() {
    mapa[bonecoL][bonecoC] = 6
    bonecoL--
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
// MANTER PORTA TECLA "S"
function continuarPortaLMais() {
    mapa[bonecoL][bonecoC] = 5
    bonecoL++
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
// MANTER PORTA TECLA "W"
function continuarPortaLMenos() {
    mapa[bonecoL][bonecoC] = 5
    bonecoL--
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
// MANTER PORTA TECLA "D"
function continuarPortaCMais() {
    mapa[bonecoL][bonecoC] = 5
    bonecoC++
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
// MANTER PORTA TECLA "A"
function continuarPortaCMenos() {
    mapa[bonecoL][bonecoC] = 5
    bonecoC--
    mapa[bonecoL][bonecoC] = 4
    movimento()
}