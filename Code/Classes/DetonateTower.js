class DetonateTower extends GameObject {
  constructor(posX, posY) {
    super(posX, posY, 25);
    this.spriteName = 'detonateTower';
    this.cost = 3;
    this.health = 3;
    this.strength = 5;
    this.range = 60;
    this.circleGraphics;
  }

  create() {
    if (super.create()) {
      this.circleGraphics = game.add.graphics(0, 0);
      this.circleGraphics.moveTo(this.pos.x, this.pos.y);
      this.circleGraphics.lineStyle(1, 0x000000, 0.25);
      this.circleGraphics.drawCircle(this.pos.x, this.pos.y, this.range * 2);
    }
  }

  update(frameCount) {
    super.update();

    if ((frameCount % 180) === 0) {
      this.damage(1);
    }
  }

  destroy(manual) {
    for(let enemy of gameManager.findEnemiesInRange(this)){
      enemy.damage(this.strength)
    }

    super.destroy();

    game.add.tween(this.sprite).to(
      { width: this.range * 2, height: this.range * 2 },
      100,
      Phaser.Easing.Exponential.Out,
      true
    );

    this.circleGraphics.destroy();

    if (!manual) {
      detonateSound.play();
    }
  }
}
