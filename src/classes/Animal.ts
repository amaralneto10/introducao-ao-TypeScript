
class Animal {
    // Atribustos
    public name: string
    // Construtor
    constructor(name: string) {
        this.name = name
    }
    // Métodos
    move(): string {
        return `${this.name} se move!`
    }
}

class dog extends Animal {
    // Método
    bark(): string {
        return 'Au Au!'
    }
}

class frog extends Animal {
    move(): string {
        return `${this.name} pula!`
    }
}

const frog1 = new frog('Sapo')

console.log(frog1.move())

const dog1 = new dog("Snoopy")

console.log(dog1.move())
console.log(dog1.bark())