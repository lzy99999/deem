function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

const result = fibonacci(10);
console.log("斐波那契数列的前10项：");
console.log(result);    
