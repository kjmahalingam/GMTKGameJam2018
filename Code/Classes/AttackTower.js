class AttackTower extends GameObject {
  constructor(posX, posY) {
    super(posX, posY, 20);
    this.spriteName = 'attackTower';
    this.health = 2;
    this.cost = 5;
    this.graphics;
    this.line;
  }

  attack() {
    const enemy = gameManager.findClosestEnemy(this);
    if (enemy) {

      this.graphics = game.add.graphics(0, 0);
      this.graphics.moveTo(this.pos.x, this.pos.y);
      this.graphics.lineStyle(2, 0x00EEFF, 1);
      this.graphics.lineTo(enemy.pos.x, enemy.pos.y);
      game.add.tween(this.graphics).to(
        { alpha: 0 },
        1000,
        Phaser.Easing.Exponential.Out,
        true
      );
      enemy.damage(1);
    }
  }

  update(frameCount) {
    super.update();

    if ((frameCount % 60) === 0) {
      if (this.graphics) {
        this.graphics.destroy();
      }
      this.attack();
    }
  }
}
