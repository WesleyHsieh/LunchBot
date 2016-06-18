class Person:
	# userID will be passed in somehow
	def __init__(self, userID):
		self.userID = userID
		self.groups = []

	def addGroups(self, group):
		return self.groups.append(group)

	def getGroups(self):
		return self.groups

	def getUserID(self):
		return self.userID

	def notify(self, message):
		#somehow it notifies the person with the message










