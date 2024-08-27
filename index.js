const { simulateGroupStage, simulateElimination } = require("./utils");
const fs = require("fs");

// Učitavanje grupa i prijateljskih utakmica
const groups = JSON.parse(fs.readFileSync("./groups.json", "utf8"));
const exhibitions = JSON.parse(fs.readFileSync("./exibitions.json", "utf8"));

// Simulacija grupne faze
const groupResults = simulateGroupStage(groups, exhibitions);

// Prikazivanje grupnih rezultata
console.log("Rezultati grupne faze:");
console.log(groupResults);

// Kreiranje rang liste i žreb za eliminacionu fazu
const rankedTeams = []; // Ovdje ćemo formirati rang liste iz grupne faze

console.log("Početak eliminacione faze");
simulateElimination(rankedTeams);

console.log("Simulacija završena");
