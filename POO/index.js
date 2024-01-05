class Arma {
    constructor (nome, dano) {
        this.nome = nome
        this.dano = dano
    }

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
    constructor(nome, dano, chance) {
        super(nome, dano);
        this.chance = chance;
    }

    chanceDeAcerto() {
        return this.randomGenerator();
    }

    randomGenerator() {
        let chance = Math.floor(Math.random() * 101);
        return chance;
    }

    getChanceDeAcerto() {
        return this.chance;
    }

    setChanceDeAcerto(chance) {
        this.chance = chance;
        return this.chance;
    }
}

class ArmaRecarregavel extends ArmaLancavel {
    constructor (nome, dano, chance, proj) {
        super(nome, dano)
        this.chance = chance
        this.proj = proj
    }
}

const ak47 = new Arma('ak47', 30)
console.log(ak47)

const shuryken = new ArmaLancavel('shuryken', 10)
console.log(shuryken)

/* 

--> ArmaLancavel

chanceDeAcerto: int
randomGenerator: Random

ArmaLancavel(String, int, int)

getChanceDeAcerto(): int
setChanceDeAcerto(int): void
getRandomGenerator(): Random
setRandomGenerator(Random): void

--> ArmaRecarregavel

projeteis: int
ArmaRecarregavel(String, int, int, int)
setProjeteis(int): void
getProjeteis(): int


class Animal {
    //atributo
    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    } 

    getName() {
       return this.nome; 
    }

    setName(value) {
        this.nome = value
    }

    getSom() {
        return "Auau"
    }
}

const animal = new Animal("Cachorro", "Preto");

animal.setName("Galinha")

class Cachorro extends Animal {
    
}

class Gato extends Animal{
    constructor(amigo) {
        this.amigo = amigo
    }
    getSom() {
        console.log("miau")
    }
}

const cachorro = new Cachorro()


const gato = new Gato()
const gato2 = new Gato(gato) 

*/