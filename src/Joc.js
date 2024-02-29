var Joc = /** @class */ (function () {
    function Joc(filas, columnes) {
        this.tauler = new Tauler(filas, columnes);
    }
    Joc.prototype.dibuixarTauler = function () {
        var _this = this;
        var taulerDiv = document.getElementById('tauler');
        taulerDiv.innerHTML = ''; // Limpiar el tablero
        var _loop_1 = function (i) {
            var filaDiv = document.createElement('div');
            filaDiv.className = 'fila';
            var _loop_2 = function (j) {
                var casellaDiv = document.createElement('div');
                casellaDiv.className = 'casella';
                casellaDiv.textContent = this_1.tauler.caselles[i][j].toString();
                casellaDiv.addEventListener('click', function () { return _this.revelarCasella(i, j); });
                filaDiv.appendChild(casellaDiv);
            };
            for (var j = 0; j < this_1.tauler.columnes; j++) {
                _loop_2(j);
            }
            taulerDiv.appendChild(filaDiv);
        };
        var this_1 = this;
        for (var i = 0; i < this.tauler.filas; i++) {
            _loop_1(i);
        }
    };
    Joc.prototype.revelarCasella = function (fila, columna) {
        var casella = this.tauler.caselles[fila][columna];
        casella.mostrarCasella(); // Revelar la casilla
        this.dibuixarTauler(); // Volver a dibujar el tablero
    };
    Joc.prototype.marcarCasella = function (fila, columna) {
        var casella = this.tauler.caselles[fila][columna];
        casella.marcada = !casella.marcada;
        this.dibuixarTauler(); // Actualizar tablero visualmente
    };
    return Joc;
}());
