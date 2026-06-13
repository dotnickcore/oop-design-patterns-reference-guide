class BankAccount {
    private _balance: number;

    constructor(initialBalance: number) {
        this._balance = initialBalance;
    }

    public get balance(): number {
        return this._balance;
    }

    public deposit(amount: number): void {
        if (amount < 0) {
            console.log("Invalid deposit amount");
            return;
        }

        this._balance += amount;
    }

    public withdraw(amount: number): void {
        if (amount < 0) {
            console.log("Invalid withdrawal amount");
            return;
        }

        if ((this._balance - amount) < 0) {
            console.log("Insufficient funds");
            return;
        }

        this._balance -= amount;
    }
}

const userAccount = new BankAccount(1000);
console.log(userAccount.balance);
userAccount.deposit(500);
console.log(userAccount.balance);
userAccount.withdraw(1000);
console.log(userAccount.balance);