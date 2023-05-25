// MAPA
var mapa = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 2, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 1, 0, 4, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 3, 0, 0, 0, 1],
    [1, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]
// POSIÇÃO DO BONECO
var bonecoL = 7
var bonecoC = 7


// CARREGAR A PÁGINA COM O MAPA
window.onload = (function iniciarMapa() {
    movimento()
})

// ADICIONANDO O EVENTO DE DESCER TECLA
window.addEventListener("keydown", andar)

// MOVIMENTO
function andar(teste) {
    var tecla = teste.keyCode

    if (tecla == "68") {
        if (mapa[bonecoL][bonecoC + 1] == 1 || mapa[bonecoL][bonecoC + 1] == 2) {
            colisao()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[10][10] && mapa[11][2] == 2) {
            manterChaveCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[5][8] && mapa[11][2] == 2) {
            manterChaveCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[11][2] && mapa[10][10] == 0) {
            manterPortaCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[2][9] && mapa[5][8] == 0) {
            manterPortaCMais()
            window.location.replace("mapa2.html")
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
            colisao()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[5][8] && mapa[2][9] == 5) {
            mapa[bonecoL][bonecoC] = 0
            bonecoC--
            mapa[bonecoL][bonecoC] = 4
            movimento()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[5][8] && mapa[2][9] == 2) {
            manterChaveCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[10][10] && mapa[11][2] == 2) {
            manterChaveCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[11][2] && mapa[10][10] == 0) {
            manterPortaCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[2][9] && mapa[5][8] == 0) {
            manterPortaCMenos()
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
            colisao()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[10][10] && mapa[11][2] == 2) {
            manterChaveLMenos()
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
            colisao()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[10][10] && mapa[11][2] == 2) {
            manterChaveLMais()
        }
        else {
            mapa[bonecoL][bonecoC] = 0
            bonecoL++
            mapa[bonecoL][bonecoC] = 4
            movimento()
        }
    }
    if (tecla == "73" && mapa[bonecoL][bonecoC] == mapa[10][10]) {
        chavePorta1()
    }
    if (tecla == "73" && mapa[bonecoL][bonecoC] == mapa[5][8]) {
        chavePorta2()
    }
}

// IMPRIMIR MOVIMENTO
function movimento() {
    var mapaAtualizacao = ""
    this.document.getElementById("parede").innerHTML = ""
    for (i = 0; i < 15; i++) {
        for (j = 0; j < 15; j++) {
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
                mapaAtualizacao += '<span style="color: deeppink; text-shadow: 1px 1px 5px deeppink">@ </span>';
            }
            if (mapa[i][j] == 4) {
                mapaAtualizacao += '<span style="color: lime;text-shadow: 1px 1px 5px lime ">& </span>';
            }
            if (mapa[i][j] == 5) {
                mapaAtualizacao += '<span style="color: orange;">= </span>';
            }
        } mapaAtualizacao += "<br>"
    }
    document.getElementById("parede").innerHTML = mapaAtualizacao
}

// ABRIR PORTA 1
function chavePorta1() {
    // TROCAR PORTA FECHADA POR ABERTA
    mapa[11][2] = 5
    // IMPRIMIR MAPA
    movimento()
}
// ABRIR PORTA 2
function chavePorta2() {
    // TROCAR PORTA FECHADA POR ABERTA
    mapa[2][9] = 5
    // IMPRIMIR MAPA
    movimento()
}
function colisao(params) {
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function manterChaveCMais(params) {
    mapa[bonecoL][bonecoC] = 3
    bonecoC++
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function manterChaveCMenos(params) {
    mapa[bonecoL][bonecoC] = 3
    bonecoC--
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function manterChaveLMais(params) {
    mapa[bonecoL][bonecoC] = 3
    bonecoL++
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function manterChaveLMenos(params) {
    mapa[bonecoL][bonecoC] = 3
    bonecoL--
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function manterPortaCMais(params) {
    mapa[bonecoL][bonecoC] = 5
    bonecoC++
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function manterPortaCMenos(params) {
    mapa[bonecoL][bonecoC] = 5
    bonecoC--
    mapa[bonecoL][bonecoC] = 4
    movimento()
}