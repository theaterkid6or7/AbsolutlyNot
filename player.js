let roomId, playerId;

const fuckNoCards = [];

fetch("cards.txt")
.then(r=>r.text())
.then(t=>{
  let active=false;
  t.split("\n").forEach(l=>{
    if(l.includes("FUCKNO")) active=true;
    else if(l.startsWith("[")) active=false;
    else if(active && l.trim()) fuckNoCards.push(l.trim());
  });
});

function join() {
  roomId = document.getElementById("code").value.toUpperCase();
  const name = document.getElementById("name").value;
  playerId = db.ref().push().key;

  db.ref(`rooms/${roomId}/players/${playerId}`).set({
    name,
    score:0
  });

  deal();
}

function deal() {
  const hand = document.getElementById("hand");
  hand.innerHTML = "";

  fuckNoCards.sort(()=>0.5-Math.random()).slice(0,3).forEach(card=>{
    const b=document.createElement("button");
    b.innerText=card;
    b.onclick=()=>submit(card);
    hand.appendChild(b);
  });
}

function submit(card) {
  db.ref(`rooms/${roomId}/round/submissions/${playerId}`).set(card);
  alert("Submitted!");
}

