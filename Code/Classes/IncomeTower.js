class IncomeTower extends GameObject {
  constructor(posX, posY) {
    super(posX, posY, 20);
    this.spriteName = 'incomeTower';
    this.cost = 20;
  }

  update(frameCount) {
    if ((frameCount % 60) === 0) {
      gameManager.incrementResourcesToAdd();
    }
  }
}
