class GA {

    constructor (points) {
        this.points = points.slice();
        this.populationSize = 10;
        this.population = [];

    }

    initialize() {
        for(let i = 0; i < this.populationSize; i++) {
            this.population.push(shuffle(this.points.slice()));
        }

        return this;
    }
}