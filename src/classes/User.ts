
class User {
    // Atributos
    name: string
    age: number

    // Construtor
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }


    // Métodos
    greet(): string {
        return `Olá, sou o ${this.name}`
    }

}

// Uso
const user1 = new User('Amaral', 27)
const user2 = new User('Felipe', 28)

console.log(user1.name)
console.log(user1.age)
console.log(user1.greet())
console.log(user2.greet())