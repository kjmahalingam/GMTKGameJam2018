const playState = {
  // automatically called
  preload: () => {
    gameManager.destroy();
    incomeTowerKey = game.input.keyboard.addKey(Phaser.Keyboard.Q);
    incomeTowerKey.onDown.add(addIncomeTower, this);
    attackTowerKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    attackTowerKey.onDown.add(addAttackTower, this);
    resetKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    resetKey.onDown.add(reset, this);
  },

  // automatically called
  create: () => {
    gameManager.create();
    let enemyBase = new EnemyBase(game.world.width / 2, game.world.height / 2);
    enemyBase.create();
    let incomeTower = new IncomeTower(game.world.width / 2, game.world.height / 4);
    incomeTower.create(game.world.width / 2, game.world.height / 4);
  },

  // called every frame
  update: () => {
    gameManager.update();
  }
}

addIncomeTower = () => {
  let incomeTower = new IncomeTower(game.input.worldX, game.input.worldY);
  incomeTower.create();
}

addAttackTower = () => {
  let attackTower = new AttackTower(game.input.worldX, game.input.worldY);
  attackTower.create();
}

reset = () => {
  game.state.start('play');
}
