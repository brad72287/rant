$(function() {
	var typingTimer;                
	var doneTypingInterval = 200;
	var $input = $('#input');

	$input.on('keyup', function () {
	  clearTimeout(typingTimer);
	  typingTimer = setTimeout(doneTyping, doneTypingInterval);
	});

	$input.on('keydown', function () {
	  clearTimeout(typingTimer);
	  $("#wordcount").html(wordCount());
	  $("#input").stop();
	  $("#input").fadeIn(200);
	});

	function doneTyping () {
	  $("#input").fadeOut(4000, function(){
	  alert("it's all ogre");
	});
	}

	function wordCount() { 
	  return $("#input").val().split(" ").length;
	}

	//alert("it's working!");
});