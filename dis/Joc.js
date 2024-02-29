var Joc = /** @class */ (function () {
    function Joc(filas, columnes) {
        this.tauler = new Tauler(filas, columnes);
    }
    Joc.prototype.dibuixarTauler = function () {
        var _this = this;
        var taulerHTML = document.getElementById("tauler");
        if (taulerHTML) {
            taulerHTML.innerHTML = ""; // Limpiar el contenido anterior
            var _loop_1 = function (fila) {
                var filaHTML = document.createElement("div");
                filaHTML.classList.add("fila");
                var _loop_2 = function (columna) {
                    var casella = this_1.tauler.caselles[fila][columna];
                    var casellaHTML = document.createElement("div");
                    casellaHTML.classList.add("casella");
                    casellaHTML.dataset.fila = fila.toString();
                    casellaHTML.dataset.columna = columna.toString();
                    casellaHTML.addEventListener("click", function () { return _this.revelarCasella(fila, columna); });
                    casellaHTML.addEventListener("contextmenu", function (event) {
                        event.preventDefault();
                        _this.marcarCasella(fila, columna);
                    });
                    filaHTML.appendChild(casellaHTML);
                };
                for (var columna = 0; columna < this_1.tauler.columnes; columna++) {
                    _loop_2(columna);
                }
                taulerHTML.appendChild(filaHTML);
            };
            var this_1 = this;
            for (var fila = 0; fila < this.tauler.filas; fila++) {
                _loop_1(fila);
            }
        }
    };
    Joc.prototype.revelarCasella = function (fila, columna) {
        var casella = this.tauler.caselles[fila][columna];
        if (casella.esMina) {
            // Si es una mina, terminar el juego
            console.log("¡Has perdido!");
        }
        else {
            // Implementar lógica para revelar casilla y mostrar cantidad de minas cercanas
        }
    };
    Joc.prototype.marcarCasella = function (fila, columna) {
        var casella = this.tauler.caselles[fila][columna];
        casella.marcada = !casella.marcada;
        this.dibuixarTauler(); // Actualizar tablero visualmente
    };
    return Joc;
}());
