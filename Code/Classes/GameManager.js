class GameManager {
  constructor() {
    this.create();

    this.style = {
      font: "30px Arial",
      fill: "#ffffff",
      align: "center"
    }
  }

  create() {
    this.gameObjects = {
      incomeTower: [],
      attackTower: [],
      enemyBase: [],
      enemy: []
    };
    this.frameCount = 1;
    this.resources = 25;
    this.resourcesToAdd = 0;
    this.resourceText;
  }

  destroy() {
    for (const list of Object.entries(this.gameObjects)) {
      for (const gameObject of list[1]) {
        gameObject.destroy(true);
      }
    }

    if (this.resourceText) {
      this.resourceText.destroy();
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

  numTowers() {
    const list = [...this.gameObjects.incomeTower, ...this.gameObjects.attackTower];
    return list.length;
  }

  numEnemies() {
    const list = [...this.gameObjects.enemyBase, ...this.gameObjects.enemy];
    return list.length;
  }

  findDistance(object1, object2) {
    const xDiff = Math.abs(object1.getPos().x - object2.getPos().x);
    const yDiff = Math.abs(object1.getPos().y - object2.getPos().y);
    const dist = Math.sqrt((xDiff ** 2) + (yDiff ** 2));
    return dist;
  }

  findClosestTower(obj) {
    const list = [...this.gameObjects.incomeTower, ...this.gameObjects.attackTower];
    let closestTower;
    let dist;

    for (let gameObject of list) {
      let currentDist = this.findDistance(obj, gameObject);
      if ((closestTower == null) || (currentDist < dist)) {
        closestTower = gameObject;
        dist = currentDist;
      }
    }

    return closestTower;
  }

  findClosestEnemy(obj) {
    const list = [...this.gameObjects.enemy, ...this.gameObjects.enemyBase];
    let closestEnemy;
    let dist;

    for (let gameObject of list) {
      let currentDist = this.findDistance(obj, gameObject);
      if ((closestEnemy == null) || (currentDist < dist)) {
        closestEnemy = gameObject;
        dist = currentDist;
      }
    }

    if (!dist || ((dist - closestEnemy.radius) > obj.range)) {
      return;
    }

    return closestEnemy;
  }

  isColliding(object1, object2) {
    const dist = this.findDistance(object1, object2);
    return dist < (object1.radius + object2.radius);
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

  addEnemy(obj) {
    let enemy = new Enemy(obj.pos.x, obj.pos.y);
    enemy.create();
  }

  incrementResourcesToAdd() {
    this.resourcesToAdd++;
  }

  updateResources() {
    this.resources += this.resourcesToAdd;
    this.resourcesToAdd = 0;
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
    this.resourceText = game.add.text(100, 30, `Resources: ${this.resources}`, this.style);
    this.resourceText.anchor.set(0.5, 0.5);
  }

  incrementFrameCount() {
    this.frameCount++;
  }

  update() {
    if (this.numTowers() <= 0) {
      game.state.start('menu', true, false, 'You Lost.');
    }

    if (this.numEnemies() <= 0) {
      game.state.start('menu', true, false, 'You Win!');
    }

    for (const list of Object.entries(this.gameObjects)) {
      for (const gameObject of list[1]) {
        gameObject.update(this.frameCount);
      }
    }

    gameManager.updateResources();
    gameManager.incrementFrameCount();
    gameManager.drawHUD();
  }
}
