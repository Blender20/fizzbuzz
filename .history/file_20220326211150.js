for (var i = 1; i < 101; i++) { //this will run the numbers from 1 to 101
    if (i % 15 == 0) console.log("fizzBuzz");// This will divide the number by modules 15
    else if (i % 3 == 0) console.log("fizz");
    else if (i % 5 == 0) console.log("buzz");
    else console.log(i);
}