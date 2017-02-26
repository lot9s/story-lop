// global variables, story text
var feels = ["cranky", "hungry", "sleepy", "happy"];



/*
  This class defines a story node for use in a narrative graph.
*/
class StoryNode {
  /*
    @arg stripFunc a function that returns an Array of img resources
    @arg txtFunc a function that returns a strin
  */
  constructor(stripFunc, txtFunc) {
    this.getStrip = stripFunc;
    this.getText = txtFunc;
  }
}



/* -------------------------------------------------------------------------- */
/*
  The following code initializes story nodes used in 'Lop Lop'.
*/
/* -------------------------------------------------------------------------- */

/* The 'Morning' StoryNode */
let nodeMorning = new StoryNode(
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
    return "Hop, hop, hop. The lop went to the shop.";
  }
);

/* The 'Shop' StoryNode */
let nodeShop = new StoryNode(
  // stripFunc
  function() {
    return ["lop-face.jpeg", "lollipop.png"];;
  },
  // txtFunc
  function() {
    return "At the shop, the lop bought a lollipop.";
  }
);

/* The 'Travel Home' StoryNode */
let nodeTravelL = new StoryNode(
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
  // stripFunc
  function() {
    return ["lop-face.jpeg", "night.png"];
  },
  // txtFunc
  function() {
    return "Good night, Lop. O, sleepy Lop.";
  }
);
