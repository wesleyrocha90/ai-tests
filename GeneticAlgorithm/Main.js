class Main {
    
    rect(x1, y1, x2, y2) {
        canvas.beginPath();
        canvas.moveTo(x1, x2);
        canvas.lineTo(y1, y2);
        canvas.stroke();
    }

    draw() {
        rect(10, 10, backWidth, backHeight);

        // for (let point of map.points) {
        //     circle(point.x, point.y, 5);
        // }

        // let travel = ga.population[0].genes;
        // for (let i = 0, j = 1; j < travel.length; i++, j++) {
        //     let start = travel[i];
        //     let end = travel[j];
        //     line(start.x, start.y, end.x, end.y);
        // }
    }

    constructor() {
        let canvasElement = document.getElementById('canvas');
        this.canvas = canvasElement.getContext('2d'); 

        // map = new Map().initialize();
        // ga = new GA(1, map.points).initialize();

        draw();
    }
}
