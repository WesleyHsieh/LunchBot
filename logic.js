module.exports = {
	Person: function(person_id, name) {
                  this.userid=person_id; 
                  this.groups=[];
                  this.recipes=[]; 
                  this.name=name},
	// We could potentially store in groups whether they have paid as well?
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
		return {name: named, cost: 0, details: "", userVotes: [], link: "http://cdn1.tmbi.com/TOH/Images/Photos/37/300x300/exps41117_ESC1801517D82.jpg"};
	}
}
