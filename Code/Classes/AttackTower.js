class AttackTower extends GameObject {
  constructor(posX, posY) {
    super(posX, posY, 25);
    this.spriteName = 'attackTower';
    this.health = 3;
    this.cost = 5;
    this.range = 100;
    this.lineGraphics;
  }

  attack() {
    const enemy = gameManager.findClosestEnemy(this);
    if (enemy) {
      laserSound.play();

      this.lineGraphics = game.add.graphics(0, 0);
      this.lineGraphics.moveTo(this.pos.x, this.pos.y);
      this.lineGraphics.lineStyle(2, 0x00EEFF, 1);
      this.lineGraphics.lineTo(enemy.pos.x, enemy.pos.y);

      game.add.tween(this.lineGraphics).to(
        { alpha: 0 },
        500,
        Phaser.Easing.Exponential.Out,
        true
      );
      enemy.damage(1);
    }
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

    if ((frameCount % 60) === 0) {
      if (this.lineGraphics) {
        this.lineGraphics.destroy(true);
        console.log(this.lineGraphics);
      }
      this.attack();
    }
  }

  destroy(manual) {
    super.destroy();

    this.circleGraphics.destroy();

    if (!manual) {
      breakSound.play();
    }
  }
}
