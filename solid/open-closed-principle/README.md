# Open/Closed Principle
## Definition
Open/Closed Principle is a concept that ensures something like a class, function or module should be open for extension but closed for modification. This means when open the behaviour can be extended for new features but closed for modification when tested.

## What It Solves
It solves the always needing to modify exisiting code for a new feature when you can simply allow extension.

## Pros
- Greater scalability when new features just requires new classes as opposed to a long chain of if-else statements.
- Safety because you don't have to modify the already exisiting code.

## Cons
- Can risk overengineering if you create classes that are confusing.

## Real World Example
Imagine you have a class called PaymentProcessor that processes payments for an online store. Initially, the PaymentProcessor class only supports processing payments using credit cards. However, you want to extend its functionality to also support processing payments using PayPal.