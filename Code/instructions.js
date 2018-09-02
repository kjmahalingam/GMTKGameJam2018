const instructionState = {
  // automatically called
  create: () => {
    // add menu buttons
    let button = game.add.button(game.world.width / 2, game.world.height * .9, 'button', openMenu);

    button.width *= 2;
    button.height *= 2;
    button.anchor.setTo(0.5, 0.5);

    const textStyle = {
      font: "30px Arial",
      fill: "#FFFFFF",
      align: "center",
      stroke: "#000000",
      strokeThickness: 5
    }

    const instructionStyle = {
      font: "20px Arial",
      fill: "#FFFFFF",
      align: "center",
      stroke: "#000000",
      strokeThickness: 5,
      wordWrap: true,
      wordWrapWidth: 800
    }

    instructionString = "The goal of the game is to defeat all of the enemies and enemy bases on screen by expending your resources to build towers. All towers have a health pool, but your offensive towers also lose health over time.";

    let mainInstructionText = game.add.text(game.world.width / 2, 60, instructionString, instructionStyle);
    mainInstructionText.anchor.set(0.5, 0.5);

    attackTowerString = "This is an attack tower. It is your basic offensive unit and will deal damage to enemy units within its range. It costs 5 resources and can be added with the Q key.";
    let attackTowerInstruction = game.add.text(game.world.width / 2, 240, attackTowerString, instructionStyle);
    attackTowerInstruction.anchor.set(0.5, 0.5);

    attackTowerExample = game.add.sprite(game.world.width / 2, 170, "attackTower");
    attackTowerExample.anchor.setTo(0.5, 0.5);
    attackTowerExample.width = attackTowerExample.height = 40;


    detonateTowerString = "This is a detonation tower. When its health expires, it deals 5 damage to all enemies in range. It costs 3 resources and can be added with the W key.";
    let detonateTowerInstruction = game.add.text(game.world.width / 2, 390, detonateTowerString, instructionStyle);
    detonateTowerInstruction.anchor.set(0.5, 0.5);

    detonateTowerExample = game.add.sprite(game.world.width / 2, 320, "detonateTower");
    detonateTowerExample.anchor.setTo(0.5, 0.5);
    detonateTowerExample.width = detonateTowerExample.height = 40;

    incomeTowerString = "This is an income tower. It increases the amount of resources you receive every interval by one. They cannot be built, but you gain a new one with each enemy base you defeat.";
    let incomeTowerInstruction = game.add.text(game.world.width / 2, 540, incomeTowerString, instructionStyle);
    incomeTowerInstruction.anchor.set(0.5, 0.5);

    incomeTowerExample = game.add.sprite(game.world.width / 2, 470, "incomeTower");
    incomeTowerExample.anchor.setTo(0.5, 0.5);
    incomeTowerExample.width = incomeTowerExample.height = 40;

    let menuText = game.add.text(game.world.width / 2, game.world.height * .9 + 3, 'Menu', textStyle);
    menuText.anchor.set(0.5, 0.5);
  }
}

openMenu = () => {
  // start play state
  game.state.start('menu');
}
