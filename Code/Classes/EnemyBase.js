class EnemyBase extends GameObject {
  constructor(posX, posY) {
    super(posX, posY, 120);
    this.spriteName = 'enemyBase';
    this.health = 30;
    this.style.font = "50px Arial";
  }

  update(frameCount) {
    super.update();

    if ((frameCount % 60) === 0) {
      gameManager.addEnemy(this);
    }
  }
}
