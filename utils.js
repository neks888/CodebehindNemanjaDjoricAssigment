function simulateMatch(team1, team2, form1, form2) {
  const rankDifference = team1.FIBARanking - team2.FIBARanking;
  const formFactor = form1 - form2;
  const probabilityTeam1 = (50 + rankDifference + formFactor) / 100;
  const result = Math.random() < probabilityTeam1 ? team1 : team2;

  const score1 = Math.floor(Math.random() * 50) + 50;
  const score2 = Math.floor(Math.random() * 50) + 50;
  return {
    winner: result.Team,
    loser: result === team1 ? team2.Team : team1.Team,
    score: `${score1}:${score2}`,
    team1Score: result === team1 ? score1 : score2,
    team2Score: result === team2 ? score1 : score2,
  };
}

function getTeamForm(teamCode, exhibitions) {
  const matches = exhibitions[teamCode] || [];
  let form = 0;
  matches.forEach((match) => {
    const [teamScore, opponentScore] = match.Result.split("-").map(Number);
    form += teamScore - opponentScore;
  });
  return form;
}

function simulateGroupStage(groups, exhibitions) {
  const groupResults = {};
  for (const group in groups) {
    console.log(`Simulacija mečeva za grupu ${group}`);
    const teams = groups[group];
    groupResults[group] = [];

    for (let i = 0; i < teams.length; i++) {
      for (let j = i + 1; j < teams.length; j++) {
        const team1 = teams[i];
        const team2 = teams[j];
        const form1 = getTeamForm(team1.ISOCode, exhibitions);
        const form2 = getTeamForm(team2.ISOCode, exhibitions);

        const match = simulateMatch(team1, team2, form1, form2);
        console.log(
          `${match.winner} pobedio/la ${match.loser} rezultatom ${match.score}`
        );

        groupResults[group].push({
          team1: team1.Team,
          team2: team2.Team,
          team1Score: match.team1Score,
          team2Score: match.team2Score,
          winner: match.winner,
        });
      }
    }
  }
  return groupResults;
}

function simulateElimination(rankedTeams) {
  // Generiši šešire i simuliraj eliminacionu fazu
  console.log(
    "Simulacija eliminacione faze nije implementirana u ovom koraku."
  );
}

module.exports = {
  simulateMatch,
  getTeamForm,
  simulateGroupStage,
  simulateElimination,
};
