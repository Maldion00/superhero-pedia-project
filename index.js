
let searchButton = document.getElementById('search-button')

searchButton.addEventListener('click', function(){
	let superhero_name = document.getElementById('search-bar').value;
	getSuperhero(superhero_name).then(function(info){
		displaySuperhero(info.results[0]);
		
	})
	console.log(info);
})

async function getSuperheroId(id){
	const request = await fetch(`https://superheroapi.com/api.php/4471155996309604/search/${id}`)
	return await request.json();
}

async function getSuperhero(name){
	const request = await fetch(`https://superheroapi.com/api.php/4471155996309604/search/${name}`)
	return await request.json();
}

function displaySuperhero(info){
	$("#ID").html("ID :" + info.id)
	$("#name").html("Name: " + info.name)
	$("#super-image").attr("src" + info.image.url);
	$("#super-image").removeClass("d-none");
	$("#full-name").html("Full Name: " + info["full-name"])
	$("#combat").html("Combat: " + info.powerstats.combat)
	$("#durability").html("Durability: " + info.powerstats.durability)
	$("#intelligence").html("Intelligence: " + info.powerstats.intelligence)
	$("#power").html("Power: " + info.powerstats.power)
	$("#speed").html("Speed: " + info.powerstats.speed)
	$("#strength").html("Strength: " + info.powerstats.strength)
	$("#place-birth").html("Place of Birth: " + info["place-of-birth"])
	$("#aliases").html("Alias: " + info.biography.aliases[0])
	$("#gender").html("gender: " + info.appearance.gender)
	$("#race").html("Race: " + info.appearance.race)
	$("#height").html("Height: " + info.appearance.height)
	$("#weight").html("Weight: " + info.appearance.weight)
	$("#eye-color").html("Eye-color: " + info.appearance["eye-color"])
	$("#hair-color").html("Hair-color: " + info.appearance["hair-color"])
	$("#group-affiliation").html("Group Affiliation: " + info.connections["group-affiliation"][0])

}



