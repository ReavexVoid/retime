fetch("data/shows.json")
.then(r=>r.json())
.then(shows=>{

let container=document.getElementById("shows");

shows.forEach(show=>{

let card=document.createElement("div");

card.className="card";

card.innerHTML=`
<img src="${show.poster}">
<h3>${show.title}</h3>
`;

card.onclick=()=>{
location.href="show.html?id="+show.id;
}

container.appendChild(card);

});

});