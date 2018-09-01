// initialize game
game = new Phaser.Game(
  window.innerWidth,
  window.innerHeight,
  Phaser.CANVAS,
  ''
);

// Add game states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('play', playState);

// Start boot state
game.state.start('boot');
