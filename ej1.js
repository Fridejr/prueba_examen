class Aula {
    constructor(alumnos, materia) {
        this.alumnos = alumnos;
        this.materia = materia;
    }

    mostrar_datos() {
        console.log(this.alumnos, this.materia);
    }
}

class AulaMusica extends Aula {
    constructor(alumnos, materia, instrumento) {
        super(alumnos, materia);
        this.instrumento = instrumento;
    }

    mostrar_datos() {
        console.log(this.alumnos, this.materia, this.instrumento);
    }
}

let aulaMusica1 = new AulaMusica(34, "musica", "clave");