class GameObject {
  constructor(posX, posY, radius) {
    this.pos = { x: posX, y: posY };
    this.radius = radius;
    this.spriteName;
    this.sprite;
    this.cost = 0;
  }

  getPos() {
    return this.pos;
  }

  getRadius() {
    return this.radius;
  }

  create() {
    if (gameManager.hasCollision(this)) {
      console.log('collide');
      return;
    }

    if (!gameManager.payResources(this.cost)) {
      return;
    }

    this.sprite = game.add.sprite(this.pos.x, this.pos.y, this.spriteName);
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.width = this.sprite.height = this.radius * 2;
    gameManager.register(this);
  }

  update(frameCount) {}

  destroy() {
    gameManager.deregister(this);
    this.sprite.destroy();
  }
}
