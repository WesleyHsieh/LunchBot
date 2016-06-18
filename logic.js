modules.export Recipe = function() {
	var recipe = {name: "", cost: 0, details: "", userVotes: [], link: ""};
}
var updateVotes = function(person) {
	var flag = true;
	for (var i = 0; i < userVotes.length; i++) {
		if (person.userid === userVotes[i].userid) {
			flag = false
		}
	}
	if (flag) {
	recipe.userVotes = recipe.userVotes + [person];
	}
}
var recipeList = [];
var person = {userid: "", groups: [], recipes: []};


