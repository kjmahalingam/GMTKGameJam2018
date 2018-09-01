class AttackTower extends GameObject {
  constructor(posX, posY) {
    super(posX, posY, 20);
    this.spriteName = 'attackTower';
    this.cost = 5;
  }
}
