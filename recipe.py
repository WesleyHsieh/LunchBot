class Recipe:
	def __init__(self, name, cost, details, link):
		self.name = name
		self.cost = cost
		self.details = details
		self.userVotes = []
		self.link = link

  	def process_vote(self, person):
  		if person not in self.userVotes:
  			self.userVotes.append(person)

  	def number_Votes(self):
  		return len(self.userVotes)

  	def getName(self):
  		return self.name

  	def getDetails(self):
  		return self.details

  	def setDetails(self, details):
  		self.details = details

  	def get_users_voted(self):
  		return self.userVotes
