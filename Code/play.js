const playState = {
  // automatically called
  preload: () => {
    incomeTowerKey = game.input.keyboard.addKey(Phaser.Keyboard.Q);
    incomeTowerKey.onDown.add(addIncomeTower, this);
    attackTowerKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    attackTowerKey.onDown.add(addAttackTower, this);
    pauseKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    pauseKey.onDown.add(deregisterLast, this);
  },

  // automatically called
  create: () => {
    // TODO: initialize game
    let enemyBase = new EnemyBase(window.innerWidth / 2, window.innerHeight / 2);
    enemyBase.create();
  },

  // called every frame
  update: () => {
    // TODO: update game
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

deregisterLast = () => {
  let incomeTowers = gameManager.gameObjects.incomeTower;
  incomeTowers[incomeTowers.length - 1].destroy();
}
