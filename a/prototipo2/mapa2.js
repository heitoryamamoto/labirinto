var x = 0
var y = 0
var mapa = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 3, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 4, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

var bonecoL = 7
var bonecoC = 7
var chaveL = 11
var chaveC = 10
var tirarChave
var vida = 0


//1=Parede, 2=Porta Fechada, 3=Porta2 Fechada, 4=Chave1 ,5=Boneco, 6=Chave2

window.addEventListener("keydown", function andar(event) {
    var tecla = event.keyCode

    if (tecla == "68") {
        if (mapa[bonecoL][bonecoC + 1] == 1 || mapa[bonecoL][bonecoC + 1] == 2) {
            mapa[bonecoL][bonecoC] = 4
            movimento()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[1][12]) {
            mapa[bonecoL][bonecoC] = 6
            bonecoC++
            mapa[bonecoL][bonecoC] = 4
            movimento()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[2][27] && mapa[8][28] == 2) {
            mapa[bonecoL][bonecoC] = 3
            bonecoC++
            mapa[bonecoL][bonecoC] = 4
            movimento()
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
            movimento()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[2][27] && mapa[8][28] == 2) {
            mapa[bonecoL][bonecoC] = 3
            bonecoC--
            mapa[bonecoL][bonecoC] = 4
            movimento()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[5][14]) {
            mapa[bonecoL][bonecoC] = 0
            bonecoL = 7
            bonecoC = 7
            mapa[5][13] = 7
            mapa[bonecoL][bonecoC] = 4
            movimento()
            vida++
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
        else if (mapa[bonecoL][bonecoC] == mapa[4][15]) {
            mapa[bonecoL][bonecoC] = 0
            bonecoL = 7
            bonecoC = 7
            mapa[4][14] = 7
            mapa[bonecoL][bonecoC] = 4
            movimento()
            vida++
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
        else if (mapa[bonecoL][bonecoC] == mapa[3][16]) {
            mapa[bonecoL][bonecoC] = 0
            bonecoL = 7
            bonecoC = 7
            mapa[3][15] = 7
            mapa[bonecoL][bonecoC] = 4
            movimento()
            vida++
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
        else if (mapa[bonecoL][bonecoC] == mapa[2][17]) {
            mapa[bonecoL][bonecoC] = 0
            bonecoL = 7
            bonecoC = 7
            mapa[2][16] = 7
            mapa[bonecoL][bonecoC] = 4
            movimento()
            vida++
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
            movimento()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[6][13]) {
            vida++
            mapa[bonecoL][bonecoC] = 0
            bonecoL = 7
            bonecoC = 7
            mapa[5][13] = 7
            mapa[bonecoL][bonecoC] = 4
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
        else if (mapa[bonecoL][bonecoC] == mapa[5][14]) {
            mapa[bonecoL][bonecoC] = 0
            bonecoL = 7
            bonecoC = 7
            mapa[4][14] = 7
            mapa[bonecoL][bonecoC] = 4
            movimento()
            vida++
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
        else if (mapa[bonecoL][bonecoC] == mapa[4][15]) {
            mapa[bonecoL][bonecoC] = 0
            bonecoL = 7
            bonecoC = 7
            mapa[3][15] = 7
            mapa[bonecoL][bonecoC] = 4
            movimento()
            vida++
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
        else if (mapa[bonecoL][bonecoC] == mapa[3][16]) {
            mapa[bonecoL][bonecoC] = 0
            bonecoL = 7
            bonecoC = 7
            mapa[2][16] = 7
            mapa[bonecoL][bonecoC] = 4
            movimento()
            vida++
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
        else if (mapa[bonecoL][bonecoC] == mapa[2][27] && mapa[8][28] == 2) {
            mapa[bonecoL][bonecoC] = 3
            bonecoL--
            mapa[bonecoL][bonecoC] = 4
            movimento()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[8][28] && mapa[2][27] == 0) {
            mapa[bonecoL][bonecoC] = 5
            bonecoL--
            mapa[bonecoL][bonecoC] = 4
            movimento()
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
            movimento()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[1][16]) {
            mapa[bonecoL][bonecoC] = 0
            bonecoL = 7
            bonecoC = 7
            mapa[2][16] = 7
            mapa[bonecoL][bonecoC] = 4
            movimento()
            vida++
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

        else if (mapa[bonecoL][bonecoC] == mapa[2][27] && mapa[8][28] == 2) {
            mapa[bonecoL][bonecoC] = 3
            bonecoL++
            mapa[bonecoL][bonecoC] = 4
            movimento()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[8][28] && mapa[2][27] == 0) {
            mapa[bonecoL][bonecoC] = 5
            bonecoL++
            mapa[bonecoL][bonecoC] = 4
            movimento()
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
            chavePorta1()
        }
        if (mapa[bonecoL][bonecoC] == mapa[1][12] && mapa[1][23] == 0) {
            botao1(1)

        }
        else if (mapa[bonecoL][bonecoC] == mapa[1][12] && mapa[1][23] == 1) {
            botao1(0)
        }


    }


    //TRAP SECRETA
    //if (tecla == "68" && mapa[bonecoL][bonecoC] == mapa[4][3]) {

    //trap()
    //}



})



window.onload = (function jogar() {
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

})


function movimento() {
    //0=nada,1=Parede, 2=Porta Fechada, 3=Porta2 Fechada, 4=Chave1 ,5=Boneco, 6=Chave2
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

function chavePorta1() {
    //0=nada,1=Parede, 2=Porta Fechada, 3=Porta2 Fechada, 4=Chave1 ,5=Boneco, 6=Chave2

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
                mapa[8][28] = 5
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
function chavePorta2() {

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
                mapa[11][2] = 7
            }
            if (mapa[i][j] == 3) {
                mapa[2][9] = 8
            }
            if (mapa[i][j] == 4) {
                mapa[10][10] = 0
            }
            if (mapa[i][j] == 5) {
                document.getElementById("parede").innerHTML += "<font color=#27E1C1>" + "& "
            }
            if (mapa[i][j] == 6) {
                mapa[5][8] = 0
            }
            if (mapa[i][j] == 7) {
                document.getElementById("parede").innerHTML += "<font color=lime>" + "= "
            }
            if (mapa[i][j] == 8) {
                document.getElementById("parede").innerHTML += "<font color=lime>" + "= "
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



function trap(params) {
    document.getElementById("parede").innerHTML = ""
    for (i = 0; i < 30; i++) {
        for (j = 0; j < 30; j++) {
            if (mapa[i][j] == 1) {
                mapa[4][2] = 1
                document.getElementById("parede").innerHTML += "* "
            }
            if (mapa[i][j] == 0) {
                document.getElementById("parede").innerHTML += "  "
            }
            if (mapa[i][j] == 2) {
                mapa[i][j] = x
                this.document.getElementById("porta").removeAttribute("style")
                document.getElementById("porta").style.top = 210 + "px"
                document.getElementById("porta").style.left = 37 + "px"
                document.getElementById("parede").innerHTML += "  "
            }
            if (mapa[i][j] == 5) {
                document.getElementById("parede").innerHTML += "<font color=#27E1C1>" + "& "

            }

        } document.getElementById("parede").innerHTML += "<br>"
    }
}

