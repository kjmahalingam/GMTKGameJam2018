class AttackTower extends GameObject {
  constructor(posX, posY) {
    super(posX, posY, 20);
    this.spriteName = 'attackTower';
    this.health = 2;
    this.cost = 5;
  }

  update() {
    super.update();  
  }
}
