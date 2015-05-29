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



// Looking for four instances of the image in a row based on index
// If yes, check source to see if they are the same
// JQUERY $.unique() to look and compare the urls
// If length is one then there is a win 



var rowOne = [];
var counts = {};

jQuery.each(rowOne, function(key, value) {
  if (!counts.hasOwnProperty(value)) {
    counts[value] = 1;
  } else {
    counts[value]++;
  }
});

for(var key in counts) {
  rowOne.push(counts[key]);
};



// for (var num = 1; num < 7; num++) {
//  rowArray = $(".row:nth-child("+ num +") img[src= name]")

//    // if there are four of any picture in a row

//    if (rowArray.length === 4) {
//      classNumbers = []

//      // gather the class numbers of the pictures

//      rowArray.parent().each(function() {
//       classNumbers.push($(this).attr("class").split(' ')[1])
//     })

//    } // end if loop

//  // check to see if there are four instances of any pictures

//    // if so, gather the column numbers

//    // check if the numbers ascend

// } // end for loop



