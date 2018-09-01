// initialize game
game = new Phaser.Game(
  1280,
  800,
  Phaser.CANVAS,
  ''
);

gameManager = new GameManager();

// Add game states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);

// Start boot state
game.state.start('boot');
