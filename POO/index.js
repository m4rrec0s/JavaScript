class Arma {
    constructor (nome, dano) { //parametros//
        this.nome = nome
        this.dano = dano
    }

    ///////////////////////
    //      métodos     //
    //////////////////////

    getNome () {
        return this.nome
    }

    setNome (value) {
        this.nome = value
    }

    getDano () {
        return this.dano
    }

    setDano (value) {
        this.dano = value
    }

}

class ArmaLancavel extends Arma {
    
    constructor(nome, dano, chance) {   //parametros//
        super(nome, dano)
        this.chance = chance
    }

    //////////////////////
    //      métodos     //
    //////////////////////

    chanceDeAcerto() {
        this.chance = this.randomGenerator()
    }

    randomGenerator() {
        return Math.floor(Math.random() * 101)
    }

    getChanceDeAcerto() {
        return this.chance
    }

    setChanceDeAcerto(int) {
         this.chance = int
    }

}

class ArmaRecarregavel extends ArmaLancavel {
    constructor (nome, dano, chance, proj) { //parametros//
        super(nome, dano, chance)
        this.proj = proj
    }

    //////////////////////
    //      métodos     //
    //////////////////////


    setProjeteis(int) {
        this.proj = int
    }

    getProjeteis() {
        return this.proj
    }

}

    //////////////////////
    //       testes     //
    //////////////////////

const shuryken = new ArmaLancavel('shuryken', 10, 0)
shuryken.chanceDeAcerto()
console.log(shuryken)

const lança = new ArmaLancavel('Lança', 25, 0)
lança.chanceDeAcerto()
console.log(lança)

const pistola = new ArmaRecarregavel('pistola', 45, 0, 6)
pistola.chanceDeAcerto()
console.log(pistola)

const ak47 = new ArmaRecarregavel('ak47', 30, 0, 20)
ak47.chanceDeAcerto()
console.log(ak47)

const P90 = new ArmaRecarregavel('P90', 35, 0, 30)
P90.chanceDeAcerto()
console.log(P90)