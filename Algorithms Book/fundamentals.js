// Create function ThreesFives() that adds each value from 100 and 4000000 (inclusive) if that value is even fivisible but not both. Display the final sum in the console.
function ThreesFives()
{
    var num = 100;
    var sum = 0;
    while (num <= 4000000) {
        if(num % 3 == 0 || num % 5 == 0) {
            sum += num;
        }
        num++;
    }
    console.log(sum);
}
// ThreesFives()
// Change your function to make a BetterThreesFives(start, end) where start and end values are customizable. You can think of the above ThreesFives() function as BetterThreesFives(100, 4000000)
function BetterThreesFives(start, end)
{
    var num = start;
    var sum = 0;
    while (num <= end) {
        if(num % 3 == 0 || num % 5 == 0) {
            sum += num;
        }
        num++;
    }
    console.log(sum);
}
// BetterThreesFives(100, 4000000)

// Implement generateCoinChange(cents) that accepts a parameter for the number of cents, and computes how to represent that amount with the smallest number of coins.
function generateCoinChange(cents)
{
    var quarter = 25;
    var dime = 10;
    var nickel = 5;
    var penny = 1;
    
}