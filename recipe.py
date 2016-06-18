class recipe:
	def __init__(self, name, details, cost):
      self.name = name
      self.cost = cost
      self.userVotes = []

  	def userVoted(self, username):
  		self.userVotes.append(username)

  	def numberVotes(self):
  		return len(self.userVotes)

  	def getName(self):
  		return self.name
