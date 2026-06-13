import { CircleParameters, RectangleParameters, SquareParameters, TriangleParameters } from "./common";

abstract class Shape { // abstract class
    abstract calculateArea(): number; // abstract member
    abstract calculatePerimeter(): number; // abstract member
    
    displayArea(): void {
        console.log(`${this.calculateArea()}`);
    }

    displayPerimeter(): void {
        console.log(`${this.calculatePerimeter()}`);
    }
}

class Circle extends Shape {
    constructor(private circleParams: CircleParameters) {
        super();
    }

    calculateArea(): number {
        return Math.PI * this.circleParams.radius * this.circleParams.radius;
    }

    calculatePerimeter(): number {
        return 2* Math.PI * this.circleParams.radius;
    }
}

class Triangle extends Shape {
    constructor(private triangleParams: TriangleParameters) {
        super();
    }

    calculateArea(): number {
        return (this.triangleParams.base * this.triangleParams.height)/2;
    }

    calculatePerimeter(): number {
        return this.triangleParams.sideA + this.triangleParams.sideB + this.triangleParams.sideC;
    }
}

class Rectangle extends Shape {
    constructor(private rectangleParams: RectangleParameters) {
        super();
    }

    calculateArea(): number {
        return this.rectangleParams.length * this.rectangleParams.width;
    }

    calculatePerimeter(): number {
        return 2* (this.rectangleParams.length + this.rectangleParams.width);
    }
}

class Square extends Shape {
    constructor(private squareParams: SquareParameters) {
        super();
    }

    calculateArea(): number {
        return this.squareParams.side * this.squareParams.side;
    }

    calculatePerimeter(): number {
        return 4 * this.squareParams.side;
    }
}

const circle = new Circle({
    radius: 4
});

const triangle = new Triangle({
    base: 2,
    height: 5,
    sideA: 3,
    sideB: 4,
    sideC: 5
});

const rectangle = new Rectangle({
    length: 5,
    width: 2
});

const square = new Square({
    side: 4
});

circle.displayArea();
circle.displayPerimeter();
console.log("----------------------------------------------")
triangle.displayArea();
triangle.displayPerimeter();
console.log("----------------------------------------------")
rectangle.displayArea();
rectangle.displayPerimeter();
console.log("----------------------------------------------")
square.displayArea();
square.displayPerimeter();