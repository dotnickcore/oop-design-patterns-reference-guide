# TypeScript
The application of Liskov Substitution in TypeScript is achieved by abstraction or interfaces. These are then broken down into smaller subclasses that don't break any functionality.    
A checklist to determine if Liskov Substitution is needed:
1. Do subsclasses have the potential to throw errors?
2. Are subclasses suffering due to a lack of flexibility?
3. Are you depending too much on the base when you can simply try and break that down?