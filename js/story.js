// global variables, story state
let STORY_STATES = {
  INVALID: -1, 
  HOME:     0,
  START:    1,
  TRAVEL:   2,
  MOUNTAIN: 3,
  TREE:     4,
  SHOP:     5,
  STOP:     6,
  RETURN:   7,
  NIGHT:    8
};

// global variables, story text
let feels = ["cranky", "hungry", "sleepy", "happy"];
let locs = ["bus stop", "candy shop", "treetop", "mountaintop"];


/*
  This class defines story state for use in a Narrative.
*/
class StoryState {
  constructor() {
    this.feel = "";       // {string} the Lop's emotional state
    this.loc = "";        // {string} the Lop's current location
  }

  // getters
  getFeel() {
    return this.feel;
  }

  getLocation() {
    return this.loc;
  }

  // setters
  /*
    @arg {string} feeling an item in the 'feels' array
  */
  setFeel(feeling) {
    this.feel = feeling;
  }

  /*
    @arg {string} place an item in the 'locs' array
  */
  setLocation(place) {
    this.loc = place;
  }
};

let storyState = new StoryState();


/*
  This class defines a story node for use in a Narrative.
*/
class StoryNode {
  /*
    @arg {number}
    @arg stripFunc a function that returns an Array of img resources
    @arg txtFunc a function that returns a strin
  */
  constructor(uid, stripFunc, txtFunc) {
    this.id = uid;

    this.getStrip = stripFunc;
    this.getText = txtFunc;
  }

  /*
    @arg {number}
  */
  getId() {
    return this.id;
  }
}


/* -------------------------------------------------------------------------- */
/*
  The following code initializes story nodes used in 'Lop Lop'.
*/
/* -------------------------------------------------------------------------- */

/* The 'Morning' StoryNode */
let nodeMorning = new StoryNode(
  STORY_STATES.START,   // id
  // stripFunc
  function() {
    return ["morning.png", "lop-face-" + storyState.getFeel() + ".jpeg"];
  },
  // txtFunc
  function() {
    return ["Good morning, Lop. O, ", storyState.getFeel(), " Lop."].join("");
  }
);

/* The 'Travel' StoryNode */
let nodeTravelR = new StoryNode(
  STORY_STATES.TRAVEL,   // id
  // stripFunc
  function() {
    let strip = [
      "lop-right.jpeg", 
      "lop-right.jpeg", 
      "lop-right.jpeg", 
      "lop-right.jpeg"
    ];

    return strip;
  },
  // txtFunc
  function() {
    let loc = storyState.getLocation();
    return "Hop, hop, hop. The lop went to the " + loc + ".";
  }
);

/* The 'Shop' StoryNode */
let nodeShop = new StoryNode(
  STORY_STATES.SHOP,    // id
  // stripFunc
  function() {
    return ["lop-face.jpeg", "lollipop.png"];;
  },
  // txtFunc
  function() {
    let loc = storyState.getLocation();
    return "At the " + loc + ", the lop bought a lollipop.";
  }
);

/* The 'Travel Home' StoryNode */
let nodeTravelL = new StoryNode(
  STORY_STATES.RETURN,   // id
  // stripFunc
  function() {
    let strip = [
      "lop-left.jpeg", 
      "lop-left.jpeg", 
      "lop-left.jpeg", 
      "lop-left.jpeg"
    ];

    return strip;
  },
  // txtFunc
  function() {
    return "Hop, hop, hop. All the way home went the lop.";
  }
);

/* The 'Night' StoryNode */
let nodeNight = new StoryNode(
  STORY_STATES.NIGHT,   // id
  // stripFunc
  function() {
    return ["lop-face.jpeg", "night.png"];
  },
  // txtFunc
  function() {
    return "Good night, Lop. O, sleepy Lop.";
  }
);


let storyNodes = [
  null,
  nodeMorning,
  nodeTravelR,
  null,
  null,
  nodeShop,
  null,
  nodeTravelL,
  nodeNight
];
