var Casella = /** @class */ (function () {
    function Casella(esMina) {
        this.esMina = esMina;
        this.revelada = false;
        this.marcada = false;
    }
    Casella.prototype.mostrarCasella = function () {
        this.revelada = true;
    };
    Casella.prototype.ocultarCasella = function () {
        this.revelada = false;
    };
    Casella.prototype.generarMinaAleatoria = function () {
        this.esMina = Math.random() < 0.5;
    };
    Casella.prototype.contarMinasAdyacentes = function () {
        var contador = 0;
        return contador;
    };
    return Casella;
}());
