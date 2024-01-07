
let a = 5, b = 2;
// Arethmatic:
//console.log(a + b);
//console.log(a - b);
//console.log(a * b);
//console.log(a / b);
//console.log(a % b); // Modulus (Remainder): how many '2' in '5' = 2 and there is still '1' 
//console.log(a ** b) // a (power to) b 
 a--; // a = a - 1;
//console.log(--a); //4
//console.log(a); //4

// a--; vs --a;

 b++; // b = b+1;
//console.log(b++); // 2
//console.log(b); // 3
// ++b; vs  b++;

// Assignment Operators:

let n = a;
let w = b;
// console.log(n, w);

n += 3; // n = n + 3;  n:7

w -= 1; // w = w - 1; w:2

n *= w; // n = n * w; n:14 

n /= w; // n = n / w; n: 7;

n **= w; // n = n ** w; n:49;

n %= w; // n = n % w ;  n:1;



// console.log(n);


// Boolean ( Logical ) Operators

let t = true, f = false;

// true: 1 , false: 0

// console.log(t && t); // true
// console.log(t && f); // false
// console.log(f && t); // false
// console.log(f && f); // false


// console.log(t || t); // true
// console.log(t || f); // true
// console.log(f || t); // true
// console.log(f || f); // false



//console.log(!t); // flase
//console.log(!f); // true 

//const xor = (x, y) => (x && b) || (!x && b);

// console.log(t xor t); // false
// console.log(t xor f); // true
// console.log(f xor t); // true
// console.log(f xor f); // false



// Comparsion Operators


// console.log(5 < "10"); // true

// console.log(10 == "10"); // : true , equal value

// console.log(10 === "10"); // false : equal value and equal type

// console.log(5 != "5"); // false: not equal value

// console.log(5 !== "5"); // true : not equal value or not equal type

// console.log(2 <= 2) // true

// console.log(2 >= 2) // true
