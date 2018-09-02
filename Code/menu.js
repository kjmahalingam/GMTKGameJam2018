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
    let button1 = game.add.button(game.world.width / 2, game.world.height / 2, 'button', startGame);
    let button2 = game.add.button(game.world.width / 2, game.world.height * .65, 'button', openInstructions);
    button1.width *= 2;
    button1.height *= 2;
    button1.anchor.setTo(0.5, 0.5);

    button2.width *= 2;
    button2.height *= 2;
    button2.anchor.setTo(0.5, 0.5);

    const titleStyle = {
      font: "50px Arial",
      fill: "#FFFFFF",
      align: "center",
      stroke: "#000000",
      strokeThickness: 5
    }

    const textStyle = {
      font: "30px Arial",
      fill: "#FFFFFF",
      align: "center",
      stroke: "#000000",
      strokeThickness: 5
    }

    let text = game.add.text(game.world.width / 2, game.world.height / 2 + 3, 'Start Game', textStyle);
    text.anchor.setTo(0.5, 0.5);

    let titleText = game.add.text(game.world.width / 2, game.world.height / 5, 'Tower Destruction', titleStyle);
    titleText.anchor.setTo(0.5, 0.5);

    let menuText = game.add.text(game.world.width / 2, game.world.height / 3, menuString, textStyle);
    menuText.anchor.setTo(0.5, 0.5);

    let instructionText = game.add.text(game.world.width / 2, game.world.height *.65 + 3, 'Instructions', textStyle)
    instructionText.anchor.setTo(0.5, 0.5);
  }
}

startGame = () => {
  // start play state
  game.state.start('play');
}

openInstructions = () => {
  game.state.start('instructions')
}
