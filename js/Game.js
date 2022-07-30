class Game {
  constructor() {
    this.singlePlayerButton = createButton("Single Player")
    this.multiPlayerButton = createButton("Multiplayer")
    this.rightButton = createButton("")
    this.leftButton = createButton("")
    this.background = createImg("assets/IMG-5584")
    this.apple = createImg("assets/Apple.png")
    this.candy = createImg("assets/Candy.png")
    this.bread = createImg("assets/Bread.png")
    this.steak = createImg("assets/Steak.png")
  }

  update(state) {
    database.ref('/').update({
      gameState: state
    })
  }
  aaaaaaaaa

  start() {
    form = new Form();
    player = new Player();
    //gamestate2 = new GameState2();
    form.display();
  }

  play() {

    if (gameState === 2) {
      this.singlePlayerButton.position(width / 2 - 300, 50);
      this.multiPlayerButton.position(width / 2 - 300, 100);

      this.singlePlayerButton.display();
      this.multiPlayerButton.display();

      this.background("white");
    }

    if (this.singlePlayerButton.mousePressed()) {
      this.singlePlayerButton.hide();
      gameState = 2;
    } else {
      this.multiPlayerButton.display()
      this.singlePlayerButton.display()
    }

    if (this.multiPlayerButton.mousePressed()) {
      this.multiPlayerButton.hide();
      gameState = 3;
    } else {
      this.multiPlayerButton.display()
      this.singlePlayerButton.display()
    }

  }

  play2() {
    this.background()
    healtyGroup = new Group();
    unhealthyGroup = new Group();

    healthyGroup.add(this.apple)
    healthyGroup.add(this.bread)
    healthyGroup.add(this.steak)

    unhealthyGroup.add(this.candy)

    spawnHealthyGroup();
    spawnUnhealthyGroup();


  }

  singlePlayerPressed() {
    if (this.singlePlayerButton.mousePressed()) {
      this.singlePlayerButton.hide();
      gameState = 2
    } else {
      this.singlePlayerButton.display();
      this.multiPlayerButton.display();
    }


  }

  multiPlayerPressed() {
    if (this.multiPlayerButton.mousePressed()) {
      this.multiPlayerButton.hide();
      gameState = 3
    } else {
      this.singlePlayerButton.display();
      this.multiPlayerButton.display();
    }
  }
}