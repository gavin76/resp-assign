function resetGame() {
	for (var i = 0; i < 4; i++) {
		var elem = "#square" + (i+1);
		$(elem).removeClass("wrong");
		$(elem).addClass($(elem).html());
		$("#result").html("...")
	}
}
function showAbout() {
	$("#about").html("<p>This is a simple demonstration of the use of CSS and Javascript</p>");
	console.log("runAbout");
}
function startGame() {
	var guess = Math.floor(Math.random() * 4);
	var squares = ["Saffron", "Cranberry", "Khaki", "Turquoise"];

	$(".square").click(function() {
		var clicked = $(this).html();
		if (clicked === squares[guess]) {
			$("#result").html("You are correct! You may click on the reset button below to play again.");
		} else {
			$("#result").html("Not the one I was thinking of. Please try again.");
			$(this).removeClass(clicked).addClass("wrong");
		}
	});
};

$(document).ready(function() {
	startGame();

	$("#resetbtn").click(function() {
		resetGame();
	});
	$("#aboutbtn").click(function() {
		$("#about").show();
	})
});