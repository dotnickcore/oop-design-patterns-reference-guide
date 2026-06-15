function combine(a: string, b: string): string;
function combine(a: number, b: number): number;

// 2. Implementation Signature (Runtime)
function combine(a: any, b: any): any {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b); // String logic
  }
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;       // Math logic
  }
  throw new Error("Invalid arguments passed.");
}

const text = combine("Hello ", "World");
const sum = combine(10, 5); 