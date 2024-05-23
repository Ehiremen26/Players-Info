# Player-info unsig function

Data from an API consisted of an object with variable name teamInfo having keys and value of: four keys – the team key with a value of a string and the players, position and jerseyNumber keys with an array, where for a particular player in the team, the index of player name, position and jersey number are the same in each of the arrays in object.
Statement of problem

Create a function that will return the players name and jersey number when the position of a particular player is requested/inputted.

# STEP 1
const playerInfo = function (position) {
  
};


Create a function that accepts the position of the player as an argument. In the function get the index of the position that was passed in the argument

# STEP 2

const indexPosition = teamInfo.position.indexOf(position);
  if (indexPosition === -1) {
    console.log('Invalid position');
    return null;
  }
  const playerName = teamInfo.players[indexPosition];
  const playerNumber = teamInfo.JerseyNumber[indexPosition];
  return `${playerName} ${playerNumber}`;

Within the function, get the index of the position argument (that will be passed) from the position array in the object using the indexOf() method and store in a variable (indexPosition ).

Check if the position passed does not exist in the position array, log a warning statement as shown above and return null

Use the index gotten (indexPosition) to get the player name and jersey number from the respective arrays, store in variables (playerName & playerNumber).

Finally return player name and jersey number using an object literal.

Putting together we have:

const playerInfo = function (position) {
  const indexPosition = teamInfo.position.indexOf(position);
  if (indexPosition === -1) {
    console.log('Invalid position');
    return null;
  }
  const playerName = teamInfo.players[indexPosition];
  const playerNumber = teamInfo.JerseyNumber[indexPosition];
  return `${playerName} ${playerNumber}`;
};

# STEP 3

Let’s prompt users to accept values to call the above function.

 while (true) {
    const position = prompt('Enter player position e.g Goalkeeper');
    const player = playerInfo(position);
    console.log(player);
    const confirm = prompt("Do you want to continue 'Y' or 'N'");
    if (confirm !== 'Y') {
      console.log(confirm);
      break;
    }
  }
};

Using a while loop, prompt users to enter player position and using the playerInfo function as above, pass in the position inputted by the user and get the player info which is logged out
Display a prompt to confirm if user wants to continue. The program breaks if you choice is not equal to Y.
