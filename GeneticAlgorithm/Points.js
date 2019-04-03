class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.initial = false;
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
        this.points[floor(random(this.points.length))].initial = true;

        return this;
    }
}
