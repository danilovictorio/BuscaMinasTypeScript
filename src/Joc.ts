class Joc {
    tauler: Tauler;

    constructor(filas: number, columnes: number) {
        this.tauler = new Tauler(filas, columnes);
    }

    dibuixarTauler() {
        const taulerDiv = document.getElementById('tauler');
        taulerDiv.innerHTML = ''; // Limpiar el tablero
        for (let i = 0; i < this.tauler.filas; i++) {
            const filaDiv = document.createElement('div');
            filaDiv.className = 'fila';
            for (let j = 0; j < this.tauler.columnes; j++) {
                const casellaDiv = document.createElement('div');
                casellaDiv.className = 'casella';
                casellaDiv.textContent = this.tauler.caselles[i][j].toString();
                casellaDiv.addEventListener('click', () => this.revelarCasella(i, j));
                filaDiv.appendChild(casellaDiv);
            }
            taulerDiv.appendChild(filaDiv);
        }
    }

    revelarCasella(fila: number, columna: number) {
        const casella = this.tauler.caselles[fila][columna];
        casella.mostrarCasella(); // Revelar la casilla
        this.dibuixarTauler(); // Volver a dibujar el tablero
    }

    marcarCasella(fila: number, columna: number) {
        const casella = this.tauler.caselles[fila][columna];
        casella.marcada = !casella.marcada;
        this.dibuixarTauler(); // Actualizar tablero visualmente
    }
}
