const bootState = {
  // automatically called
  create: () => {
    // initialize background
    game.stage.backgroundColor = "#888";

    // start load state
    game.state.start('load');
  }
}
