class IncomeTower extends GameObject {
  constructor(posX, posY) {
    super(posX, posY, 20);
    this.spriteName = 'incomeTower';
    this.cost = 20;
    this.health = 3;
  }

  update(frameCount) {
    super.update();
    
    if ((frameCount % 60) === 0) {
      gameManager.incrementResourcesToAdd();
    }
  }
}
