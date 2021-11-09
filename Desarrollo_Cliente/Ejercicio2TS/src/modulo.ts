
export class OperacionesBasicas {
    numUno:number;
    numDos:number;

    constructor(numeroUno:number,numeroDos:number){
        this.numUno=numeroUno;
        this.numDos=numeroDos;
    }

    sumar(){
        return this.numUno+this.numDos;
    }

    restar(){
        return this.numUno-this.numDos;
    }
    multiplicar(){
        return this.numUno*this.numDos;
    }
    dividir(){
        return this.numUno/this.numDos;
    }
}

