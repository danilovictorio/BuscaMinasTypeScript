class Joc {
    tauler: Tauler;

    constructor(filas: number, columnes: number) {
        this.tauler = new Tauler(filas, columnes);
    }

    dibuixarTauler() {
        const taulerHTML = document.getElementById("tauler");

        if (taulerHTML) {
            taulerHTML.innerHTML = ""; // Limpiar el contenido anterior

            for (let fila = 0; fila < this.tauler.filas; fila++) {
                const filaHTML = document.createElement("div");
                filaHTML.classList.add("fila");

                for (let columna = 0; columna < this.tauler.columnes; columna++) {
                    const casella = this.tauler.caselles[fila][columna];
                    const casellaHTML = document.createElement("div");
                    casellaHTML.classList.add("casella");
                    casellaHTML.dataset.fila = fila.toString();
                    casellaHTML.dataset.columna = columna.toString();
                    casellaHTML.addEventListener("click", () => this.revelarCasella(fila, columna));
                    casellaHTML.addEventListener("contextmenu", (event) => {
                        event.preventDefault();
                        this.marcarCasella(fila, columna);
                    });

                    filaHTML.appendChild(casellaHTML);
                }

                taulerHTML.appendChild(filaHTML);
            }
        }
    }

    revelarCasella(fila: number, columna: number) {
        const casella = this.tauler.caselles[fila][columna];
        if (casella.esMina) {
            // Si es una mina, terminar el juego
            console.log("¡Has perdido!");
        } else {
            // Implementar lógica para revelar casilla y mostrar cantidad de minas cercanas
        }
    }

    marcarCasella(fila: number, columna: number) {
        const casella = this.tauler.caselles[fila][columna];
        casella.marcada = !casella.marcada;
        this.dibuixarTauler(); // Actualizar tablero visualmente
    }
}
