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
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 8, 0, 0, 1, 0, 1, 0, 0, 6, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 7, 7, 0, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 7, 0, 0, 0, 0, 0, 7, 0, 7, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 3, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 7, 0, 7, 0, 7, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 6, 0, 0, 0, 0, 1, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 7, 7, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 7, 7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 6, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 7, 7, 0, 0, 0, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
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
    [1, 0, 0, 0, 0, 0, 7, 0, 0, 7, 0, 0, 7, 1, 7, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 7, 1, 7, 1, 7, 1, 7, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 7, 7, 0, 7, 7, 0, 0, 0, 7, 7, 1, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 1, 0, 0, 0, 7, 0, 0, 0, 7, 0, 7, 0, 7, 0, 0, 7, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 7, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 7, 1, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 1, 7, 0, 0, 0, 1, 0, 7, 1, 7, 0, 0, 0, 0, 0, 7, 0, 0, 7, 1, 7, 0, 3, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 6, 0, 7, 7, 7, 7, 0, 0, 7, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 1, 0, 0, 0, 0, 7, 0, 0, 1, 0, 0, 7, 1, 7, 0, 0, 7, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

var bonecoL = 7
var bonecoC = 7
var chaveL = 11
var chaveC = 10
var vida = 0
var tmp



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
        else if (mapa[bonecoL][bonecoC] == mapa[3][30] && mapa[3][35] == 2) {
            continuarChaveCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[29][5] && mapa[30][6] == 2) {
            continuarChaveCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[1][20] && mapa[11][18] == 0) {
            continuarPortaCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[3][35] && mapa[3][30] == 0) {
            continuarPortaCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[11][42] && mapa[9][49] == 0) {
            continuarPortaCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[7][15]) {
            continuarBotaoCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[11][30]) {
            continuarBotaoCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[5][56]) {
            continuarBotaoCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[27][13]) {
            continuarBotaoCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[33][13]) {
            continuarBotaoCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[30][32]) {
            continuarBotaoCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[13][30]) {
            continuarBotaoCMais()
        }
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
        else if (mapa[bonecoL][bonecoC] == mapa[30][17]) {
            continuarTpCMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[9][37]) {
            continuarTpCMais()
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
        else if (mapa[bonecoL][bonecoC] == mapa[6][5] && mapa[4][1] == 2) {
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
        else if (mapa[bonecoL][bonecoC] == mapa[3][30] && mapa[3][35] == 2) {
            continuarChaveCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[29][5] && mapa[30][6] == 2) {
            continuarChaveCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[1][20] && mapa[11][18] == 0) {
            continuarPortaCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[3][35] && mapa[3][30] == 0) {
            continuarPortaCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[11][42] && mapa[9][49] == 0) {
            continuarPortaCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[7][15]) {
            continuarBotaoCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[11][30]) {
            continuarBotaoCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[5][56]) {
            continuarBotaoCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[27][21]) {
            continuarBotaoCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[30][32]) {
            continuarBotaoCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[13][30]) {
            continuarBotaoCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[11][15]) {
            continuarTpCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[11][24]) {
            continuarTpCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[16][30]) {
            continuarTpCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[30][17]) {
            continuarTpCMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[9][37]) {
            continuarTpCMenos()
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
        else if (mapa[bonecoL][bonecoC] == mapa[6][5] && mapa[4][1] == 2) {
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
        else if (mapa[bonecoL][bonecoC] == mapa[11][18] && mapa[1][20] == 2) {
            continuarChaveLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[11][30]) {
            continuarBotaoLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[5][56]) {
            continuarBotaoLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[33][13]) {
            continuarBotaoLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[30][32]) {
            continuarBotaoLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[13][30]) {
            continuarBotaoLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[4][1] && mapa[6][5] == 0) {
            continuarPortaLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[30][6] && mapa[29][5] == 0) {
            continuarPortaLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[11][15]) {
            continuarTpLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[16][30]) {
            continuarTpLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[35][1]) {
            continuarTpLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[30][17]) {
            continuarTpLMenos()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[9][37]) {
            continuarTpLMenos()
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
        else if (mapa[bonecoL][bonecoC] == mapa[3][30] && mapa[3][35] == 2) {
            continuarChaveLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[9][49] && mapa[11][42] == 2) {
            continuarChaveLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[5][56]) {
            continuarBotaoLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[27][13]) {
            continuarBotaoLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[27][21]) {
            continuarBotaoLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[30][32]) {
            continuarBotaoLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[4][1] && mapa[6][5] == 0) {
            continuarPortaLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[30][6] && mapa[29][5] == 0) {
            continuarPortaLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[16][30]) {
            continuarTpLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[30][17]) {
            continuarTpLMais()
        }
        else if (mapa[bonecoL][bonecoC] == mapa[9][37]) {
            continuarTpLMais()
        }
        else {
            mapa[bonecoL][bonecoC] = 0
            bonecoL++
            mapa[bonecoL][bonecoC] = 4
            movimento()
        }

    }
    if (tecla == "73") {
        if (mapa[bonecoL][bonecoC] == mapa[6][5]) {
            chavePorta(4, 1)
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
    }
}

window.onload = (function jogar() {
    movimento()
})



function movimento() {
    var paredeAtualizacao = ""
    //0=nada,1=Parede, 2=Porta Fechada, 3=Porta2 Fechada, 4=Chave1 ,5=Boneco, 6=Chave2
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
        } paredeAtualizacao += "<br>"
    }
    document.getElementById("parede").innerHTML = paredeAtualizacao
}
function chavePorta(i, j) {
    mapa[i][j] = 5
    this.document.getElementById("parede").innerHTML = ""
    movimento()
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
function morte(params) {
    vida++
    mapa[bonecoL][bonecoC] = 0
    bonecoL = 7
    bonecoC = 7
    mapa[bonecoL][bonecoC] = 4
    mapa[7][15] = 6
    if (mapa[4][1] == 2) {
        mapa[6][5] = 3
    }
    if (mapa[1][20] == 2) {
        mapa[11][18] = 3
    }
    if (mapa[11][42] == 2) {
        mapa[9][49] = 3
    }
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
function botao1(contagem) {

    document.getElementById("parede").innerHTML = ""
    mapa[8][14] = contagem

    movimento()
}
function botao2(contagem) {

    document.getElementById("parede").innerHTML = ""
    mapa[12][30] = contagem

    movimento()
}
function botao3(contagem) {

    document.getElementById("parede").innerHTML = ""
    mapa[11][55] = contagem
    mapa[10][54] = contagem
    mapa[9][53] = contagem


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
function continuarBotaoLMais() {
    mapa[bonecoL][bonecoC] = 6
    bonecoL++
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function teleporte(L, C, i, j) {
    bonecoL = L
    bonecoC = C
    mapa[i][j] = 8
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function continuarTpCMais() {
    mapa[bonecoL][bonecoC] = 8
    bonecoC++
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function continuarTpCMenos() {
    mapa[bonecoL][bonecoC] = 8
    bonecoC--
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function continuarTpLMenos() {
    mapa[bonecoL][bonecoC] = 8
    bonecoL--
    mapa[bonecoL][bonecoC] = 4
    movimento()
}
function continuarTpLMais() {
    mapa[bonecoL][bonecoC] = 8
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

