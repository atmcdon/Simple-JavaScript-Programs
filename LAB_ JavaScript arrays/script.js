// Put your solution here
function divideArray(numbers) {
let evenNums = [];
let oddNums = [];

    for (let num of numbers){
        if (num % 2 === 0) {
            evenNums.push(num);

        }
        else {
            oddNums.push(num);
        }
    }
    evenNums.sort(function(a, b) {
        return a-b;
    });
    oddNums.sort(function(a, b) {
        return a- b;
    });

    console.log("Even numbers:");
    if (evenNums.length ===0){
        console.log("None");
    }
    else{
        for (let num of evenNums) {
            console.log(num);
        }
    }
    console.log("Odd numbers:");
    if (oddNums.length ===0){
        console.log("None");
    }
    else{
        for (let num of oddNums) {
            console.log(num);
        }
    }

}
