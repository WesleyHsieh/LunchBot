module.exports = {
	person: {userid: "", groups: [], recipes: []},

	recipeList: [],

	updateVotes: function(person) {
		var flag = true;
		for (var i = 0; i < userVotes.length; i++) {
			if (person.userid === userVotes[i].userid) {
				flag = false
			}
		}
		if (flag) {
		recipe.userVotes = recipe.userVotes + [person];
		}
	},

	Recipe: function(named) {
		return {name: named, cost: 0, details: "", userVotes: [], link: ""};
	}
}
