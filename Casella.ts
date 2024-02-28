class Casella {
    esMina: boolean;
    revelada: boolean;
    marcada: boolean;

    constructor(esMina: boolean) {
        this.esMina = esMina;
        this.revelada = false;
        this.marcada = false;
    }

    mostrarCasella(): void {
        this.revelada = true; 
    }

    ocultarCasella(): void {
        this.revelada = false; 
    }
    generarMinaAleatoria(): void {
        this.esMina = Math.random() < 0.5; 
    }

    contarMinasAdyacentes(): number {
        let contador = 0;
        return contador;
    }
}
