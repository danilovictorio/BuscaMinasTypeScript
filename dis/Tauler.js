var Tauler = /** @class */ (function () {
    function Tauler(filas, columnes) {
        this.filas = filas;
        this.columnes = columnes;
        this.caselles = [];
        this.inicializarCaselles();
    }
    Tauler.prototype.inicializarCaselles = function () {
        for (var i = 0; i < this.filas; i++) {
            this.caselles[i] = [];
            for (var j = 0; j < this.columnes; j++) {
                var esMina = Math.random() < 0.3; // Probabilidad de 30% de que haya mina
                this.caselles[i][j] = new Casella(esMina);
            }
        }
    };
    return Tauler;
}());
