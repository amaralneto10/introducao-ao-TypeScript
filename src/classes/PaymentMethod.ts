
abstract class PaymentMethod {

    abstract processPayment(amount: number): string;

}


class Credidtcard extends PaymentMethod {
    processPayment(amount: number): string {
        return `Pagamento de R$${amount} via Cartão de Crédito!`
    }
}

class Pix extends PaymentMethod {
    processPayment(amount: number): string {
        return `Pagamento de R$${amount} via Pix!`
    }
}

const creditPayment = new Credidtcard()
const pixPayment = new Pix()

console.log(creditPayment.processPayment(300))
console.log(pixPayment.processPayment(600))





