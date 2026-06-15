function identity<T>(arg: T): T {
  return arg;
}

// Explicit type instantiation
const result1 = identity<string>("Hello World"); 

// Automatic type inference (TypeScript infers T is number)
const result2 = identity(42); 