class CaixaEletronico {
    private saldo: number

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial
    }

    // Métodos

    public verSaldo(): number {
        return this.saldo
    }

    // Deposito
    public depositar(amount: number) {
        if (amount > 0) {
            this.saldo += amount
            return
        }
    }

    public sacar(amount: number) {
        if (amount <= this.saldo && amount > 0) {
            this.saldo -= amount
            return
        }
    }

}

const contaBancaria2 = new CaixaEletronico(100.00)

// VER SALDO
console.log(contaBancaria2.verSaldo())

// DEPOSITAR
contaBancaria2.depositar(100)

// SACAR
contaBancaria2.sacar(201)

console.log(contaBancaria2.verSaldo())