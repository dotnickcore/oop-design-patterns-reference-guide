# Liskov Substitution Principle
## Definition
Liskov Substitution Principle is a concept that states that objects of a superclass should be replaceable and objects of a subclass shouldn't break anything.

## What It Solves
It solves the always needing to modify exisiting code for a new feature when you can simply allow extension.

## Pros
- Reduces a long chain of conditonal statements and type checking.
- When a base class is created with a subclass, you can simply swap out any interchangable classes without breaking anything.

## Cons
- Can increase the boilerplate with the additions of specific interfaces and abstractions.

## Real World Example
You have two birds. One is a magpie and the other is an emu. Both are birds that can eat but one can fly and the other can't. So instead of forcing an emu to fly. You just let it eat but allow the magpie to eat and fly.