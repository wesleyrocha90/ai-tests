let width = 600;
let height = 600;
let backWidth = 500;
let backHeight = 500;
let map;
let ga;

function setup() {
    createCanvas(width, height);

    map = new Map().initialize();
    ga = new GA(1, map.points).initialize();
}

function draw() {
    rect(10, 10, backWidth, backHeight);

    for (let point of map.points) {
        circle(point.x, point.y, 5);
    }

    let travel = ga.population[0].genes;
    for (let i = 0, j = 1; j < travel.length; i++, j++) {
        let start = travel[i];
        let end = travel[j];
        line(start.x, start.y, end.x, end.y);
    }
}