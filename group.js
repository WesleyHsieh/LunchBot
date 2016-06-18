

function Group(host) = {
  this.people = {host.name: host};
  this.recipes = {};
  this.phase = "voting";
  this.add_person = function (person_id) {
    if (person_id in this.people) {
      throw "Person already exists";
    } else {
      var new_person = new Person(person_id);
      this.people[person_id] = new_person;
    }
  }
  this.delete_person = function (person_id) {
    if (!(person_id in this.people) {
      throw "Person does not exist";
    } else {
      delete this.people[person_id];
    }
  }
  this.get_person = function (person_id) {
    if (!(person_id in this.people)) {
      throw "Person does not exist";
    } else {
      return self.people[person_id];
    }
  }
  this.add_recipe = function (recipe_name) {
    if (this.phase == "voting") {
      var new_recipe = new Recipe(recipe_name);
      self.recipes[recipe_name] = new_recipe;
    } else {
      throw "Not in voting phase";
    }
  }
  this.get_recipe = function (recipe_name) {
    if (recipe_name in this.recipes) {
      return this.recipes[recipe_name];
    } else {
      throw "Recipe not found";
    }
  }
  this.process_vote = function (member, recipe, vote) {
    if (recipe in this.recipes) {
      var curr_recipe = self.recipes[recipe]
      curr_recipe.process_vote(member, vote)
    } else {
      throw "Cannot process vote";
    }
  }
  this.select_recipe = function () {
    var selected_recipe;
    for (key in this.recipes) {
      if (selected_recipe === undefined || this.recipes[key].number_votes() > selected_recipe.number_votes()) {
        selected_recipe = this.recipes[key];
      }
    }
    this.selected_recipe = selected_recipe;
    this.phase = "selected"
    this.notify_people()
  }
  this.process_confirmations(self) {
    this.phase = "confirmed"
    this.notify_people()
  }
  this.request_payments = function(message, recipe, amount) {
    var host_name = recipe.host.name;
    var payment_link = recipe.payment_link;
    var recipe_name = recipe.name;
    var request_message = host_name + " requests " + amount + " for " + recipe_name + ", pay at " + payment_link;
    this.notify_people(request_message, criteria)
  }
  this.notify_people = function(message, criteria) {
    for (person in this.people) {
      if (criteria(person)) {
        person.notify(message)
      }
    }
  }
  this.notify_members = function(message) {
    for (person in this.people) {
      person.notify(message);
    }
  }
}
