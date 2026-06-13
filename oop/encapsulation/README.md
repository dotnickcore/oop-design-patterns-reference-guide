# Encapsulation
## Definition
Encapsulation is a concept that involves bundling data and methods into one single class so that promotes seperation of concerns and data hiding making it easier to maintain and reuse code.

## What It Solves
Protecting the objects internal state from direct manipulation or access from external code.

## When To Use It
When you want to protect data from unwanted modification.

## Pros
- Data protection and integrity since we are making data private.
- Maintainability meaning that internal code can be modified without affecting any external code.
- Promotes modular code.

## Cons
- It may increase your codebase size.
- It may add to performance time with getter and setter methods.

## Real World Example
An example of abstraction in the real world is an ATM. An ATM wraps your bank balance, account number, PIN number which you can see and perform operations like withdraw, deposit and view balance all in one physical device. There is completely hidden data in the ATM but makes sure that your bank balance is protected when authorization is successful.
