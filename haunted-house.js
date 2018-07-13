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
  if ( doorOpen === "yes") {
    console.log("you see a little girl");
    let girl = readline.question("will you approach the little girl");

    if (girl === "yes") {
         console.log("The little girls asks you of your age");
         let age = readline.question("You then tell her of your age :---");
         if( age === 13 || age === 14 || age === 15 || age === 16 || age === 17 ) {
           console.log("The little girl is satisfied with your age, she asks you to play a game with her")
           let play = readline.question("Will you play a game with her");
           if( play === "yes") {
             console.log("The little girl decides to play catch")
             console.log("She hands you a rusty knife")
                  let knife = readline.question("The little girl decides to play catch with the knife, so she tells you to throw it");
                  if ( knife === "yes")  {
                    let hard = readline.question("Will you throw it hard or soft");
                    if (hard === "hard") {
                      console.log( "The knife impales the little girl revealing her demonic state")
                      console.log("✌️✌️✌️✌️✌️✌️✌️✌️✌️✌️✌️✌️✌️✌️✌️✌️YOU WIN THE GAME ✌️✌️✌️✌️✌️✌️✌️✌️✌️")

                    }
                    else if( hard === "soft") {
                      console.log("💀💀💀💀💀💀💀💀The little girl snatches the knife nad kills you with it, whilst revealing her demonic form💀💀💀💀💀💀💀💀")

                    }
                  }
                  else{
                    points--;
                    conole.log( " points = " + points)
                  }
           } else{
             points--;
             conole.log( " points = " + points)
           }

         }

    }
    else{
      points--;
      conole.log( " points = " + points)

    }



  }

}
 else {
   points--;
   console.log( " points = " + points)
 }
