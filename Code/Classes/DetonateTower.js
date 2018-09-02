class DetonateTower extends GameObject {
  constructor(posX, posY) {
    super(posX, posY, 25);
    this.spriteName = 'detonateTower';
    this.cost = 3;
    this.health = 3;
    this.strength = 5;
    this.range = 40;
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

    if (!manual) {
      breakSound.play();
    }
  }
}
