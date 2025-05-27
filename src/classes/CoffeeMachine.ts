
abstract class CoffeeMachine {
    abstract brew(): void

    prepareCoffee(): void {
        this.fire()
        this.heatWater()
        this.brew()
    }

    private fire(): void{
        console.log("Ligando o fogo!")
    }

    private heatWater(): void {
        console.log("Aquecendo água...")
    }
}

class EspressoMachine extends CoffeeMachine {
    brew(): void {
        console.log("Extraindo espresso...")
    }
}

const coffee1 = new EspressoMachine()

coffee1.prepareCoffee()
coffee1.brew()
