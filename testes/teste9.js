function increaseAcceleration(initialAcceleration, increment) {
    let acceleration = initialAcceleration;
    
    return function() {
        acceleration += increment;
        return acceleration;
    };
}

// Usage example
const incrementAcceleration = increaseAcceleration(5, 2);
console.log(incrementAcceleration()); // Output: 7
console.log(incrementAcceleration()); // Output: 9
console.log(incrementAcceleration()); // Output: 11