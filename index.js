//Javascript comments And datatypes,Javascript comments are basically notes.
//DATA TYPES: There are four basic data types
// 1) string:it can be double qoutes or single quotes e.g "Bimbo" or 'Bimbo';
// Typeof can be used to determine the type of datatype e.g typeof 42 returns number on the console
//Declaring variables ;const,let e.g
//  let myVariable;  //This is undefined
//  typeof myVariable; //returns string but when its defined e.g
  myVariable = 34; //typeof returns number

//  //ADDITION e.g
   let myNumber = 34;
  //  myNumber + 2 =  36;
   myVariable = "DEDA";
   //myNumber + myVariable = 34DEDA IT treats it as a string

   //String Methods E.G length property 
   const myLetter = "MATHEMATICS";
   console.log(myLetter.length); // 11
   console.log("Everybody is a good person".length);//26
   console.log(myLetter.charAt(5)); //M
   console.log(myLetter.indexOf('ATI')); //MAT RETURNS 0,AT RETURNS 1,ATI returns 6
   console.log(myLetter.lastIndexOf("AT"));// AT returns 6 looks for the last occurence of 6
   console.log(myLetter.slice(5,9));//returns MATI (5,6) returns only M (5,2) returns undefined,it doesnt return the character at the end
   console.log(myLetter.toLowerCase());
   console.log(myLetter.includes("div"));//false
   console.log(myLetter.includes("MAT"));//TRUE
   console.log(myLetter.split("E")); //returns an array  i.e ["MATH" ["MATICS"] 2
   console.log(myLetter.split(""));// SPLITS ALL 11

   //NUMBERS AND NUMBERS METHODS
    const myOtherNumber = 40;
    const myFloat= 40.0;
    const myString= "40.123abc";
    console.log(myOtherNumber===myFloat); //checks if it is the same and the data type and returns true
    console.log(myOtherNumber===myString);//false because the datatype is different
    console.log(myString + 3);//returns 403
    console.log(Number(myString)+ 3);//43
    console.log(Number(myString)===myOtherNumber);//true
    console.log(Number("DAVE"));//returns NaN Undefined returns NaN ,true returns 1,false returns 0
    console.log(Number.isInteger(myString));//returns false
    console.log(Number.parseFloat(myString));//returns 40.123
    console.log(Number.parseFloat(myString).toFixed(2));//returns 40.12
    console.log(typeof myFloat.toString()); //returns string
    console.log(Number.parseFloat("4.23456abc").toFixed(2).toString());//returns 4.23

      //MATH METHODS

        console.log(Math.PI);//returns value of PI which is 3.141592653589793
        console.log(Math.trunc(Math.PI));//RETURNS 3
        console.log(Math.round(3.3456));//RETURNS 3 to 3.5 it returns 4
        console.log(Math.ceil(Math.PI));//RETURNS 4
        console.log(Math.floor(Math.PI));//RETURNS 3
        console.log(Math.pow(2,10));//RETURNS 1024
        console.log(Math.min(2,10,7));//RETURNS lowest number i.e 2
        console.log(Math.max(2,10,11.2));//RETURNS large no i.e 11.2
        console.log(Math.random());//RETURNS random decial numbers from 0-1
        console.log(Math.floor(Math.random()*10)+1);//RETURNS random decial numbers from 0-10,without adding one it returns a number from 0-9
        
        











   
 
  
