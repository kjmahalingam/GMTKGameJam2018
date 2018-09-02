class EnemyBase extends GameObject {
  constructor(posX, posY) {
    super(posX, posY, 80);
    this.spriteName = 'enemyBase';
    this.health = 50;
    this.style.font = "50px Arial";
  }

  update(frameCount) {
    super.update();

    if ((frameCount % Math.ceil(15 * (this.health / 20))) === 0) {
      shootSound.play();
      gameManager.addEnemy(this);
    }
  }

  destroy(manual) {
    super.destroy();

    if (!manual) {
      explodeSound.play();
    }

    let incomeTower = new IncomeTower(this.pos.x, this.pos.y);
    incomeTower.create(true);
  }
}
