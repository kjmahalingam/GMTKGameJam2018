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
    let enemyBase = new EnemyBase(window.innerWidth / 2, window.innerHeight / 2);
    enemyBase.show();
  },

  // called every frame
  update: () => {
    // TODO: update game
  }
}

addIncomeTower = () => {
  let incomeTower = new IncomeTower(game.input.worldX, game.input.worldY);
  incomeTower.show();
}

addAttackTower = () => {
  let attackTower = new AttackTower(game.input.worldX, game.input.worldY);
  attackTower.show();
}
