const menuState = {
  // get custom parameters
  init: (text) => {
    if (text) {
      menuString = text;
    } else {
      menuString = "Welcome!"
    }
  },

  // automatically called
  create: () => {
    // add menu buttons
    let button = game.add.button(game.world.width / 2, game.world.height / 2, 'button', startGame);
    button.width *= 2;
    button.height *= 2;
    button.anchor.setTo(0.5, 0.5);

    const textStyle = {
      font: "30px Arial",
      fill: "#000000",
      align: "center"
    }
    let text = game.add.text(game.world.width / 2, game.world.height / 2 + 3, 'Start Game', textStyle);
    text.anchor.setTo(0.5, 0.5);

    let menuText = game.add.text(game.world.width / 2, game.world.height / 3, menuString, textStyle);
    menuText.anchor.setTo(0.5, 0.5);
  }
}

startGame = () => {
  // start play state
  game.state.start('play');
}
