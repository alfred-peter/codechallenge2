function generatearray(start, end) {

let result = [];

for (let i = start; i <= end; i++) {
    result.push(i);
}
return result;

}
let result = generatearray(1,10)
console.log(result);