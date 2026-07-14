function getWatched(){

return JSON.parse(
localStorage.getItem("watched") || "[]"
);

}



function addWatched(id){

let data=getWatched();


if(!data.includes(id)){

data.push(id);

}


localStorage.setItem(
"watched",
JSON.stringify(data)
);


}



function removeWatched(id){

let data=getWatched();


data=data.filter(
item=>item!==id
);


localStorage.setItem(
"watched",
JSON.stringify(data)
);


}



function isWatched(id){

return getWatched()
.includes(id);

}