class recipe:
	def __init__(self, name, details, cost, userVotes):
      self.name = name
      self.cost = cost
      userVotes = []

  	def userVoted(self, username):
  		self.userVotes.append(username)

  	def numberVotes(self):
  		return len(self.userVotes)

  	def getName(self):
  		return self.name
