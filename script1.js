'Use strict';

const teamInfo = {
  team: 'Arsenal',
  players: [
    'Raya',
    'White',
    'Gabriel',
    'Saliba',
    'Tomiyasu',
    'Partey',
    'Odegaard',
    'Rice',
    'Saka',
    'Havertz',
    'Trossard',
  ],
  position: [
    'Goalkeeper',
    'Right back',
    'Left back',
    'Center back',
    'Center back left',
    'Defensive midfielder',
    'Central midfielder',
    'Attacking midfielder',
    'Left winger',
    'Right winger',
    'Striker',
  ],
  JerseyNumber: [22, 4, 6, 2, 18, 5, 8, 41, 7, 29, 19],
  // getPlayer(player) {},
};

// 1. what is the name of team
// enter player position number to display name of player and jersey number
// 2. option to continue 'Y' OR 'N'

// DOCUMENT STEPS ON GITBOOK.
// STUDY LOG...
// how to write technical report

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

const question = function () {
  // const team = prompt('Enter your team');
  // if (team == null || team == '') {
  //   console.log('Please enter a team');
  //   return;
  // }
  // if (team !== 'Arsenal') {
  //   console.log('Team does not exist');
  //   return;
  // }
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

question();
