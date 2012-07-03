


var question = require('./question.js');
var comment = require('./comment.js');

var q = question.build("mkb", "Where is SFU Surrey located?", "location");
//q.appendComment(c);
q.setID(commentID);

var c = comment.build("snsd");
//c.setBody("Learning ES is really fun...");
c.setID(questionID);



var ctoes = require('./QueryComment.js');

/*
ctoes.put(c, function(result) {
	console.log(result);
});
*/



