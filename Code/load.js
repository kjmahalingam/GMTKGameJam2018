const loadState = {
  // automatically called
  preload: () => {
    console.info('load preload');
    // TODO: load images

    // TODO: load audio

    // other setup
    game.stage.smoothed = false;
  },

  // automatically called
  create: () => {
    console.info('load create');
    // TODO: play background music

    // start menu state
    game.state.start('play');
  }
}
