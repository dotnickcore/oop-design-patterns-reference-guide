# TypeScript
The application of SRP in TypeScript is achieved by breaking down large classes into smaller and more manageable classes. Each small class should have a single responsibility.  
A checklist to determine if SRP is needed:
1. Look for outlier methods and turn it into a class
2. Is there logic being mixed?
3. Is there a single role being done for this class?
4. Can they be tested in isolation?
If you said yes, then use SRP.