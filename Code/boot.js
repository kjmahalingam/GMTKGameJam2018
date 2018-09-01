const bootState = {
  // automatically called
  create: () => {
    console.info('boot create');
    // initialize background
    game.stage.backgroundColor = "#AAA";

    // start load state
    game.state.start('load');
  }
}
