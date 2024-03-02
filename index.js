// Function to calculate yield percentage
function calculateYield(initialValue, finalValue) {
    // Calculate the yield (final value - initial value)
    const yieldValue = finalValue - initialValue;

    // Calculate the yield percentage (yield / initial value * 100)
    const yieldPercentage = (yieldValue / initialValue) * 100;

    // Return the yield percentage
    return yieldPercentage;
}

// Example usage:
const initialValue = 1000; // Initial investment value
const finalValue = 1500; // Final value after some time

// Calculate the yield percentage
const yieldPercentage = calculateYield(initialValue, finalValue);

// Output the result
console.log("The yield percentage is:", yieldPercentage.toFixed(2) + "%");
