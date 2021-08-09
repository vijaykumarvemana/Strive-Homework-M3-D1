/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sumOfTwoNumbers = function (num1, num2){
    if (num1 === num2){
        return  3*(num1 + num2)
    } else{
        return (num1 + num2)
    }
    
}
console.log(sumOfTwoNumbers(2,3))

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const twoGivenNumbers = function (number1, number2){
    if ((number1===50 && number2===50 ) || (number2+number2 === 50)){
        return true
    }
}
console.log(twoGivenNumbers(50, 25))
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removeCharacter = function (string, char_position){
    part1 = string.substring(0, char_position)
    part2 = string.substring(char_position + 1, string.length)
    return  part1 + part2
}
console.log(removeCharacter("Strivers", 3))

/*

4)
 Create a function to find the largest of three given integers.
*/
const largerInterger = function(int1, int2, int3){
    if (int1 >= int2 && int1 >= int3){
        return int1
    }else if(int2 >= int3 && int2 >= int1){
        return int2
    } else{
        return int3
    }
}
console.log(largerInterger(35,300,503))

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const rangeNumbers = function (num11 ,num22){
    if ((num11 >= 40 && num11 <= 60 && num22 >= 40 && num22 <= 60) || (num11 >= 70 && num11 <= 100 && num22 >= 70 && num22 <= 100)){
          return true
    }else{
        return false
    }

}
console.log(rangeNumbers(55, 60))

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
const stringCopy = function(str , num){
    if (num < 0 ){
      return false
    }else{
        return str.repeat(num)
    }
}
console.log(stringCopy("Strive", 6))
console.log(stringCopy("Strive", -2))

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const cityName = function (city){
    if (city.length >= 3 && ((city.substring(0, 3) == 'Los')
                          || (city.substring(0, 3) == 'New')))
   
      {
          return city
    }

  return ''
}
console.log(cityName("New York"))
console.log(cityName("Los Vegas"))
console.log(cityName("Rome"))


/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const sumOfThree = function(array){
    return (array[0] + array[1] + array[2])
}
console.log(sumOfThree([23, 55, 75]))

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const test = function (arr){
    if (arr.indexOf(1) != -1 || arr.indexOf(3) != -1){
        return true
     } 
     else
     {
        return false
}
}
 console.log(test([1, 3]))
 console.log(test([4, 3]))
 console.log(test([5, 6]))
/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3*/
const test2 = function (arr){
    if (arr.indexOf(1) == -1 && arr.indexOf(3) == -1){
        return true
     } 
     else
     {
        return false
}
}
 console.log(test2([1, 3]))
 console.log(test2([4, 3]))
 console.log(test2([5, 6]))
/*
11)

Create a function to find the longest string from a given array of strings.
*/
const arr1 = [
    'first item',
    'second item is longer than the third one',
    'third longish item'
  ]
  
  let stringLength = 0
  let longestString
  const longestStringOfArray = function(){
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].length > stringLength) {
            stringLength = arr1[i].length;
            longestString = arr1[i];
        }
      }
      console.log(longestString)
  }
  
  longestStringOfArray()
  
  
  
/*
12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.*/

const angles = function(angle){
    if(angle < 90){
        return "Acute angle"
    }
    else if(angle === 90){
        return "right angle"
    }else if(angle < 180){
        return "Obtuse angle"
    }else{
        return "Stright angle"
    }
}
console.log(angles(180))
console.log(angles(90))
console.log(angles(120))
console.log(angles(45))
/*
13)

Create a function to find the index of the greatest element of a given array of integers
*/
 const indexOfMax = function(arrs) {
    if (arrs.length === 0) {
        return -1
    }
    let max = arrs[0]
    let maxIndex = 0

    for (let i = 1; i < arrs.length; i++) {
        if (arrs[i] > max) {
            maxIndex = i
            max = arrs[i]
        }
    }

    return maxIndex;
}

console.log(indexOfMax([1,7, 67,690,276,23456]))
/*
14)

Create a function to get the largest even number from an array of integers.*/

const maxEvenArray = function(earr1){
    
  earr1.sort( function(a, b){
      return b- a
    }
  )

  for (let i = 0; i < earr1.length; i++) {
    if (earr1[i] % 2 == 0)
      return earr1[i]
    }
}
console.log(maxEvenArray([56, 44, 22, 675, 24, 46]))
/*

16)

Create a function to check from two given integers, whether one is positive and another one is negative.
*/
const positive_negative = function(x, y){
  if ((x < 0 && y > 0) || x > 0 && y < 0) 
  {
    return true
  }
  else 
  {
    return false
  }
}
console.log(positive_negative(5, 6))
console.log(positive_negative(-4, 2))
console.log(positive_negative(2, -4))
console.log(positive_negative(-7, -9))

/*
17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/
const upperLowerCase = function(strul){
    if (strul.length < 3) {
        return strul.toUpperCase();
      }
      part1 = (strul.substring(0, 3)).toLowerCase();
      part2 = strul.substring(3, strul.length);  
      return part1 + part2;
}

console.log(upperLowerCase("hi"))
console.log(upperLowerCase("STRIVERS"))
console.log(upperLowerCase("STRINGS"))
/*
18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/

const sumOfRangeInterger = function(inte1, inte2){
    let sum = inte1 + inte2
    if (sum >=50 && sum <= 80 ){
        return 65
    } else{
        return 80
    }
}
console.log(sumOfRangeInterger(57, 4))
console.log(sumOfRangeInterger(57, 50))
/*
19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/
const factors = function(int){

    let array = []
    for(let i = 1; i <= int; i++) {

        // check if number is a factor
        if(int % i == 0) {
            array.push(i)
        }
}
console.log(array)
    for(let i=0; i < array.length; i++ ){
        if(array.indexOf(i) !== 3 || array.indexOf(i) !== 5){
            return "DiegoRiccardo"
    }else if(array.indexOf(i) !== 3){
        return "Diego"
    }else if(array.indexOf(i) !== 5){
    return "Riccardo"
}
}
}

console.log(factors(28))



/*


20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC*/
const abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0].charAt(0) + " " + split_names[1].charAt(0) + " " + split_names[2].charAt(0));
    }
    return split_names[0];
};
console.log(abbrev_name("British Broadcasting Corporation"));


