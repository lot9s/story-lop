// global variables, story state
var dayState = -1;

// global variables, comic strip
var IMG_DIR = "res/img/";

// global variables, story text
var feels = ["cranky", "hungry", "sleepy", "happy"];

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

  // hide the story text
  $("#story-txt").hide();
};

/*
  This method starts/continues the story.
*/
var doStory = function() {
  clearStoryElements();

  step();

  playMusic();

  renderStrip();
  renderText();
  renderButtons();
}

/*
  This method generates a random integer between 2 values.

  Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

  @arg {number} min
  @arg {number} max
  @return {number}
*/
var getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
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
  var strip = [];

  // determine contents of comic strip
  switch (dayState) {
    // morning
    case 0:
      strip = nodeMorning.getStrip();
      break;

    // travel
    case 1:
      strip = nodeTravelR.getStrip();
      break;

    // location
    case 2:
      strip = nodeShop.getStrip();
      break;

    // return travel
    case 3:
      strip = nodeTravelL.getStrip();
      break;

    // return travel
    case 4:
      strip = nodeNight.getStrip();
      break;

    default:
      break;
  }

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
  var text = "";

  switch (dayState) {
    // morning
    case 0:
      text = nodeMorning.getText();
      break;

    // travel
    case 1:
      text = nodeTravelR.getText();
      break;

    // location
    case 2:
      text = nodeShop.getText();
      break;

    // return travel
    case 3:
      text = nodeTravelL.getText();
      break;

    // night
    case 4:
      text = nodeNight.getText();
      break;

    default:
      break;
  }

  $("#story-txt").text(text);
  $("#story-txt").show();
};

/*
  This method advances the story by 1 step.
*/
var step = function() {
  dayState = (dayState + 1) % 5;
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

  // this defines the functionality of the 'START' button
  $('#button-start').click(function() {
    // hide this button forever
    $(this).hide();

    // --- alow UI elements to be displayed at this stage --
    for (var i = 2; i < 5; i++) {
      allowDisplay( $("#panel-" + i) );
    }

    allowDisplay( $("#story-txt") );
    allowDisplay( $("#button-continue") );

    // start the experience
    doStory();
  });
});
