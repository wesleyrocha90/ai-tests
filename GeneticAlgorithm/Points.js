class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distance(other) {
        let a = Math.pow(other.x - this.x, 2);
        let b = Math.pow(other.y - this.y, 2);
        let c = Math.sqrt(a + b);
        return c;
    }

    toString() {
        return this.x + ',' + this.y;
    }
}


class Map {
    constructor() {
        this.citiesAmount = 10;
        this.points = [];
    }

    initialize() {
        for (let i = 0; i < this.citiesAmount; i++) {
            this.points.push(new Point(floor(random(backWidth)), floor(random(backHeight))));
        }
        return this;
    }
}
