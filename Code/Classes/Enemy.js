class Enemy extends GameObject {
  constructor(posX, posY) {
    super(posX, posY, 10);
    this.spriteName = 'enemy';
    this.target;
    this.speed = 100;
    this.style.font = "20px Arial";
  }

  attackTarget() {
    if (gameManager.numTowers() <= 0) {
      return;
    }

    this.target = gameManager.findRandomTower(this);
    const dist = gameManager.findDistance(this, this.target);
    game.add.tween(this.sprite).to(
      { x: this.target.pos.x, y: this.target.pos.y },
      (dist / this.speed) * 1000,
      Phaser.Easing.Linear.None,
      true
    );
    game.add.tween(this.sprite).from(
      { alpha: 0.5, width: this.sprite.width / 2, height: this.sprite.height / 2 },
      (dist / this.speed) * 1000,
      Phaser.Easing.Linear.None,
      true
    );
  }

  create() {
    this.sprite = game.add.sprite(this.pos.x, this.pos.y, this.spriteName);
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.width = this.sprite.height = this.radius * 2;
    gameManager.register(this);
    this.attackTarget();
  }

  update(frameCount) {
    this.pos.x = this.sprite.x;
    this.pos.y = this.sprite.y;

    if (!this.target) {
      return;
    }
    
    if (this.target.destroyed) {
      this.attackTarget();
    }

    const dist = gameManager.findDistance(this, this.target);

    if (dist === 0) {
      this.target.damage(1);
      this.destroy();
    }
  }
}
