// global variables, story state
var dayState = -1;

// global variables, audio
var sfx = [
  {
    mus: new Audio("res/mus/morning.wav"),
    volume: 1.0
  }
];

// global variables, functions
var continueFunction = function() {};
var noFunction = function() {};
var yesFunction = function() {};


/*
  This method clears the page's story elements.
*/
var clearStoryElements = function() {
  // hide the comic panel
  $("#panel-2").hide();
  $("#panel-3").hide();
  $("#panel-4").hide();

  // hide the story text
  $("#story-txt").hide();
};

/*
  This method starts/continues the story.
*/
var doStory = function() {
  step();

  playMusic();

  renderStrip();
  renderText();
  renderButtons();
}

/*
  This method blocks until player input is received.
*/
var getPlayerInput = function() {
  // TODO: everything
  return 0;
};

/*
  This method plays a story sound.
*/
var playMusic = function() {
  switch (dayState) {
    // morning
    case 0:
      sfx[0].mus.play();
      break;

    default:  break; 
  }
};

/*
  This method renders buttons used to advance the story.
*/
var renderButtons = function() {
  switch (dayState) {
    default:
      $("#button-continue").show();
      break;
  }
}

/*
  This method renders the story's comic strip.
*/
var renderStrip = function() {
  switch (dayState) {
    // morning
    case 0:
      $("#panel-2").show();
      break;

    default:
      break;
  }
};

/*
  This method renders story text on the page.
*/
var renderText = function() {
  switch (dayState) {
    // morning
    case 0:
      $("#story-txt").show();
      break;

    default:
      break;
  }
};

/*
  This method advances the story by 1 step.
*/
var step = function() {
  dayState = dayState + 1 % 4;
};



/*
  This section of code will be run when the page loads and is responsible for
  setting up the experience.
*/
$(document).ready(function() {
  // this defines the functionality of the 'START' button
  $('#button-start').click(function() {
    // hide this button forever
    $(this).hide();

    // set up the comic strip part of the UI
    for (var i = 2; i < 5; i++) {
      console.log(i);
      $("#panel-" + i).hide();
      $("#panel-" + i).removeClass("no-display");
    }

    // set up the button part of the UI
    $("#story-txt").hide();
    $("#story-txt").removeClass("no-display");

    // set up the button part of the UI
    $("#button-continue").hide();
    $("#button-continue").removeClass("no-display");

    // start the experience
    doStory();
  });
});
