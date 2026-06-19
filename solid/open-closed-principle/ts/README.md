# TypeScript
The application of Open/Closed in TypeScript is achieved by abstraction or interfaces.  
A checklist to determine if Open/Closed is needed:
1. Can I introduce a new feature by only adding new code without touching the preexisting code?
2. Would adding that new feature require me to modify multiple files?
3. Are there conditional statements that dictate behaviour based on types or states?