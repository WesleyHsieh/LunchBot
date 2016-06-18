import person
import recipe

class Group:
    """
    Main group class, handles
    calls between different
    objects.
    """
    def __init__(self, host):
        """
        TODO: Handle phase system.
        """
        self.people = {host.name: host} 
        self.recipes = {} 
        self.phase = "voting" 
        
    def add_person(self, person_id):
        """
        Adds a new person.
        TODO: Handle other person parameters.
        """
        if person_id in self.people:
            raise Exception("Person already exists!")
        else:
            new_person = Person(person_id)
            self.people[person_id] = new_person

    def delete_person(self, person_id):
        """
        Deletes person.
        """
        assert person_id in self.people
        del self.people[person_id] 

    def get_person(self, person_id):
        """
        Retrieves person.
        """
        assert person_id in self.people
        return self.people[person_id]

    def add_recipe(self, recipe_name):
        """
        Adds a new recipe.
        TODO: Handle other recipe parameters.
        """
        assert self.phase == "voting"
        new_recipe = Recipe(recipe_name)
        self.recipes[recipe_name] = new_recipe

    def get_recipe(self, recipe_name):
        """
        Retrieves recipe.
        """
        assert recipe_name in self.recipes
        return self.recipes[recipe_name]

    def process_vote(self, member, recipe, vote):
        """
        Processes incoming vote.
        """
        assert member in self.members and recipe in self.recipes
        curr_member = self.members[member]
        curr_recipe = self.recipes[recipe]
        curr_recipe.process_vote(member, vote)

    def select_recipe(self):
        """
        Selects recipe with highest votes, moves
        group onto next phase.
        TODO: Notify people.
        """
        selected_recipe = max(self.recipes, key=lambda x: x.number_votes())
        self.selected_recipe = selected_recipe
        self.phase = "selected"
        self.notify_people()

    def request_payments(self, message, recipe, amount):
        """
        Requests payments from all members
        who meet the criteria.
        """
        host_name = recipe.host.name
        payment_link = recipe.payment_link
        recipe_name = recipe.name
        request_message = "{} requests {} for {}, pay at {}".format(host_name, amount, recipe_name, payment_link) 
        self.notify_people(request_message, criteria)

    def notify_people(self, message, criteria):
        """
        Notifies people with message.
        TODO: Handle criteria function.
        """
        selected_people = [person for person in self.people if criteria(person)]
        for person in selected_people:
            person.notify(message)

