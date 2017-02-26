// global variables, story text
var feels = ["cranky", "hungry", "sleepy", "happy"];
var locs = ["bus stop", "candy shop", "treetop", "mountaintop"];


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
  0,  // id
  // stripFunc
  function() {
    return ["morning.png", "lop-face.jpeg"];
  },
  // txtFunc
  function() {
    let feel = feels[ getRandomInt(0, feels.length - 1) ];
    return ["Good morning, Lop. O, ", feel, " Lop."].join("");
  }
);

/* The 'Travel' StoryNode */
let nodeTravelR = new StoryNode(
  1,  // id
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
    return "Hop, hop, hop. The lop went to the candy shop.";
  }
);

/* The 'Shop' StoryNode */
let nodeShop = new StoryNode(
  2,  // id
  // stripFunc
  function() {
    return ["lop-face.jpeg", "lollipop.png"];;
  },
  // txtFunc
  function() {
    return "At the candy shop, the lop bought a lollipop.";
  }
);

/* The 'Travel Home' StoryNode */
let nodeTravelL = new StoryNode(
  3,  // id
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
  4,  // id
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
  nodeMorning,
  nodeTravelR,
  nodeShop,
  nodeTravelL,
  nodeNight
];
