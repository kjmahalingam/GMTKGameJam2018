const playState = {
  // automatically called
  preload: () => {
    gameManager.destroy();
    attackTowerKey = game.input.keyboard.addKey(Phaser.Keyboard.Q);
    attackTowerKey.onDown.add(addAttackTower, this);
    resetKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    resetKey.onDown.add(reset, this);
  },

  // automatically called
  create: () => {
    gameManager.create();
    let enemyBase = new EnemyBase(game.world.width * 0.2, game.world.height * 0.5);
    let enemyBase2 = new EnemyBase(game.world.width * 0.8, game.world.height * 0.5);
    let enemyBase3 = new EnemyBase(game.world.width * 0.5, game.world.height * 0.2);
    let enemyBase4 = new EnemyBase(game.world.width * 0.5, game.world.height * 0.8);
    enemyBase.create();
    enemyBase2.create();
    enemyBase3.create();
    enemyBase4.create();
    let incomeTower = new IncomeTower(game.world.width * 0.45, game.world.height * 0.5);
    let incomeTower2 = new IncomeTower(game.world.width * 0.55, game.world.height * 0.5);
    incomeTower.create();
    incomeTower2.create();
    breakSound = game.add.audio("break");
    breakSound.volume = 0.5;
    explodeSound = game.add.audio("explode");
    explodeSound.volume = 0.5;
    laserSound = game.add.audio("laser");
    laserSound.volume = 0.1;
    shootSound = game.add.audio("shoot");
    shootSound.volume = 0.15;
    detonateSound = game.add.audio("detonate");
    detonateSound.volume = 0.1;

    gameManager.drawInstructions()
  },

  // called every frame
  update: () => {
    gameManager.update();
  }
}

addAttackTower = () => {
  let attackTower = new AttackTower(game.input.worldX, game.input.worldY);
  attackTower.create();
}

reset = () => {
  game.state.start('play');
}
