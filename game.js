// Basic shared state
if (!localStorage.getItem("players")) {
  localStorage.setItem("players", JSON.stringify([]));
}

function getPlayers() {
  return JSON.parse(localStorage.getItem("players"));
}

function savePlayers(players) {
  localStorage.setItem("players", JSON.stringify(players));
}

function addPlayer(name) {
  const players = getPlayers();
  players.push({
    name,
    score: 0,
    sand: 0
  });
  savePlayers(players);
}
