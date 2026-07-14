fetch("data/shows.json")

.then(res=>res.json())

.then(shows=>{


let box =
document.getElementById("trending");



shows.forEach(show=>{


let card =
document.createElement("div");


card.className="card";



card.innerHTML=`

<img src="${show.poster}">

<p>
${show.title}
</p>

`;



card.onclick=function(){

window.location.href =
"show.html?id="+show.id;

};



box.appendChild(card);



});


});