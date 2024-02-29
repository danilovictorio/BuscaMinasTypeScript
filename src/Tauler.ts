class Tauler {
    caselles: Casella[][];
    filas: number;
    columnes: number;

    constructor(filas: number, columnes: number) {
        this.filas = filas;
        this.columnes = columnes;
        this.caselles = [];
        this.inicializarCaselles();
    }

    inicializarCaselles() {
        for (let i = 0; i < this.filas; i++) {
            this.caselles[i] = [];
            for (let j = 0; j < this.columnes; j++) {
                const esMina = Math.random() < 0.3; // Probabilidad de 30% de que haya mina
                this.caselles[i][j] = new Casella(esMina);
            }
        }
    }
}
