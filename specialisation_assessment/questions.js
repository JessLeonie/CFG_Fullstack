// Algorithm 1

function isPangram(str) {
    // Check if the input is a string
  if (typeof str !== 'string') {
    return "It must be a string";
  }

  // Create an array of each letter in lower case
  str = str.toLowerCase();
  let alphabet = Array(26).fill(false);

  // Iterate through the string
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    // Check if the character is a lowercase letter
    if (charCode >= 97 && charCode <= 122) {
      // Mark the corresponding letter as present
      alphabet[charCode - 97] = true;
    }
  }

  // Check if all letters are present
  return alphabet.every((present) => present);
}

// Example usage:
console.log(isPangram("The quick brown fox jumps over the lazy dog")); 
console.log(isPangram("when zombies arrive, quickly fax Judge Pat"));
console.log(isPangram("we will not allow you to bring your pet armadillo along."));
console.log(isPangram(12356));



// Algorithm 2

function findOddInteger(num1, num2) {
    // Function to count the number of divisions by 4 to make a number odd
    const countDivisionsBy4 = (num) => {
      let count = 0;
      while (num % 2 === 0) {
        num /= 4;
        count++;
      }
      return count;
    };
  
    const count1 = countDivisionsBy4(num1);
    const count2 = countDivisionsBy4(num2);
  
    // Calculate which becomes an odd integer first, else return 0
    if (count1 < count2) {
      return num1;
    } else if (count2 < count1) {
      return num2;
    } else {
      return 0;
    }
  }
  
  // Example usage:
  console.log(findOddInteger(20, 16)); 
  console.log(findOddInteger(36, 60));  
  console.log(findOddInteger(32, 48));