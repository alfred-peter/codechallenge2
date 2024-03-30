 function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function filterPrimeNumber(numbers) {
    return numbers.filter(num => isPrime(num));
}

let numbers = [11,12,13,14,15,16,17,18,19,20,21];

let primeNumbers = filterPrimeNumber(numbers);
console.log(primeNumbers);