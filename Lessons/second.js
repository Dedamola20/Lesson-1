//A code that will return a random letter from your name

  let text1="Mubarakat";
  console.log(text1.charAt(Math.floor(Math.random()*9)));
  console.log(text1.charAt(Math.floor(Math.random()*9)));
  console.log(text1.charAt(Math.floor(Math.random()*9)));
  console.log(text1.charAt(Math.floor(Math.random()*9)));
  //The above code only work for text with 9 characters.

  //How to make it apply to any name or text
    let anyName="Dedamola";
    console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)),anyName.charAt(Math.floor(Math.random()*anyName.length)));
    console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));
    console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));
    console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));

    //IF STATEMENTS
     customerIsBanned=true;
     let soup="Chicken noodles";
     let crackers = true;
     let reply;
     if(customerIsBanned){
        reply=`No order for you`
     }else if(soup && crackers){
        reply=	`HERE IS YOUR ORDER FOR ${soup} $ crackers`;
     }else{
      reply =`We are out of ${soup}`;
     }
     console.log(reply.toUpperCase());

     //Example 2
     let testScore = 89;
     let grade;
     let collegeStudent=true;
     if(testScore >= 90){
      grade='A';
     }else if(testScore >=80){
      grade='B';
     }else if(testScore >=70){
      grade='C';
     }else if(testScore >=60){
      grade='D';
     }else{
            if(collegeStudent){
              grade='U';
            }else{
              grade=""
            }
     }
     console.log(grade);

     //Example3:rock ,paper and scissors

let playerOne = "paper";
let computer = "scissors";
let result;

if (playerOne === computer) {
  result="TIE GAME";
} else if (playerOne === 'rock') {
  if (computer === 'paper') {
    result ="Computer Wins";
  } else {
    result ="Player one wins";
  }
} else if (playerOne === 'paper') {
  if (computer === 'Scissors') {
    result ="Computer Wins";
  } else {
    result ="Player one wins";
  }
} else {
  if (computer === 'rock') {
    result ="Computer Wins";
  } else {
    result ="Player one wins"
  }
}
console.log(result);



