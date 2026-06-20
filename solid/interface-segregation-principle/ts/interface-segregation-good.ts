interface Print {
    print(): void;
}

interface Scan {
    scan(): void;
}

interface Fax {
    fax(): void;
}

class EconomicPrinter implements Print {
  print() {
    console.log("Printing document...");
  }
}

class MultiFunctionOfficeJetPrinter implements Print, Scan, Fax {
  print() { console.log("Printing..."); }
  scan() { console.log("Scanning..."); }
  fax() { console.log("Faxing..."); }
}

const ecoPrinter = new EconomicPrinter();
ecoPrinter.print();

const multiFunctionPrinter = new MultiFunctionOfficeJetPrinter();
multiFunctionPrinter.print();
multiFunctionPrinter.scan();
multiFunctionPrinter.fax();