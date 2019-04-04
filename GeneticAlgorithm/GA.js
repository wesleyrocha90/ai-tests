class Element {
    constructor(genes, fitness) {
        this.genes = genes;
        this.fitness = fitness;
    }

    mutate() {
        return this;
    }
}

class GA {

    constructor (iterations, points) {
        this.iterations = iterations;
        this.points = points.slice();
        this.populationSize = 10;
        this.population = [];
    }

    initializePopulation() {
        for(let i = 0; i < this.populationSize; i++) {
            this.population.push(new Element(shuffle(this.points.slice())));
        }
    }

    calculateFitness() {
        for (let k = 0; k < this.populationSize; k++) {
            let population = this.population[k];
            let fitness = 0;
            for (let i = 0, j = 1; j < population.genes.length; i++, j++) {
                let start = population.genes[i];
                let end = population.genes[j];
                fitness += start.distance(end);
            }
            this.population[k].fitness = fitness;
        }
    }

    initializeNewPopulation() {
        let newPopulation = [];
        let oldPopulation = this.population.slice();
        this.population = oldPopulation.sort((a, b) => a.fitness - b.fitness);
        for (let i = 0; newPopulation.length < this.populationSize; i++) {
            for (let j = 0; newPopulation.length < this.populationSize && j < 2; j++) {
                newPopulation.push(oldPopulation[j].mutate());
            }
        }
        // this.population = newPopulation;
    }

    initialize() {
        this.initializePopulation();
        this.calculateFitness();
        this.printPopulationFitness();

        let count = 0;
        while (count < this.iterations) {
            this.initializeNewPopulation();
            this.calculateFitness();
            this.printPopulationFitness();
            count++;
        }
        return this;
    }

    printPopulationFitness() {
        for (let i = 0; i < this.populationSize; i++) {
            console.log(this.population[i].genes + ' - ' + this.population[i].fitness);
        }
        console.log('=============================================================================');
    }
}