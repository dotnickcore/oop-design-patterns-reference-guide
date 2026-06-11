# Abstraction
## Definition
Abstraction is a concept that involves hiding the implementation of a system and expose only the essentials to a user.
It allows developers to focus on the core functionality of a component without being overly concerned about the underlying complexlity of the code.


## What It Solves
Managing complexity by hiding non-essential details of a component.

## When To Use It
When you want the common behaviour of a component to be shared among other classes.

## Pros
- Reduces complexity by hiding low-level implementation.
- Code security to prevent unauthorized access to internal data and methods.
- Reusability

## Cons
- Debugging difficulty since it may hide what you may want tested.
- May add an extra layer of indirection

## Real World Example
An example of abstraction in the real world is a microwave and the action of heating food. You put food in, you shut the door, you press some buttons to set the timer, you press start, you wait X time and done. Well our food is cooking but we don't really need to know what happens as the cooking process happens we just want to know if our food is cooked or not.
