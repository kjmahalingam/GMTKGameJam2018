class GameObject {
  constructor(posX, posY, radius) {
    this.pos = { x: posX, y: posY };
    this.radius = radius;
    this.spriteName;
    this.sprite;
    this.health = 1;
    this.healthText;
    this.cost = 0;
    this.style = {
      font: "30px Arial",
      fill: "#ffffff",
      align: "center"
    }
  }

  getPos() {
    return this.pos;
  }

  getRadius() {
    return this.radius;
  }

  create() {
    if (gameManager.hasCollision(this)) {
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

  damage(incomingDamage) {
    this.health -= incomingDamage;
    if (this.health <= 0) {
      this.destroy();
    }
  }

  showHealth() {
    if (this.healthText) {
      this.healthText.destroy();
    }
    this.healthText = game.add.text(this.pos.x, this.pos.y+3, `${this.health}`, this.style);
    this.healthText.anchor.set(0.5, 0.5);
  }

  update(frameCount) {
    this.showHealth();
  }

  destroy() {
    gameManager.deregister(this);
    this.sprite.destroy();
    if (this.healthText) {
      this.healthText.destroy();
    }
    this.destroyed = true;
  }
}
