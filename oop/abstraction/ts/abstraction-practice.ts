abstract class DateHelper {
    abstract GetYear(): number;
    abstract GetMonth(): number;
    abstract GetDay(): number;

    printDate(): void {
        console.log(`${this.GetDay()}/${this.GetMonth()}/${this.GetYear()}`)
    }
}

class CurrentDate extends DateHelper {
    constructor(private date: Date) { super(); }

    GetYear(): number {
        return this.date.getFullYear()
    }
    GetMonth(): number {
        return this.date.getMonth()+1;
    }
    GetDay(): number {
        return this.date.getDate();
    }
}

const currentDate = new CurrentDate(new Date());
currentDate.printDate();

const christmasDate = new CurrentDate(new Date("2026-12-25"));
christmasDate.printDate();