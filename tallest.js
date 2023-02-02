function maxInArray(numbers) {
    //   console.log('In side The Array ' , numbers)
    let largest = numbers[5];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        // const Maximum=Math.max(element);
        // return Maximum;
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const heights = [267, 190, 120, 165, 137,265];
const tallest = maxInArray(heights);

console.log('Tallest Person is ', tallest);