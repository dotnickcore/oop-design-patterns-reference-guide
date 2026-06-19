interface Customer {
    giveDiscount(): number;
    addLoyaltyPoints(amountSpent: number): number;
}

class RegularCustomer implements Customer {
    constructor() {}

    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent;
    }

    giveDiscount(): number {
        return 10;
    }
}

class PremiumCustomer implements Customer {
    constructor() {}

    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent * 2;
    }

    giveDiscount(): number {
        return 20;
    }
}

class GoldCustomer implements Customer {
    constructor() {}

    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent * 3;
    }

    giveDiscount(): number {
        return 30;
    }
}

class Discount {
    giveDiscount(customer: Customer): number {
        return customer.giveDiscount();
    }
}

let premiumCustomer: PremiumCustomer = new PremiumCustomer;
let discount: Discount = new Discount();
console.log(discount.giveDiscount(premiumCustomer));