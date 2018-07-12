// Author: FirstName LastName
let readline = require("readline-sync");
console.log();
console.log("*****************************************************************");
console.log("                          HAUNTED HOUSE");
console.log("                 A game by Hamzah Saleh");
console.log("*****************************************************************");
console.log("You are standing in front of a spooky haunted house.");
console.log("You hear what sounds like screaming coming from inside the house.");

  let points = 4;
console.log(" points = " + points)
  let enterHouse = readline.question("Will you enter the house? (yes or no) ");
if( enterHouse === "yes") {
  let doorOpen = readline.question("You see a door open to a hallway, will you go in");
  if ( doorOpen === "yes");
} else {
  points--;
  console.log("points = " +points);
}
  {
  console.log("you see a little girl");
  let girl = readline.question("will you aproach the little girl");
  console.log("The girl looks and speaks to you,")
}

 if ( girl === "yes" ) {
  let age = Number(readline.question("How old are you, please be honest "))
}
  if ( age == 13 || age == 14 || age == 15 || age == 16 || age ==17 ) {

   console.log("The girl asks you to play with her")
   let play = readline.question("Will you play with me!!???????????")

  }

  else { points--;
    console.log("points = " +points);
  }
    if ( play === "yes") {

      console.log("the girl gives you a rusty knife")
      let bowl = readline.question ("the girls asks you to play catch with knife - will you throw her the knife");
    }
    if ( bowl === "yes")         {
           console.log(" How hard will you throw the knife")
           let knife = readline.question("will you throw the knife hard or soft")
    }



    if ( knife === "soft"){
      console.log("💀💀💀💀💀💀💀💀The grils catches the knife, reveals her demonic face and kills you with it💀💀💀💀💀💀💀💀💀")
      points = 0;
      console.log("points = " +points)

    } 
     else if (knife === hard) { console.log("The knife is thrown hard, so it impales her body and kills her, ")
     console.log("the little girls deceased body turns to ashes revealing her true form as a demon")
     console.log("✌️✌️✌️✌️✌️✌️✌️✌️✌️✌️✌️✌️✌️✌️✌️✌️YOU WIN THE GAME ✌️✌️✌️✌️✌️✌️✌️✌️✌️")
     console.log("Thank You For playing")

     }






//console.log("Thanks for playing!");
