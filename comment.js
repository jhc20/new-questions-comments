/* based on this comment schema	
	{
	"user":"mkn3",
	"upvote":"0",
	"downvote":"0",
	"body":"The answer to your question is...",
	"questionIDs":"pJfznhheQuOicWWAjx7F00",
	"timestamp":"2012-06-30"
	}
*/	

//Comment Model
var Comment = function(user){
	this.user = user;
	this.upvote = 0;
	this.downvote = 0;
	this.body = 'No Comment check here.';
	this.id = '';
	this.timestamp	= '2012-07-01';
}

Comment.prototype.getBody = function(){
	return this.body;
}

Comment.prototype.getID = function(){
	return this.id;
}

Comment.prototype.setBody = function(pbody){
	this.body = pbody;
}

Comment.prototype.setID = function(pid){
	this.id = pid;
}

Comment.prototype.vote = function(){
	this.upvote = this.upvote + 1;
}

Comment.prototype.downvote = function(){
	this.downvote = this.downvote + 1;
}

exports.build = function(user) {
	return new Comment(user);
}