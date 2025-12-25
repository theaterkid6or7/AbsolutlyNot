let roomId, playerId;
let fuckno=[];

fetch("cards.txt").then(r=>r.text()).then(t=>{
  let on=false;
  t.split("\n").forEach(l=>{
    if(l.includes("FUCKNO")) on=true;
    else if(l.startsWith("[")) on=false;
    else if(on && l.trim()) fuckno.push(l.trim());
  });
});

function join(){
  roomId=document.getElementById("code").value.toUpperCase();
  const name=document.getElementById("name").value;
  playerId=db.ref().push().key;

  db.ref(`rooms/${roomId}/players/${playerId}`).set({
    name,score:0
  });

  deal();
}

function deal(){
  const hand=document.getElementById("hand");
  hand.innerHTML="";
  fuckno.sort(()=>.5-Math.random()).slice(0,3).forEach(c=>{
    const b=document.createElement("button");
    b.innerText=c;
    b.onclick=()=>submit(c);
    hand.appendChild(b);
  });
}

function submit(card){
  db.ref(`rooms/${roomId}/round/submissions/${playerId}`).set(card);
  document.getElementById("hand").innerHTML="<p>Submitted</p>";
}
