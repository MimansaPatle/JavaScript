/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

a = Math.random();
if (a <0.1) {
    
        function  sum(a, b) {
            return a - b; // Faulty addition
        }

        function  multiply(a, b) {
            return a + b; // Faulty multiplication
        }
        function  subtract(a, b) {
            return a / b; // Faulty subtraction
        }
        function  divide(a, b) {
            return a ** b; // Faulty division
        }
    }
    
    result1=sum(5, 3);
    result2=multiply(5, 3);
    result3=subtract(5, 3);
    result4=divide(5, 3);
    
    console.log("sum of two numbers is: " + result1);
    console.log("multiplication of two numbers is: " + result2);
    console.log("subtraction of two numbers is: " + result3);
    console.log("division of two numbers is: " + result4);

