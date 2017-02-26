// global variables, story state
let storyNode = null;

// global variables, comic strip
var IMG_DIR = "res/img/";

// global variables, audio
var sfx = [
  {
    mus: new Audio("res/mus/morning.wav"),
    volume: 1.0
  }
];

// global variables, functions
var noFunction = function() {};
var yesFunction = function() {};



/*
  This method allows an existing HTML element to be displayed.

  @arg {Object} element jQuery object corresponding to HTML element
*/
var allowDisplay = function(element) {
  element.hide();
  element.removeClass("no-display");
};

/*
  This method clears the page's story elements.
*/
var clearStoryElements = function() {
  // hide the comic panel
  $("#panel-2").hide();
  $("#panel-3").hide();
  $("#panel-4").hide();

  // hide the text
  $("#story-txt").hide();
  $("#input-txt").hide();

  // hide the buttons
  $("#button-continue").hide();
  $("#buttons-yn").hide();
};

/*
  This method starts/continues the story.

  @arg {string} input optional input obtained from player
*/
var doStory = function(input) {
  // clear UI
  clearStoryElements();

  // advance the narrative
  storyNode = narrative.step(input);

  playMusic();

  // render UI
  renderStrip();
  renderText();
  renderButtons();
};

/*
  This method plays a story sound.
*/
var playMusic = function() {
  if (storyNode.getId() == STORY_STATES.START) {
    sfx[0].mus.play();
  }
};

/*
  This method renders buttons used to advance the story.
*/
var renderButtons = function() {
  if (storyNode.getId() == STORY_STATES.START) {
    $("#buttons-yn").css('display', 'flex');
    $("#buttons-yn").show();
  } else {
    $("#button-continue").show();
  }
};

/*
  This method renders the story's comic strip.
*/
var renderStrip = function() {
  var strip = storyNode.getStrip();

  // populate the comic strip
  for (var i = 0; i < strip.length; i++) {
    var selector = "#panel-" + strip.length + "-img-" + (i+1) + " img";
    $(selector).attr("src", IMG_DIR + strip[i]);
  }

  $("#panel-" + strip.length).show();
};

/*
  This method renders story text on the page.
*/
var renderText = function() {
  var text = storyNode.getText();

  // populate the story text
  $("#story-txt").text(text);
  $("#story-txt").show();

  // populate the input text
  if (storyNode.getId() == STORY_STATES.START) {
    $("#input-txt").show();
  }
};



/*
  This section of code will be run when the page loads and is responsible for
  setting up the experience.
*/
$(document).ready(function() {
  // this defines the functionality of the 'CONTINUE' button
  $('#button-continue').click(function() {
    doStory();
  });

  // this defines the functionality of the 'YES' button
  $('#button-yes').click(function() {
    doStory("yes");
  });

  // this defines the functionality of the 'NO' button
  $('#button-no').click(function() {
    doStory("yes"); // TODO: change this
  });

  // this defines the functionality of the 'START' button
  $('#button-start').click(function() {
    // hide this button forever
    $(this).hide();

    // --- alow UI elements to be displayed at this stage --
    for (var i = 2; i < 5; i++) {
      allowDisplay( $("#panel-" + i) );
    }

    allowDisplay( $("#story-txt") );
    allowDisplay( $("#input-txt") );
    allowDisplay( $("#button-continue") );
    allowDisplay( $("#buttons-yn") );

    // start the experience
    doStory();
  });
});
