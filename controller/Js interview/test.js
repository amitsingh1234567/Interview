// 1. Define a prototype object
const vehiclePrototype = {
  wheels: 4,
  drive() { return "Vroom!"; }
};

// 2. Create an object inheriting from the prototype
const myCar = Object.create(vehiclePrototype);

// 3. Assign a direct property (own property) to the instance
myCar.color = "crimson";

// --- The Existence Checks ---

// Check A: Direct Property
console.log(Object.hasOwn(myCar, "color"));  // true (Exists directly on myCar)

// Check B: Inherited Property
console.log(Object.hasOwn(myCar, "wheels")); // false (Belongs to prototype chain)
console.log(Object.hasOwn(myCar, "drive"));  // false (Belongs to prototype chain)

// Check C: Completely Missing Property
console.log(Object.hasOwn(myCar, "wings"));  // false

console.log("wheels" in myCar);               // true  (Checks the full chain)
console.log(Object.hasOwn(myCar, "wheels")); // false (Checks direct object only)

