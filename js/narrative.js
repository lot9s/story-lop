/*
  This class defines the 'Lop Lop' Narrative.
*/
class Narrative {
  /*
    @arg {StoryState}
    @arg {Array.<StoryNode>}
  */
  constructor(storyState, storyNodes) {
    this.count = -1;

    this.state = storyState;
    this.nodes = storyNodes;
  }

  /*
    This method retrieves the next StoryNode in the narrative.

    @return {StoryNode}
  */
  step() {
    // TODO: make use of story state to tell a more complex story
    this.count = (this.count + 1) % storyNodes.length;
    return storyNodes[this.count];
  }
}

let narrative = new Narrative(storyState, storyNodes);
