# Interface Segregation Principle
## Definition
Liskov Substitution Principle is a concept that states objects shouldn't need to depend on methods that aren't relevant to them. The main focus is to break down a fat interface into smaller specific interfaces.

## What It Solves
It solves the always needing to depend on a big interface when you just need to rely on what interfaces are relevant to a particular solution.

## Pros
- Adhering to this principle will make your code loose in terms of coupling.
- Better testability so that you can focus on the classes that really matter.

## Cons
- Can increase the boilerplate with the additions of smaller interfaces.

## Real World Example
You walk into a resturant. You sit down and you are handed a menu. This isn't a big deal unless you have dietary requirements where you might don't want to see food that you can't eat and simply just want a relevant menu for your specific dietary diets.