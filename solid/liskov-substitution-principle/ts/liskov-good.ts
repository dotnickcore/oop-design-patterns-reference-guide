interface Bird {
    eat(): void;
}

interface FlyingBird extends Bird {
    fly(): void;
}

class Magpie implements FlyingBird {
    constructor() { }

    eat(): void {
        console.log("Chomp chomp");
    }

    fly(): void {
        console.log("Up to Magpies we are going to win the next primeriship");
    }
}

class Emu implements Bird {
    constructor() {}

    eat(): void {
        console.log("Chomp chomp");
    }
}

const magpie = new Magpie();
magpie.eat();
magpie.fly();

const emu = new Emu();
emu.eat();