interface BadBird {
    fly(): void;
}

class Eagle implements BadBird {
    constructor() {}

    fly(): void {
        console.log("Fly like an Eagle, let my spirit carry me");
    }
}

class Ostrich implements BadBird {
    constructor() {}

    fly(): void {
        throw new Error("I can't actually fly mate.");
    }
    
}

const eagle = new Eagle();
eagle.fly();

const ostrich = new Ostrich();
ostrich.fly();