let id =
new URLSearchParams(location.search)
.get("id");


fetch("shows/" + id + ".json")


.then(response => response.json())


.then(show => {


document.title = show.title;


document.getElementById("title")
.innerText = show.title;



let html = `


<img class="poster"
src="${show.poster}">


<p>
${show.description}
</p>


`;



show.seasons.forEach(season => {


html += `

<h2>
Season ${season.number}
</h2>

`;



season.episodes.forEach(ep => {


let episodeID =
`${id}-s${season.number}e${ep.number}`;



let watched =
isWatched(episodeID);



html += `

<div class="episode">


<div>

<b>
S${season.number} E${ep.number}
</b>

<br>

${ep.title}

</div>



<button onclick="toggleEpisode('${episodeID}')">

${watched ? "✓ Watched" : "Mark Watched"}

</button>


</div>

`;



});


});



document.getElementById("content")
.innerHTML = html;



})

.catch(error => {


document.getElementById("content")
.innerHTML =
"Failed to load show.";


console.error(error);


});





function toggleEpisode(id){


if(isWatched(id)){

removeWatched(id);

}

else{

addWatched(id);

}


location.reload();


}
