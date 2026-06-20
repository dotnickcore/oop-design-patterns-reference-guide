interface Menu {
    getNonVegetarianMenu(): string[];
    getVegetarianMenu(): string[];
    getDrinksMenu(): string[];
}

class NonVegetarianCustomer implements Menu {
    getNonVegetarianMenu(): string[] {
        return ["Chicken Curry", "Fish Fry", "Mutton Biryani"];
    }

    getVegetarianMenu(): string[] {
        return ["Vegetable Curry", "Paneer Tikka", "Salad"];
    }

    getDrinksMenu(): string[] {
        return ["Water", "Soda", "Juice"];
    }
}

class VegetarianCustomer implements Menu {
    getNonVegetarianMenu(): string[] {
        throw new Error("I can't eat that, i'm vegetarian.");
    }

    getVegetarianMenu(): string[] {
        return ["Vegetable Curry", "Paneer Tikka", "Salad"];
    }

    getDrinksMenu(): string[] {
        return ["Water", "Soda", "Juice"];
    }
}

const nonVegCustomer = new NonVegetarianCustomer();
nonVegCustomer.getNonVegetarianMenu();
nonVegCustomer.getVegetarianMenu();
nonVegCustomer.getDrinksMenu();

const vegCustomer = new VegetarianCustomer();
vegCustomer.getNonVegetarianMenu();
vegCustomer.getVegetarianMenu();
vegCustomer.getDrinksMenu();