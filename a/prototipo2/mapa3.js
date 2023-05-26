// IMPRIMIR MAPA
var mapa = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 7, 7, 7, 7, 7, 7, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 1, 0, 0, 7, 0, 0, 0, 7, 1, 1, 1, 0, 0, 0, 0, 7, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 7, 0, 0, 0, 7, 0, 0, 0, 0, 7, 1, 0, 0, 7, 1, 7, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 2, 0, 0, 7, 1, 1, 1, 1, 1, 1, 1, 7, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 7, 1, 0, 0, 7, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 7, 1, 1, 1, 1, 1, 7, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 7, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 7, 0, 0, 0, 0, 1, 0, 1, 0, 0, 7, 1, 1, 1, 7, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 6, 0, 0, 1],
    [1, 1, 1, 1, 1, 3, 1, 1, 7, 0, 1, 0, 1, 0, 0, 7, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 7, 1, 7, 0, 0, 0, 1, 0, 0, 1, 0, 0, 7, 0, 7, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 7, 1, 4, 1, 0, 1, 0, 7, 1, 0, 6, 1, 7, 0, 7, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 7, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 7, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 7, 0, 1, 1, 1, 0, 1, 0, 1, 7, 1, 7, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 7, 0, 0, 0, 7, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 7, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 7, 1, 0, 0, 1, 0, 7, 0, 1, 0, 0, 0, 0, 1, 0, 7, 1, 7, 0, 7, 1, 7, 0, 1, 0, 8, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 7, 3, 7, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 7, 0, 0, 0, 7, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 8, 1, 7, 3, 7, 1, 0, 0, 0, 8, 1, 7, 0, 0, 0, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 7, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 7, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 7, 1, 0, 1, 7, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 7, 0, 0, 0, 7, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 8, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 7, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 7, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 7, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 7, 0, 1, 0, 1, 1, 1, 1, 7, 0, 0, 0, 7, 1],
    [1, 0, 1, 1, 1, 7, 0, 0, 0, 1, 0, 0, 0, 1, 7, 1, 7, 1, 0, 1, 7, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 7, 0, 0, 1],
    [1, 0, 0, 0, 7, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 7, 7, 0, 1, 0, 7, 0, 0, 0, 7, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 7, 1, 1, 1, 1, 0, 1, 0, 0, 0, 7, 0, 0, 0, 7, 1],
    [1, 0, 3, 0, 7, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 7, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 3, 7, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 7, 0, 1, 1, 1, 1, 1, 7, 0, 0, 0, 0, 0, 0, 0, 7, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 8, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 8, 0, 0, 1, 0, 1, 0, 0, 9, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 7, 7, 0, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 7, 0, 0, 0, 0, 0, 7, 0, 7, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 3, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 7, 0, 7, 0, 7, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 6, 0, 0, 0, 0, 1, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 7, 7, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 7, 7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 9, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 7, 7, 0, 0, 0, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 8, 0, 0, 7, 7, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 8, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 6, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 8, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 7, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 1, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 7, 1, 7, 0, 7, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 1, 7, 0, 0, 0, 7, 1, 1, 1, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 7, 0, 7, 1, 0, 7, 0, 0, 0, 0, 7, 7, 1, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 0, 0, 7, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 7, 0, 0, 7, 1, 7, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 7, 1, 1, 1, 1, 1, 7, 0, 0, 0, 0, 0, 0, 7, 0, 7, 0, 0, 0, 7, 1, 1, 1, 7, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 7, 0, 7, 7, 7, 0, 0, 0, 0, 7, 7, 1, 7, 0, 0, 0, 0, 0, 7, 1, 7, 0, 0, 0, 7, 7, 7, 7, 7, 0, 0, 0, 1, 0, 0, 7, 1, 7, 1, 7, 0, 0, 0, 7, 7, 7, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 7, 0, 0, 7, 0, 0, 7, 1, 7, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 7, 1, 7, 1, 7, 1, 7, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 7, 7, 0, 7, 7, 0, 0, 0, 7, 7, 1, 7, 0, 7, 1, 7, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 1, 0, 0, 0, 7, 0, 0, 0, 7, 0, 7, 0, 7, 0, 0, 7, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 7, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 7, 1, 7, 0, 0, 7, 0, 0, 0, 0, 0, 0, 7, 1, 7, 0, 0, 0, 1, 0, 7, 1, 7, 0, 0, 0, 0, 0, 7, 0, 0, 7, 1, 7, 0, 3, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 6, 0, 7, 7, 7, 7, 0, 0, 7, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 1, 0, 0, 0, 0, 7, 0, 0, 1, 0, 0, 7, 1, 7, 0, 0, 7, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

//POSICAO DO BONECO
var bonecoL = 7
var bonecoC = 7
// CONTADOR DE VIDA
var vida = 0
// CONTADORES DE VIDA EXTRA
var vidaextra1 = 0
var vidaextra2 = 0
var contadorExtra = 0

// EVENTO DE DESCER A TECLA
window.addEventListener("keydown", teclaBaixo)

function teclaBaixo(event) {
    // ARMAZENAR A TECLA NA VARIAVEL
    var tecla = event.keyCode
    // TECLA "D"
    if (tecla == "68") {
        // COLISAO
        if (mapa[bonecoL][bonecoC + 1] == 1 || mapa[bonecoL][bonecoC + 1] == 2) {
            mapa[bonecoL][bonecoC] = 4
        }
        // MORTE
        else if (mapa[bonecoL][bonecoC + 1] == 7) {
            morte()
        }
        // CHAVE NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[3][30] && mapa[3][35] == 2) {
            continuarChaveCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[29][5] && mapa[30][6] == 2) {
            continuarChaveCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[20][2] && mapa[31][15] == 2) {
            continuarChaveCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[56][47] && mapa[56][49] == 2) {
            continuarChaveCMais()
        }
        // PORTA NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[1][20] && mapa[11][18] == 0) {
            continuarPortaCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[3][35] && mapa[3][30] == 0) {
            continuarPortaCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[11][42] && mapa[9][49] == 0) {
            continuarPortaCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[31][15] && mapa[20][2] == 0) {
            continuarPortaCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[28][18] && mapa[22][56] == 0) {
            continuarPortaCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[43][43] && mapa[45][12] == 0) {
            continuarPortaCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[56][49] && mapa[56][47] == 0) {
            continuarPortaCMais()
            window.location.replace("vitoria.html")
        }
        // BOTAO NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[7][15]) {
            continuarBotaoCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[5][56]) {
            continuarBotaoCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[30][32]) {
            continuarBotaoCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[13][30]) {
            continuarBotaoCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[41][27]) {
            continuarBotaoCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[57][2]) {
            continuarBotaoCMais()
        }
        // PORTAL NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[1][11]) {
            continuarTpCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[16][30]) {
            continuarTpCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[25][1]) {
            continuarTpCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[35][1]) {
            continuarTpCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[27][13]) {
            continuarTpCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[9][37]) {
            continuarTpCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[41][52]) {
            continuarTpCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[42][40]) {
            continuarTpCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[41][10]) {
            continuarTpCMais()
        }
        // VIDA EXTRA NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[33][13] && vidaextra1 == 0) {
            continuarVidaCMais()
        }
        // MOVIMENTO DO BONECO
        else {
            mapa[bonecoL][bonecoC] = 0
            bonecoC++
            mapa[bonecoL][bonecoC] = 4
            iniciarMapa()
        }
    }
    // TECLA "A"
    if (tecla == "65") {
        // COLISAO
        if (mapa[bonecoL][bonecoC - 1] == 1 || mapa[bonecoL][bonecoC - 1] == 2) {
            mapa[bonecoL][bonecoC] = 4
        }
        // MORTE
        else if (mapa[bonecoL][bonecoC - 1] == 7) {
            morte()
        }
        // CHAVE NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[6][5] && mapa[4][1] == 2) {
            continuarChaveCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[3][30] && mapa[3][35] == 2) {
            continuarChaveCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[29][5] && mapa[30][6] == 2) {
            continuarChaveCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[22][56] && mapa[28][18] == 2) {
            continuarChaveCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[20][2] && mapa[31][15] == 2) {
            continuarChaveCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[56][47] && mapa[56][49] == 2) {
            continuarChaveCMenos()
        }
        // PORTA NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[1][20] && mapa[11][18] == 0) {
            continuarPortaCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[3][35] && mapa[3][30] == 0) {
            continuarPortaCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[11][42] && mapa[9][49] == 0) {
            continuarPortaCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[43][43] && mapa[45][12] == 0) {
            continuarPortaCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[56][49] && mapa[56][47] == 0) {
            continuarPortaCMenos()
        }
        // BOTAO NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[7][15]) {
            continuarBotaoCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[5][56]) {
            continuarBotaoCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[30][32]) {
            continuarBotaoCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[13][30]) {
            continuarBotaoCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[41][27]) {
            continuarBotaoCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[57][2]) {
            continuarBotaoCMenos()
        }
        // PORTAL NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[11][15]) {
            continuarTpCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[11][24]) {
            continuarTpCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[16][30]) {
            continuarTpCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[9][37]) {
            continuarTpCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[41][52]) {
            continuarTpCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[42][40]) {
            continuarTpCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[41][10]) {
            continuarTpCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[58][3] && mapa[58][48] == 8) {
            continuarTpCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[58][48] && mapa[58][3] == 8) {
            continuarTpCMenos()
        }
        // VIDA EXTRA NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[27][21] && vidaextra2 == 0) {
            continuarVidaCMenos()
        }
        // MOVIMENTO DO BONECO
        else {
            mapa[bonecoL][bonecoC] = 0
            bonecoC--
            mapa[bonecoL][bonecoC] = 4
            iniciarMapa()
        }
    }
    // TECLA "W"
    if (tecla == "87") {
        // COLISAO
        if (mapa[bonecoL - 1][bonecoC] == 1 || mapa[bonecoL - 1][bonecoC] == 2) {
            mapa[bonecoL][bonecoC] = 4
        }
        // MORTE
        else if (mapa[bonecoL - 1][bonecoC] == 7) {
            morte()
        }
        // CHAVE NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[6][5] && mapa[4][1] == 2) {
            continuarChaveLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[11][18] && mapa[1][20] == 2) {
            continuarChaveLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[22][56] && mapa[28][18] == 2) {
            continuarChaveLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[20][2] && mapa[31][15] == 2) {
            continuarChaveLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[45][12] && mapa[43][43] == 2) {
            continuarChaveLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[56][47] && mapa[56][49] == 2) {
            continuarChaveLMenos()
        }
        // BOTAO NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[5][56]) {
            continuarBotaoLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[30][32]) {
            continuarBotaoLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[13][30]) {
            continuarBotaoLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[41][27]) {
            continuarBotaoLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[57][2]) {
            continuarBotaoLMenos()
        }
        // PORTA NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[4][1] && mapa[6][5] == 0) {
            continuarPortaLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[30][6] && mapa[29][5] == 0) {
            continuarPortaLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[43][43] && mapa[45][12] == 0) {
            continuarPortaLMenos()
        }
        // PORTAL NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[11][15]) {
            continuarTpLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[16][30]) {
            continuarTpLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[35][1]) {
            continuarTpLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[9][37]) {
            continuarTpLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[41][52]) {
            continuarTpLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[42][40]) {
            continuarTpLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[41][10]) {
            continuarTpLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[45][27]) {
            continuarTpLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[58][3] && mapa[58][48] == 8) {
            continuarTpLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[58][48] && mapa[58][3] == 8) {
            continuarTpLMenos()
        }
        // VIDA EXTRA NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[33][13] && vidaextra1 == 0) {
            continuarVidaLMenos()
        }
        // MOVIMENTO DO BONECO
        else {
            mapa[bonecoL][bonecoC] = 0
            bonecoL--
            mapa[bonecoL][bonecoC] = 4
            iniciarMapa()
        }
    }
    // TECLA "S"
    if (tecla == "83") {
        // COLISAO
        if (mapa[bonecoL + 1][bonecoC] == 1 || mapa[bonecoL + 1][bonecoC] == 2) {
            mapa[bonecoL][bonecoC] = 4
        }
        // MORTE
        else if (mapa[bonecoL + 1][bonecoC] == 7) {
            morte()
        }
        // CHAVE NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[3][30] && mapa[3][35] == 2) {
            continuarChaveLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[9][49] && mapa[11][42] == 2) {
            continuarChaveLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[56][47] && mapa[56][49] == 2) {
            continuarChaveLMais()
        }
        // BOTAO NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[5][56]) {
            continuarBotaoLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[30][32]) {
            continuarBotaoLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[41][27]) {
            continuarBotaoLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[57][2]) {
            continuarBotaoLMais()
        }
        // PORTA NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[4][1] && mapa[6][5] == 0) {
            continuarPortaLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[30][6] && mapa[29][5] == 0) {
            continuarPortaLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[31][15] && mapa[20][2] == 0) {
            continuarPortaLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[28][18] && mapa[22][56] == 0) {
            continuarPortaLMais()
        }
        // PORTAL NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[16][30]) {
            continuarTpLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[27][13]) {
            continuarTpLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[9][37]) {
            continuarTpLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[41][52]) {
            continuarTpLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[42][40]) {
            continuarTpLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[41][10]) {
            continuarTpLMais()
        }
        // VIDA EXTRA NAO SUMIR
        else if (mapa[bonecoL][bonecoC] == mapa[27][21] && vidaextra2 == 0) {
            continuarVidaLMais()
        }
        // MOVIMENTO DO BONECO
        else {
            mapa[bonecoL][bonecoC] = 0
            bonecoL++
            mapa[bonecoL][bonecoC] = 4
            iniciarMapa()
        }

    }
    // TELCLA "I"
    if (tecla == "73") {
        // ABRIR PORTA
        if (mapa[bonecoL][bonecoC] == mapa[6][5]) {
            chavePorta(4, 1)
        }
        if (mapa[bonecoL][bonecoC] == mapa[3][20]) {
            chavePorta(12, 12)
        }
        if (mapa[bonecoL][bonecoC] == mapa[11][18]) {
            chavePorta(1, 20)
        }
        if (mapa[bonecoL][bonecoC] == mapa[3][30]) {
            chavePorta(3, 35)
        }
        if (mapa[bonecoL][bonecoC] == mapa[9][49]) {
            chavePorta(11, 42)
        }
        if (mapa[bonecoL][bonecoC] == mapa[29][5]) {
            chavePorta(30, 6)
        }
        if (mapa[bonecoL][bonecoC] == mapa[22][56]) {
            chavePorta(28, 18)
        }
        if (mapa[bonecoL][bonecoC] == mapa[20][2]) {
            chavePorta(31, 15)
        }
        if (mapa[bonecoL][bonecoC] == mapa[45][12]) {
            chavePorta(43, 43)
        }
        if (mapa[bonecoL][bonecoC] == mapa[56][47]) {
            chavePorta(56, 49)
        }
        // LIGAR/DESLIGAR PAREDE
        if (mapa[bonecoL][bonecoC] == mapa[7][15] && mapa[8][14] == 0) {
            botao1(1)
        }
        else if (mapa[bonecoL][bonecoC] == mapa[7][15] && mapa[8][14] == 1) {
            botao1(0)
        }
        if (mapa[bonecoL][bonecoC] == mapa[13][30] && mapa[12][30] == 1) {
            botao2(0)
        }
        else if (mapa[bonecoL][bonecoC] == mapa[13][30] && mapa[12][30] == 0) {
            botao2(1)
        }
        if (mapa[bonecoL][bonecoC] == mapa[5][56] && mapa[11][55] == 1) {
            botao3(0)
        }
        else if (mapa[bonecoL][bonecoC] == mapa[5][56] && mapa[11][55] == 0) {
            botao3(1)
        }
        if (mapa[bonecoL][bonecoC] == mapa[30][32] && mapa[27][34] == 1) {
            botao4(0)
        }
        else if (mapa[bonecoL][bonecoC] == mapa[30][32] && mapa[27][34] == 0) {
            botao4(1)
        }
        if (mapa[bonecoL][bonecoC] == mapa[41][27] && mapa[41][20] == 1) {
            botao5(0)
        }
        else if (mapa[bonecoL][bonecoC] == mapa[41][27] && mapa[41][20] == 0) {
            botao5(1)
        }
        // LIGAR/DESLIGAR PORTAL
        if (mapa[bonecoL][bonecoC] == mapa[57][2] && mapa[58][3] == 0) {
            botao6(8)
        }
        else if (mapa[bonecoL][bonecoC] == mapa[57][2] && mapa[58][3] == 8) {
            botao6(0)
        }
        // TELETRANSPORTE
        if (mapa[bonecoL][bonecoC] == mapa[11][15]) {
            teleporte(1, 11, 11, 15)
        }
        else if (mapa[bonecoL][bonecoC] == mapa[1][11]) {
            teleporte(11, 15, 1, 11)
        }
        if (mapa[bonecoL][bonecoC] == mapa[11][24]) {
            teleporte(16, 30, 11, 24)
        }
        else if (mapa[bonecoL][bonecoC] == mapa[16][30]) {
            teleporte(11, 24, 16, 30)
        }
        if (mapa[bonecoL][bonecoC] == mapa[9][37]) {
            teleporte(25, 1, 9, 37)
        }
        else if (mapa[bonecoL][bonecoC] == mapa[25][1]) {
            teleporte(9, 37, 25, 1)
        }
        if (mapa[bonecoL][bonecoC] == mapa[35][1]) {
            teleporte(27, 13, 35, 1)
        }
        else if (mapa[bonecoL][bonecoC] == mapa[27][13]) {
            teleporte(35, 1, 27, 13)
        }
        if (mapa[bonecoL][bonecoC] == mapa[41][52]) {
            teleporte(41, 10, 41, 52)
        }
        else if (mapa[bonecoL][bonecoC] == mapa[41][10]) {
            teleporte(41, 52, 41, 10)
        }
        if (mapa[bonecoL][bonecoC] == mapa[42][40]) {
            teleporte(45, 27, 42, 40)
        }
        else if (mapa[bonecoL][bonecoC] == mapa[45][27]) {
            teleporte(42, 40, 45, 27)
        }
        if (mapa[bonecoL][bonecoC] == mapa[58][3] && mapa[58][48] == 8) {
            teleporte(58, 48, 58, 3)
        }
        else if (mapa[bonecoL][bonecoC] == mapa[58][48] && mapa[58][3] == 8) {
            teleporte(58, 3, 58, 48)
        }
        // ADICIONAR VIDA EXTRA
        if (mapa[bonecoL][bonecoC] == mapa[33][13] && vidaextra1 == 0) {
            vida--
            document.getElementById("vidaextra1").src = "imagem/vida.png"
            vidaextra1++
        }
        if (mapa[bonecoL][bonecoC] == mapa[27][21] && vidaextra2 == 0) {
            vida--
            document.getElementById("vidaextra2").src = "imagem/vida.png"
            vidaextra2++
        }
    }
}

// CARREGAR O MAPA NA TELA
window.onload = (function jogar() {
    iniciarMapa()
})

// IMPRIMIR O MAPA
// 0=NADA , 1=PAREDE , 2=PORTA FECHADA , 3=CHAVE , 4=BONECO , 5=PORTA ABERTA , 6=BOTÃO , 7=ESPINHO, 8=PORTAL, 9=VIDA EXTRA
function iniciarMapa() {
    var paredeAtualizacao = ""
    this.document.getElementById("parede").innerHTML = ""
    for (i = 0; i < 60; i++) {
        for (j = 0; j < 60; j++) {
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
            if (mapa[i][j] == 8) {
                paredeAtualizacao += '<span style="color: aqua;">> </span>';
            }
            if (mapa[i][j] == 9) {
                paredeAtualizacao += '<span style="color: #37053b;">$ </span>';
            }
        } paredeAtualizacao += "<br>"
    }
    document.getElementById("parede").innerHTML = paredeAtualizacao
}
// IMPRIMIR A PORTA NO MAPA
function chavePorta(i, j) {
    mapa[i][j] = 5
    this.document.getElementById("parede").innerHTML = ""
    iniciarMapa()
}
// MANTER CHAVE TECLA "D"
function continuarChaveCMais() {
    mapa[bonecoL][bonecoC] = 3
    bonecoC++
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
// MANTER CHAVE TECLA "A"
function continuarChaveCMenos() {
    mapa[bonecoL][bonecoC] = 3
    bonecoC--
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
// MANTER CHAVE TECLA "W"
function continuarChaveLMais() {
    mapa[bonecoL][bonecoC] = 3
    bonecoL++
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
// MATER CHAVE TECLA "W"
function continuarChaveLMenos() {
    mapa[bonecoL][bonecoC] = 3
    bonecoL--
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
// MORTE DO BONECO
function morte(params) {
    vida++
    mapa[bonecoL][bonecoC] = 0
    bonecoL = 7
    bonecoC = 7
    mapa[bonecoL][bonecoC] = 4
    if (mapa[4][1] == 2) {
        mapa[6][5] = 3
    }
    if (mapa[1][20] == 2) {
        mapa[11][18] = 3
    }
    if (mapa[11][42] == 2) {
        mapa[9][49] = 3
    }
    if (mapa[28][18] == 2) {
        mapa[22][56] = 3
    }
    iniciarMapa()

    // CONDICAO DE VIDA DO BONECO
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
    if (vidaextra1 == 1 && contadorExtra == 0) {
        this.document.getElementById("vidaextra1").src = ""
        contadorExtra++
    }
    else if (vidaextra2 == 1) {
        this.document.getElementById("vidaextra2").src = ""
    }
}
// IMPRIMIR NO MAPA A PAREDE LIGANDO/DESLIGANDO
function botao1(contagem) {
    document.getElementById("parede").innerHTML = ""
    mapa[8][14] = contagem
    iniciarMapa()
}
// IMPRIMIR NO MAPA A PAREDE LIGANDO/DESLIGANDO
function botao2(contagem) {
    document.getElementById("parede").innerHTML = ""
    mapa[12][30] = contagem
    iniciarMapa()
}
// IMPRIMIR NO MAPA A PAREDE LIGANDO/DESLIGANDO
function botao3(contagem) {
    document.getElementById("parede").innerHTML = ""
    mapa[11][55] = contagem
    mapa[10][54] = contagem
    mapa[9][53] = contagem
    iniciarMapa()
}
// IMPRIMIR NO MAPA A PAREDE LIGANDO/DESLIGANDO
function botao4(contagem) {
    document.getElementById("parede").innerHTML = ""
    mapa[27][34] = contagem
    mapa[28][35] = contagem
    mapa[29][36] = contagem
    mapa[30][37] = contagem
    mapa[31][38] = contagem
    mapa[32][39] = contagem
    mapa[33][40] = contagem
    mapa[27][40] = contagem
    mapa[28][39] = contagem
    mapa[29][38] = contagem
    mapa[30][37] = contagem
    mapa[31][36] = contagem
    mapa[32][35] = contagem
    mapa[33][34] = contagem
    iniciarMapa()
}
// IMPRIMIR NO MAPA A PAREDE LIGANDO/DESLIGANDO
function botao5(contagem) {
    document.getElementById("parede").innerHTML = ""
    if (mapa[41][21] == 0) {
        mapa[42][22] = 0
        mapa[48][21] = 0
    }
    else {
        mapa[42][22] = 1
        mapa[48][21] = 1
    }
    mapa[41][21] = contagem
    mapa[41][20] = contagem
    mapa[42][20] = contagem
    mapa[43][20] = contagem
    mapa[44][20] = contagem
    mapa[45][20] = contagem
    mapa[46][20] = contagem
    mapa[47][20] = contagem
    mapa[44][22] = contagem
    mapa[45][22] = contagem
    mapa[46][22] = contagem
    mapa[47][22] = contagem
    iniciarMapa()
}
// IMPRIMIR NO MAPA O PORTAL LIGANDO/DESLIGANDO
function botao6(contagem) {
    mapa[58][3] = contagem
    mapa[58][48] = contagem
    iniciarMapa()
}
// MANTER BOTAO TECLA "D"
function continuarBotaoCMais() {
    mapa[bonecoL][bonecoC] = 6
    bonecoC++
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
// MANTER BOTAO TECLA "A"
function continuarBotaoCMenos() {
    mapa[bonecoL][bonecoC] = 6
    bonecoC--
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
// MANTER BOTAO TECLA "W"
function continuarBotaoLMenos() {
    mapa[bonecoL][bonecoC] = 6
    bonecoL--
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
// MANTER BOTAO TECLA "S"
function continuarBotaoLMais() {
    mapa[bonecoL][bonecoC] = 6
    bonecoL++
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
// IMPRIMIR O TELETRANSPORTE NO MAPA
function teleporte(L, C, i, j) {
    bonecoL = L
    bonecoC = C
    mapa[i][j] = 8
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
// MANTER PORTAL TECLA "D"
function continuarTpCMais() {
    mapa[bonecoL][bonecoC] = 8
    bonecoC++
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
// MANTER PORTAL TECLA "A"
function continuarTpCMenos() {
    mapa[bonecoL][bonecoC] = 8
    bonecoC--
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
// MANTER PORTAL TECLA "W"
function continuarTpLMenos() {
    mapa[bonecoL][bonecoC] = 8
    bonecoL--
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
// MANTER PORTAL TECLA "S"
function continuarTpLMais() {
    mapa[bonecoL][bonecoC] = 8
    bonecoL++
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
// MANTER PORTA TECLA "S"
function continuarPortaLMais() {
    mapa[bonecoL][bonecoC] = 5
    bonecoL++
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
// MANTER PORTA TECLA "W"
function continuarPortaLMenos() {
    mapa[bonecoL][bonecoC] = 5
    bonecoL--
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
// MANTER PORTA TECLA "D"
function continuarPortaCMais() {
    mapa[bonecoL][bonecoC] = 5
    bonecoC++
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
// MANTER PORTA TECLA "A"
function continuarPortaCMenos() {
    mapa[bonecoL][bonecoC] = 5
    bonecoC--
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
// MANTER VIDA EXTRA TECLA "D"
function continuarVidaCMais(params) {
    mapa[bonecoL][bonecoC] = 9
    bonecoC++
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
// MANTER VIDA EXTRA TECLA "A"
function continuarVidaCMenos(params) {
    mapa[bonecoL][bonecoC] = 9
    bonecoC--
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
// MANTER VIDA EXTRA TECLA "S"
function continuarVidaLMais(params) {
    mapa[bonecoL][bonecoC] = 9
    bonecoL++
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
// MANTER VIDA EXTRA TECLA "W"
function continuarVidaLMenos(params) {
    mapa[bonecoL][bonecoC] = 9
    bonecoL--
    mapa[bonecoL][bonecoC] = 4
    iniciarMapa()
}
