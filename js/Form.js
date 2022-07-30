class Form {
  constructor() {

    this.playButton = createButton("Play");
    this.titleImg = createImg("assets/IMG-5591.PNG", "game title");

  }

  hide() {

    this.playButton.hide();
    this.singlePlayerButton.hide();
    this.multiPlayerButton.hide();

  }

  displayContent() {
    this.titleImg.position(width / 2 - 300, 50);
    this.titleImg.class("gameTitle");

    this.playButton.position(windowWidth / 2 - 30, windowHeight / 2 - 50);
    this.playButton.class("customButton")
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.playButton.hide();
      game.update(1)
      gameState = 1
    })

    /*this.multiPlayerButton.mousePressed(() => {
      this.multiPlayerButton.hide();
      game.update(1)
      gameState = 2
    })

    this.singlePlayerButton.mousePressed(() => {
      this.singlePlayerButton.hide();
      game.update(1)
      gameState = 2
    })*/
  }

  display() {

    this.displayContent();
    this.handleMousePressed();
    game.play();

  }

}