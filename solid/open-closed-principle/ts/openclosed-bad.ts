class BadDiscount {
    giveDiscount(customerType: "premium" | "regular"): number {
        if (customerType = "regular") {
            return 10;
        } else if (customerType = "premium") {
            return 20;
        } else {
            return 10;
        }
    }
}