const playState = {
  // automatically called
  preload: () => {
    // TODO: set up inpu
    console.info('play preload');
  },

  // automatically called
  create: () => {
    console.info('play create');
    // TODO: initialize game
  },

  // called every frame
  update: () => {
    // TODO: update game
    console.info('play update');
  }
}
