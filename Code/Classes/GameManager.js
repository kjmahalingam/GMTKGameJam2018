class GameManager {
  constructor() {
    this.frameCount = 0;
    this.gameObjects = {
      incomeTower: [],
      attackTower: [],
      enemyBase: [],
      enemy: []
    }
    this.resources = 0;
    this.resourceText;
    this.style = {
      font: "30px Arial",
      fill: "#ffffff",
      align: "center"
    }
  }

  register(gameObject) {
    this.gameObjects[`${gameObject.spriteName}`].push(gameObject);
  }

  deregister(gameObject) {
    let gameObjects = this.gameObjects[`${gameObject.spriteName}`];
    for (let i = 0; i < gameObjects.length; i++) {
      if (Object.is(gameObject, gameObjects[i])) {
        gameObjects.splice(i, 1);
      }
    }
  }

  hasCollision(obj) {
    for (const list of Object.entries(this.gameObjects)) {
      for (const gameObject of list[1]) {
        if (!Object.is(gameObject, obj)
        && this.isColliding(gameObject, obj)) {
          return gameObject;
        }
      }
    }
  }

  hasCollisionWithTower(obj) {
    const list = [...this.gameObjects.incomeTower, ...this.gameObjects.attackTower];

    for(gameObject of list) {
      if (!Object.is(gameObject, obj)
        && this.isColliding(gameObject, obj)) {
        return gameObject;
      }
    }
  }

  hasCollisionWithEnemy(obj) {
    const list = this.gameObjects.enemy;

    for(gameObject of list) {
      if (!Object.is(gameObject, obj)
        && this.isColliding(gameObject, obj)) {
        return gameObject;
      }
    }
  }

  hasCollisionWithEnemyBase(obj) {
    const list = this.gameObjects.enemyBase;

    for(gameObject of list) {
      if (!Object.is(gameObject, obj)
        && this.isColliding(gameObject, obj)) {
        return gameObject;
      }
    }
  }

  isColliding(object1, object2) {
    const xDiff = Math.abs(object1.getPos().x - object2.getPos().x);
    const yDiff = Math.abs(object1.getPos().y - object2.getPos().y);
    const dist = Math.sqrt((xDiff ** 2) + (yDiff ** 2));
    return dist < (object1.radius + object2.radius);
  }

  incrementFrameCount() {
    this.frameCount++;
  }

  incrementResources() {
    this.resources++;
  }

  payResources(cost) {
    if (cost > this.resources) {
      return false;
    }

    this.resources -= cost;
    return true;
  }

  drawHUD() {
    if (this.resourceText != null) {
      this.resourceText.destroy();
    }
    this.resourceText = game.add.text(10, 10, `Resources: ${this.resources}`, this.style);
  }
}
