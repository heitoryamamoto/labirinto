var x = 0
var y = 0
var mapa = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 11, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 5, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 2, 1],
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
        if (mapa[bonecoL][bonecoC + 1] == 1 || mapa[bonecoL][bonecoC + 1] == 2 || mapa[bonecoL][bonecoC + 1] == 3) {
            mapa[bonecoL][bonecoC] = 5
            movimento()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[1][12]) {
            mapa[bonecoL][bonecoC] = 10
            bonecoC++
            mapa[bonecoL][bonecoC] = 5
            movimento()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[2][27] && mapa[8][28] == 2) {
            mapa[bonecoL][bonecoC] = 11
            bonecoC++
            mapa[bonecoL][bonecoC] = 5
            movimento()
        }
        else {
            mapa[bonecoL][bonecoC] = 0
            bonecoC++
            mapa[bonecoL][bonecoC] = 5
            movimento()
        }

    }
    if (tecla == "65") {
        if (mapa[bonecoL][bonecoC - 1] == 1 || mapa[bonecoL][bonecoC - 1] == 2 || mapa[bonecoL][bonecoC - 1] == 3) {
            mapa[bonecoL][bonecoC] = 5
            movimento()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[2][27] && mapa[8][28] == 2) {
            mapa[bonecoL][bonecoC] = 11
            bonecoC--
            mapa[bonecoL][bonecoC] = 5
            movimento()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[5][14]) {
            mapa[bonecoL][bonecoC] = 0
            bonecoL = 7
            bonecoC = 7
            mapa[5][13] = 9
            mapa[bonecoL][bonecoC] = 5
            movimento()
            vida++
            if (vida == 1) {
                this.document.getElementById("vida3").src = ""
            }
            else if (vida == 2) {
                this.document.getElementById("vida2").src = ""

            }
            else {
                this.document.getElementById("vida1").src = ""
            }
        }
        else if (mapa[bonecoL][bonecoC] == mapa[4][15]) {
            mapa[bonecoL][bonecoC] = 0
            bonecoL = 7
            bonecoC = 7
            mapa[4][14] = 9
            mapa[bonecoL][bonecoC] = 5
            movimento()
            vida++
            if (vida == 1) {
                this.document.getElementById("vida3").src = ""
            }
            else if (vida == 2) {
                this.document.getElementById("vida2").src = ""
            }
            else {
                this.document.getElementById("vida1").src = ""
            }
        }
        else if (mapa[bonecoL][bonecoC] == mapa[3][16]) {
            mapa[bonecoL][bonecoC] = 0
            bonecoL = 7
            bonecoC = 7
            mapa[3][15] = 9
            mapa[bonecoL][bonecoC] = 5
            movimento()
            vida++
            if (vida == 1) {
                this.document.getElementById("vida3").src = ""
            }
            else if (vida == 2) {
                this.document.getElementById("vida2").src = ""
            }
            else {
                this.document.getElementById("vida1").src = ""
            }
        }
        else if (mapa[bonecoL][bonecoC] == mapa[2][17]) {
            mapa[bonecoL][bonecoC] = 0
            bonecoL = 7
            bonecoC = 7
            mapa[2][16] = 9
            mapa[bonecoL][bonecoC] = 5
            movimento()
            vida++
            if (vida == 1) {
                this.document.getElementById("vida3").src = ""
            }
            else if (vida == 2) {
                this.document.getElementById("vida2").src = ""
            }
            else {
                this.document.getElementById("vida1").src = ""
            }
        }
        else if (mapa[bonecoL][bonecoC] == mapa[1][12]) {
            mapa[bonecoL][bonecoC] = 10
            bonecoC--
            mapa[bonecoL][bonecoC] = 5
            movimento()
            vida++
            if (vida == 1) {
                this.document.getElementById("vida3").src = ""
            }
            else if (vida == 2) {
                this.document.getElementById("vida2").src = ""
            }
            else {
                this.document.getElementById("vida1").src = ""
            }
        }
        else {
            mapa[bonecoL][bonecoC] = 0
            bonecoC--
            mapa[bonecoL][bonecoC] = 5
            movimento()
        }
    }
    if (tecla == "87") {
        if (mapa[bonecoL - 1][bonecoC] == 1 || mapa[bonecoL - 1][bonecoC] == 2 || mapa[bonecoL - 1][bonecoC] == 3) {
            mapa[bonecoL][bonecoC] = 5
            movimento()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[6][13]) {
            vida++
            mapa[bonecoL][bonecoC] = 0
            bonecoL = 7
            bonecoC = 7
            mapa[5][13] = 9
            mapa[bonecoL][bonecoC] = 5
            movimento()
            if (vida == 1) {
                this.document.getElementById("vida3").src = ""
            }
            else if (vida == 2) {
                this.document.getElementById("vida2").src = ""
            }
            else {
                this.document.getElementById("vida1").src = ""
            }
        }
        else if (mapa[bonecoL][bonecoC] == mapa[5][14]) {
            mapa[bonecoL][bonecoC] = 0
            bonecoL = 7
            bonecoC = 7
            mapa[4][14] = 9
            mapa[bonecoL][bonecoC] = 5
            movimento()
            vida++
            if (vida == 1) {
                this.document.getElementById("vida3").src = ""
            }
            else if (vida == 2) {
                this.document.getElementById("vida2").src = ""
            }
            else {
                this.document.getElementById("vida1").src = ""
            }
        }
        else if (mapa[bonecoL][bonecoC] == mapa[4][15]) {
            mapa[bonecoL][bonecoC] = 0
            bonecoL = 7
            bonecoC = 7
            mapa[3][15] = 9
            mapa[bonecoL][bonecoC] = 5
            movimento()
            vida++
            if (vida == 1) {
                this.document.getElementById("vida3").src = ""
            }
            else if (vida == 2) {
                this.document.getElementById("vida2").src = ""
            }
            else {
                this.document.getElementById("vida1").src = ""
            }
        }
        else if (mapa[bonecoL][bonecoC] == mapa[3][16]) {
            mapa[bonecoL][bonecoC] = 0
            bonecoL = 7
            bonecoC = 7
            mapa[2][16] = 9
            mapa[bonecoL][bonecoC] = 5
            movimento()
            vida++
            if (vida == 1) {
                this.document.getElementById("vida3").src = ""
            }
            else if (vida == 2) {
                this.document.getElementById("vida2").src = ""
            }
            else {
                this.document.getElementById("vida1").src = ""
            }
        }
        else if (mapa[bonecoL][bonecoC] == mapa[2][27] && mapa[8][28] == 2) {
            mapa[bonecoL][bonecoC] = 11
            bonecoL--
            mapa[bonecoL][bonecoC] = 5
            movimento()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[8][28] && mapa[2][27] == 0) {
            mapa[bonecoL][bonecoC] = 7
            bonecoL--
            mapa[bonecoL][bonecoC] = 5
            movimento()
        }
        else {
            mapa[bonecoL][bonecoC] = 0
            bonecoL--
            mapa[bonecoL][bonecoC] = 5
            movimento()
        }
    }
    if (tecla == "83") {
        if (mapa[bonecoL + 1][bonecoC] == 1 || mapa[bonecoL + 1][bonecoC] == 2 || mapa[bonecoL + 1][bonecoC] == 3) {
            mapa[bonecoL][bonecoC] = 5
            movimento()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[1][16]) {
            mapa[bonecoL][bonecoC] = 0
            bonecoL = 7
            bonecoC = 7
            mapa[2][16] = 9
            mapa[bonecoL][bonecoC] = 5
            movimento()
            vida++
            if (vida == 1) {
                this.document.getElementById("vida3").src = ""
            }
            else if (vida == 2) {
                this.document.getElementById("vida2").src = ""
            }
            else {
                this.document.getElementById("vida1").src = ""
            }
        }
        else if (mapa[bonecoL][bonecoC] == mapa[2][27] && mapa[8][28] == 2) {
            mapa[bonecoL][bonecoC] = 11
            bonecoL++
            mapa[bonecoL][bonecoC] = 5
            movimento()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[8][28] && mapa[2][27] == 0) {
            mapa[bonecoL][bonecoC] = 7
            bonecoL++
            mapa[bonecoL][bonecoC] = 5
            movimento()
        }
        else {
            mapa[bonecoL][bonecoC] = 0
            bonecoL++
            mapa[bonecoL][bonecoC] = 5
            movimento()
        }
    }
    if (tecla == "73" && mapa[bonecoL][bonecoC] == mapa[2][27]) {
        chavePorta1()
    }
    if (tecla == "73" && mapa[bonecoL][bonecoC] == mapa[1][12]) {
        botao1()
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
                document.getElementById("parede").innerHTML += "<font color=yellow>" + "D "
            }
            if (mapa[i][j] == 4) {
                document.getElementById("parede").innerHTML += "<font color=deeppink>" + "@ "
            }
            if (mapa[i][j] == 5) {
                document.getElementById("parede").innerHTML += "<font color=lime>" + "& "
            }
            if (mapa[i][j] == 6) {
                document.getElementById("parede").innerHTML += "<font color=deeppink>" + "@ "
            }
            if (mapa[i][j] == 7) {
                document.getElementById("parede").innerHTML += "<font color=orange>" + "= "
            }
            if (mapa[i][j] == 8) {
                document.getElementById("parede").innerHTML += "<font color=lorange>" + "= "
            }
            if (mapa[i][j] == 10) {
                document.getElementById("parede").innerHTML += "<font color=black>" + "O "
            }
            if (mapa[i][j] == 11) {
                document.getElementById("parede").innerHTML += "<font color=deeppink>" + "@ "
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
                document.getElementById("parede").innerHTML += "<font color=yellow>" + "D "
            }
            if (mapa[i][j] == 4) {
                document.getElementById("parede").innerHTML += "<font color=deeppink>" + "@ "
            }
            if (mapa[i][j] == 5) {
                document.getElementById("parede").innerHTML += "<font color=lime>" + "& "
            }
            if (mapa[i][j] == 6) {
                document.getElementById("parede").innerHTML += "<font color=deeppink>" + "@ "
            }
            if (mapa[i][j] == 7) {
                document.getElementById("parede").innerHTML += "<font color=orange>" + "= "
            }
            if (mapa[i][j] == 8) {
                document.getElementById("parede").innerHTML += "<font color=orange>" + "= "
            }
            if (mapa[i][j] == 9) {
                document.getElementById("parede").innerHTML += "<font color=red>" + "# "
            }
            if (mapa[i][j] == 10) {
                document.getElementById("parede").innerHTML += "<font color=black>" + "O "
            }
            if (mapa[i][j] == 11) {
                document.getElementById("parede").innerHTML += "<font color=deeppink>" + "@ "
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
                mapa[8][28] = 7
            }
            if (mapa[i][j] == 3) {
                document.getElementById("parede").innerHTML += "<font color=yellow>" + "D "
            }
            if (mapa[i][j] == 4) {
                document.getElementById("parede").innerHTML += "<font color=deeppink>" + "@ "
            }
            if (mapa[i][j] == 5) {
                document.getElementById("parede").innerHTML += "<font color=lime>" + "& "
            }
            if (mapa[i][j] == 6) {
                document.getElementById("parede").innerHTML += "<font color=deeppink>" + "@ "
            }
            if (mapa[i][j] == 7) {
                document.getElementById("parede").innerHTML += "<font color=orange>" + "= "
            }
            if (mapa[i][j] == 8) {
                document.getElementById("parede").innerHTML += "<font color=orange>" + "= "
            }
            if (mapa[i][j] == 9) {
                document.getElementById("parede").innerHTML += "<font color=red>" + "# "
            }
            if (mapa[i][j] == 10) {
                document.getElementById("parede").innerHTML += "<font color=black>" + "O "
            }
            if (mapa[i][j] == 11) {
                document.getElementById("parede").innerHTML += "<font color=deeppink>" + "@ "
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
function botao1() {
    this.document.getElementById("parede").innerHTML = ""
    mapa[1][23] = 0
    mapa[2][24] = 0
    mapa[3][25] = 0
    mapa[4][26] = 0
    mapa[5][27] = 0
    mapa[6][28] = 0
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
                document.getElementById("parede").innerHTML += "<font color=yellow>" + "D "
            }
            if (mapa[i][j] == 4) {
                document.getElementById("parede").innerHTML += "<font color=deeppink>" + "@ "
            }
            if (mapa[i][j] == 5) {
                document.getElementById("parede").innerHTML += "<font color=lime>" + "& "
            }
            if (mapa[i][j] == 6) {
                document.getElementById("parede").innerHTML += "<font color=deeppink>" + "@ "
            }
            if (mapa[i][j] == 7) {
                document.getElementById("parede").innerHTML += "<font color=orange>" + "= "
            }
            if (mapa[i][j] == 8) {
                document.getElementById("parede").innerHTML += "<font color=orange>" + "= "
            }
            if (mapa[i][j] == 9) {
                document.getElementById("parede").innerHTML += "<font color=red>" + "# "
            }
            if (mapa[i][j] == 10) {
                document.getElementById("parede").innerHTML += "<font color=black>" + "O "
            }
            if (mapa[i][j] == 11) {
                document.getElementById("parede").innerHTML += "<font color=deeppink>" + "@ "
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
