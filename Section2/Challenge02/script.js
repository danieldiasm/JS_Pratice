// Challenge02

var teamJohn, teamMike, teamMary;

teamJohn = ['Team John',((89 + 120 + 103) / 3)];
teamMike = ['Team Mike',((116 + 94 + 123) / 3)];
teamMary = ['Team Mary',((97 + 134 + 105) / 3)];

var teams = [teamJohn, teamMike, teamMary];

var higher = ['',0];

teams.forEach(team => {
    if (team[1] > higher[1]) {
        higher = [team[0],team[1]];
    }
});

console.log('The winner is ' + higher[0] + ' with ' + higher[1] + ' points!');