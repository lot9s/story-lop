/*
  This class defines the 'Lop Lop' Narrative.
*/
class Narrative {
  /*
    @arg {StoryState}
    @arg {Array.<StoryNode>}
  */
  constructor(storyState, storyNodes) {
    this.curNode = null;
    this.state = storyState;

    this.nodes = storyNodes;
  }

  /*
    This method retrieves the next StoryNode in the narrative.

    @arg {string} input optional argument containing player input
    @return {StoryNode}
  */
  step(input) {
    // --- determine what the next story state is ---
    let nextState = STORY_STATES.INVALID;

    // start / restart narrative
    if (!this.curNode || this.curNode.getId() == STORY_STATES.NIGHT) {
      // determine how Lop feels
      let feel = feels[ getRandomInt(0, feels.length - 1) ];
      this.state.setFeel(feel);

      nextState = STORY_STATES.START;
      
      // update the current story node & exit early in case this.curNode==null
      this.curNode = storyNodes[nextState];
      return this.curNode;
    }

    // start -> home
    if (this.curNode.getId() == STORY_STATES.START && input == "no") {
      nextState = STORY_STATES.HOME;
    }

    // start -> travel
    if (this.curNode.getId() == STORY_STATES.START && input == "yes") {
      // determine Lop's destination
      let loc = locs[ getRandomInt(0, locs.length - 1) ];
      this.state.setLocation(loc);

      nextState = STORY_STATES.TRAVEL;
    }

    // travel
    if (this.curNode.getId() == STORY_STATES.TRAVEL) {
      let loc = this.state.getLocation();

      // set the next story state
      if (loc == "mountaintop") {
        nextState = STORY_STATES.MOUNTAIN;
      }

      if (loc == "treetop") {
        nextState = STORY_STATES.TREE;
      }

      if (loc == "candy shop") {
        nextState = STORY_STATES.SHOP;
      }

      if (loc == "bus stop") {
        nextState = STORY_STATES.STOP;
      }
    }

    // location
    if (this.curNode.getId() == STORY_STATES.MOUNTAIN ||
        this.curNode.getId() == STORY_STATES.TREE     ||
        this.curNode.getId() == STORY_STATES.SHOP     ||
        this.curNode.getId() == STORY_STATES.STOP)
    {
      nextState = STORY_STATES.RETURN;
    }

    // finish the day
    if (this.curNode.getId() == STORY_STATES.HOME || 
        this.curNode.getId() == STORY_STATES.RETURN) 
    {
      nextState = STORY_STATES.NIGHT;
    }

    // update the current story node
    this.curNode = storyNodes[nextState];
    return this.curNode;
  }
}

let narrative = new Narrative(storyState, storyNodes);
