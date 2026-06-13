import { CircleParameters, RectangleParameters, SquareParameters, TriangleParameters } from "./common";

interface Shape {
    area(): number;
    perimeter(): number;
}

class Circle implements Shape {
    constructor(private circleParams: CircleParameters) {}

    area(): number {
        return Math.PI * this.circleParams.radius * this.circleParams.radius;
    }
    perimeter(): number {
        return 2* Math.PI * this.circleParams.radius;
    }
}

class Triangle implements Shape {
    constructor(private triangleParams: TriangleParameters) {}

    area(): number {
        return (this.triangleParams.base * this.triangleParams.height)/2;
    }
    perimeter(): number {
        return this.triangleParams.sideA + this.triangleParams.sideB + this.triangleParams.sideC;
    }
}

class Rectangle implements Shape {
    constructor(private rectangleParams: RectangleParameters) {}

    area(): number {
        return this.rectangleParams.length * this.rectangleParams.width;
    }
    perimeter(): number {
        return 2* (this.rectangleParams.length + this.rectangleParams.width);
    }
}

class Square implements Shape {
    constructor(private squareParams: SquareParameters) {}

    area(): number {
        return this.squareParams.side * this.squareParams.side;
    }
    perimeter(): number {
        return 4 * this.squareParams.side;
    }
}

function calculateTotalArea(shape: Shape): number {
    return shape.area();
}

function calculatePerimeter(shape: Shape): number {
    return shape.perimeter();
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

console.log("Circle Area:", calculateTotalArea(circle));
console.log("Circle Perimeter:", calculatePerimeter(circle));
console.log("----------------------------------------------")
console.log("Triangle Area:", calculateTotalArea(triangle));
console.log("Triangle Perimeter:", calculatePerimeter(triangle));
console.log("----------------------------------------------")
console.log("Rectangle Area:", calculateTotalArea(rectangle));
console.log("Rectangle Perimeter:", calculatePerimeter(rectangle));
console.log("----------------------------------------------")
console.log("Square Area:", calculateTotalArea(square));
console.log("Square Perimeter:", calculatePerimeter(square));