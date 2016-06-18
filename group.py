class Group:
    def __init__(self):
        """
        TODO: Handle phase system.
        """
        self.people = {} 
        self.recipes = {} 
        self.phase = "init" 
        
    def add_person(self, person_name):
        """
        Adds a new person.
        TODO: Handle other person parameters.
        """
        new_person = Person(person_name)
        self.people[person_name] = new_person
        pass

    def add_recipe(self, recipe_name):
        """
        Adds a new recipe.
        TODO: Handle other recipe parameters.
        """
        assert self.phase == "voting"
        new_recipe = Recipe(recipe_name)
        self.recipes[recipe_name] = new_recipe
        pass

    def process_vote(self, member, recipe, vote):
        """
        Processes incoming vote.
        """
        assert member in self.members and recipe in self.recipes
        curr_member = self.members[member]
        curr_recipe = self.recipes[recipe]
        curr_recipe.process_vote(member, vote)
        pass

    def select_recipe(self):
        """
        Selects recipe with highest votes, moves
        group onto next phase.
        """
        selected_recipe = max(self.recipes, key=lambda x: x.number_votes())
        self.selected_recipe = selected_recipe
        self.phase = "Selected"
        self.notify_people(self.selected_recipe)
        pass


