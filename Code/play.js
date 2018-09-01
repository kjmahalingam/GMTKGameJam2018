const playState = {
  // automatically called
  preload: () => {
    incomeTowerKey = game.input.keyboard.addKey(Phaser.Keyboard.Q);
    incomeTowerKey.onDown.add(addIncomeTower, this);
    attackTowerKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    attackTowerKey.onDown.add(addAttackTower, this);
    pauseKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACE);
  },

  // automatically called
  create: () => {
    // TODO: initialize game
    let enemyBase = game.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'enemyBase');
    enemyBase.anchor.setTo(0.5, 0.5);
    enemyBase.width = enemyBase.height = window.innerWidth / 10;
  },

  // called every frame
  update: () => {
    // TODO: update game
  }
}

addIncomeTower = () => {
  let incomeTower = game.add.sprite(game.input.worldX, game.input.worldY, 'incomeTower');
  incomeTower.anchor.setTo(0.5, 0.5);
  incomeTower.width = incomeTower.height = window.innerWidth / 20;
}

addAttackTower = () => {
  let attackTower = game.add.sprite(game.input.worldX, game.input.worldY, 'attackTower');
  attackTower.anchor.setTo(0.5, 0.5);
  attackTower.width = attackTower.height = window.innerWidth / 20;
}
