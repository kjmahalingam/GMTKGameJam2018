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
    let enemyBase = new EnemyBase(game.world.width * 0.25, game.world.height / 2);
    let enemyBase2 = new EnemyBase(game.world.width * 0.75, game.world.height / 2);
    enemyBase.create();
    enemyBase2.create();
    let incomeTower = new IncomeTower(game.world.width / 2, game.world.height / 4);
    incomeTower.create(game.world.width / 2, game.world.height / 4);
    breakSound = game.add.audio("break");
    breakSound.volume = 0.5;
    explodeSound = game.add.audio("explode");
    explodeSound.volume = 0.5;
    laserSound = game.add.audio("laser");
    laserSound.volume = 0.1;
    shootSound = game.add.audio("shoot");
    shootSound.volume = 0.15;
    
    gameManager.drawInstructions()
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
