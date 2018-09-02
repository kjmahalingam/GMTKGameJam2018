class IncomeTower extends GameObject {
  constructor(posX, posY) {
    super(posX, posY, 25);
    this.spriteName = 'incomeTower';
    this.cost = 10;
    this.health = 5;
  }

  update(frameCount) {
    super.update();

    if ((frameCount % 60) === 0) {
      gameManager.incrementResourcesToAdd();
    }
  }

  destroy(manual) {
    super.destroy();

    if (!manual) {
      breakSound.play();
    }
  }
}
