var x = 0
var y = 0
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
    [1, 0, 7, 1, 1, 1, 1, 0, 0, 7, 0, 0, 2, 0, 1, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 7, 0, 7, 0, 1, 6, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 7, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 7, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
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

var bonecoL = 23
var bonecoC = 5
var chaveL = 11
var chaveC = 10
var vida = 0


window.addEventListener("keydown", teclaBaixo)

function teclaBaixo(event) {
    var tecla = event.keyCode
    if (tecla == "68") {
        if (mapa[bonecoL][bonecoC + 1] == 1 || mapa[bonecoL][bonecoC + 1] == 2) {
            mapa[bonecoL][bonecoC] = 4
        }
        else if (mapa[bonecoL][bonecoC + 1] == 7) {
            morte()
        }
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
        else if (mapa[bonecoL][bonecoC] == mapa[1][12]) {
            continuarBotaoCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[13][8]) {
            continuarBotaoCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[9][11] && mapa[6][20] == 0) {
            continuarPortaCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[12][12] && mapa[3][20] == 0) {
            continuarPortaCMais()
        }
        else {
            mapa[bonecoL][bonecoC] = 0
            bonecoC++
            mapa[bonecoL][bonecoC] = 4
            movimento()
        }
    }
    if (tecla == "65") {
        if (mapa[bonecoL][bonecoC - 1] == 1 || mapa[bonecoL][bonecoC - 1] == 2) {
            mapa[bonecoL][bonecoC] = 4
        }
        else if (mapa[bonecoL][bonecoC - 1] == 7) {
            morte()
        }
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
        else if (mapa[bonecoL][bonecoC] == mapa[9][11] && mapa[6][20] == 0) {
            continuarPortaCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[12][12] && mapa[3][20] == 0) {
            continuarPortaCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[25][6]) {
            continuarBotaoCMenos()
        }
        else {

            mapa[bonecoL][bonecoC] = 0
            bonecoC--
            mapa[bonecoL][bonecoC] = 4
            movimento()
        }
    }

    if (tecla == "87") {
        if (mapa[bonecoL - 1][bonecoC] == 1 || mapa[bonecoL - 1][bonecoC] == 2) {
            mapa[bonecoL][bonecoC] = 4

        }
        else if (mapa[bonecoL - 1][bonecoC] == 7) {
            morte()
        }
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
        else if (mapa[bonecoL][bonecoC] == mapa[13][8]) {
            continuarBotaoLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[25][6]) {
            continuarBotaoLMenos()
        }
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
        else {
            mapa[bonecoL][bonecoC] = 0
            bonecoL--
            mapa[bonecoL][bonecoC] = 4
            movimento()
        }
    }
    if (tecla == "83") {
        if (mapa[bonecoL + 1][bonecoC] == 1 || mapa[bonecoL + 1][bonecoC] == 2) {
            mapa[bonecoL][bonecoC] = 4

        }
        else if (mapa[bonecoL + 1][bonecoC] == 7) {
            morte()
        }
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
            window.location.replace("mapa3.html")
        }
        else {
            mapa[bonecoL][bonecoC] = 0
            bonecoL++
            mapa[bonecoL][bonecoC] = 4
            movimento()
        }

    }
    if (tecla == "73") {
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
        if (mapa[bonecoL][bonecoC] == mapa[25][6]) {
            trap(25, 5, 24, 6)
        }
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

window.onload = (function iniciarMapa() {
    //0=nada,1=Parede, 2=Porta Fechada, 3=Porta2 Fechada, 4=Chave1 ,5=Boneco, 6=Chave2
    for (i = 0; i < 30; i++) {
        for (j = 0; j < 30; j++) {
            if (mapa[i][j] == 0) {
                document.getElementById("parede").innerHTML += "  "
            }
            if (mapa[i][j] == 1) {
                document.getElementById("parede").innerHTML += "* "
            }
            if (mapa[i][j] == 2) {
                document.getElementById("parede").innerHTML += '<span style="color: yellow;">D </span>';
            }
            if (mapa[i][j] == 3) {
                document.getElementById("parede").innerHTML += '<span style="color: deeppink;">@ </span>';
            }
            if (mapa[i][j] == 4) {
                document.getElementById("parede").innerHTML += '<span style="color: lime;">& </span>';
            }
            if (mapa[i][j] == 5) {
                document.getElementById("parede").innerHTML += '<span style="color: orange;">= </span>';
            }
            if (mapa[i][j] == 6) {
                document.getElementById("parede").innerHTML += '<span style="color: black;">O </span>';
            }
            if (mapa[i][j] == 7) {
                document.getElementById("parede").innerHTML += '<span style="color: red;"># </span>';
            }
        } document.getElementById("parede").innerHTML += "<br>"
    }
})


function movimento() {
    var paredeAtualizacao = ""
    //0=nada,1=Parede, 2=Porta Fechada, 3=Porta2 Fechada, 4=Chave1 ,5=Boneco, 6=Chave2
    this.document.getElementById("parede").innerHTML = ""
    for (i = 0; i < 30; i++) {
        for (j = 0; j < 30; j++) {
            if (mapa[i][j] == 0) {
                paredeAtualizacao += "  "
            }
            if (mapa[i][j] == 1) {
                paredeAtualizacao += "* "
            }
            if (mapa[i][j] == 2) {
                paredeAtualizacao += '<span style="color: yellow;">D </span>';
            }
            if (mapa[i][j] == 3) {
                paredeAtualizacao += '<span style="color: deeppink;">@ </span>';
            }
            if (mapa[i][j] == 4) {
                paredeAtualizacao += '<span style="color: lime;">& </span>';
            }
            if (mapa[i][j] == 5) {
                paredeAtualizacao += '<span style="color: orange;">= </span>';
            }
            if (mapa[i][j] == 6) {
                paredeAtualizacao += '<span style="color: black;">O </span>';
            }
            if (mapa[i][j] == 7) {
                paredeAtualizacao += '<span style="color: red;"># </span>';
            }
        } paredeAtualizacao += "<br>"
    }
    document.getElementById("parede").innerHTML = paredeAtualizacao
}

function chavePorta(i, j) {
    mapa[i][j] = 5
    this.document.getElementById("parede").innerHTML = ""
    for (i = 0; i < 30; i++) {
        for (j = 0; j < 30; j++) {
            if (mapa[i][j] == 0) {
                document.getElementById("parede").innerHTML += "  "
            }
            if (mapa[i][j] == 1) {
                document.getElementById("parede").innerHTML += "* "
            }
            if (mapa[i][j] == 2) {
                document.getElementById("parede").innerHTML += "<font color=yellow>" + "D "
            }
            if (mapa[i][j] == 3) {
                document.getElementById("parede").innerHTML += "<font color=deeppink>" + "@ "
            }
            if (mapa[i][j] == 4) {
                document.getElementById("parede").innerHTML += "<font color=lime>" + "& "
            }
            if (mapa[i][j] == 5) {
                document.getElementById("parede").innerHTML += "<font color=orange>" + "= "
            }
            if (mapa[i][j] == 6) {
                document.getElementById("parede").innerHTML += "<font color=black>" + "O "
            }
            if (mapa[i][j] == 7) {
                document.getElementById("parede").innerHTML += "<font color=red>" + "# "
            }
        } document.getElementById("parede").innerHTML += "<br>"

    }
}

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
function botao2(contagem) {
    document.getElementById("parede").innerHTML = ""
    mapa[5][19] = contagem
    mapa[5][21] = contagem
    movimento()
}
function trap(i, j, k, l) {
    document.getElementById("parede").innerHTML = ""
    mapa[i][j] = 7
    mapa[k][l] = 7
    movimento()
}
function morte(params) {
    vida++
    mapa[bonecoL][bonecoC] = 0
    bonecoL = 7
    bonecoC = 7
    mapa[bonecoL][bonecoC] = 4
    mapa[25][6] = 6
    movimento()
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

function continuarChaveCMais() {
    mapa[bonecoL][bonecoC] = 3
    bonecoC++
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function continuarChaveCMenos() {
    mapa[bonecoL][bonecoC] = 3
    bonecoC--
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function continuarChaveLMais() {
    mapa[bonecoL][bonecoC] = 3
    bonecoL++
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function continuarChaveLMenos() {
    mapa[bonecoL][bonecoC] = 3
    bonecoL--
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function continuarBotaoCMais() {
    mapa[bonecoL][bonecoC] = 6
    bonecoC++
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function continuarBotaoCMenos() {
    mapa[bonecoL][bonecoC] = 6
    bonecoC--
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function continuarBotaoLMenos() {
    mapa[bonecoL][bonecoC] = 6
    bonecoL--
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function continuarBotaoLMenos() {
    mapa[bonecoL][bonecoC] = 6
    bonecoL++
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function continuarPortaLMais() {
    mapa[bonecoL][bonecoC] = 5
    bonecoL++
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function continuarPortaLMenos() {
    mapa[bonecoL][bonecoC] = 5
    bonecoL--
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function continuarPortaCMais() {
    mapa[bonecoL][bonecoC] = 5
    bonecoC++
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function continuarPortaCMenos() {
    mapa[bonecoL][bonecoC] = 5
    bonecoC--
    mapa[bonecoL][bonecoC] = 4
    movimento()
}