# Dependency Inversion Principle
## Definition
Dependency Inversion is a concept that states high-level modules should not depend on low-level modules because both need to depend on abstraction but abstraction should not depend on its details. High level modules generally contain business logic or workflows and low level modules generally contain all of the detailed implementation features.

## What It Solves
It solves splitting your classed into high level and low level modules. 
- High-level classes should depend on abstractions, not on concrete implementations.
- Low-level classes should also follow abstractions, reducing tight coupling.

## Pros
- Decouples code.
- Better testability.

## Cons
- It ideal for smaller projects.

## Real World Example
It's generally hard to explain what can or can't be a high level or low level module. However, let's say that you are a bird. When you are high in the sky then you are just looking at the landscape around you but you don't know exactly what is going on at ground level. If you want to get a better look at the ground then you need to fly down and analyze the ground from which you couldn't do from above.