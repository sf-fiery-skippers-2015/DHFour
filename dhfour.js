// PSEUDOCODE
// DONE: INITIAL LOAD:display board: 7 columns of 6 slots with div at top to display game status messages.

// ALL BELOW ARE WITH AJAX//
// set player image options
var player_images = ["derek.png", "sherif.png", "hunter.png"];
var index = Math.floor(Math.random() * 3)
var player1 = player_images.splice(index, 1)
var player2 = player_images.pop

// When user clicks on a div cell their game piece image is placed in the bottom open cell for that column.(JQUERY)


// Once any piece is placed:
// check board for winning combos
// if there is a winning combo: the person who just played wins.
// if no winning combo: display text changes to say the next person is playing.

// win:
// change display message to say who won and stop play cycle.
