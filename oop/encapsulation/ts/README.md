# TypeScript
The application of Encapsulation in TypeScript is achieved through access modifiers. This may include private, public, protected and readonly.  

1. Public: Accessed from anywhere without restrictions. If you do not specify a modifier, TypeScript automatically treats the member as public.
2. Private: Visible only within the class where they are defined. They cannot be accessed from outside the class or from any child classes that inherit from it.
3. Protected: Act like private members but can be accessed by subclasses (child classes). They still cannot be accessed from outside the class hierarchy.
4. Readonly: Promotes immutability (ability to not be changed) after initialization.
