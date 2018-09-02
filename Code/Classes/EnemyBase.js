class EnemyBase extends GameObject {
  constructor(posX, posY) {
    super(posX, posY, 120);
    this.spriteName = 'enemyBase';
    this.health = 25;
    this.style.font = "50px Arial";
  }

  update(frameCount) {
    super.update();

    if ((frameCount % 60) === 0) {
      shootSound.play();
      gameManager.addEnemy(this);
    }
  }

  destroy(manual) {
    super.destroy();

    if (!manual) {
      explodeSound.play();
    }
  }
}
