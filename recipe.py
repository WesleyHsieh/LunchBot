class recipe:
	def __init__(self, name, cost, details):
		self.name = name
		self.cost = cost
		self.details = details
		self.userVotes = []

  	def userVoted(self, username):
  		self.userVotes.append(username)

  	def numberVotes(self):
  		return len(self.userVotes)

  	def getName(self):
  		return self.name

  	def getDetails(self):
  		return self.name

  	def setDetails(self, details):
  		self.details = details
