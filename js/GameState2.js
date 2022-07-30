class GameState2 {
    constructor() {
        this.singlePlayerButton = createButton("Single Player");
        this.multiPlayerButton = createButton("Multiplayer");
        this.background = loadImg("IMG-5584");
        this.singlePlayerButton = false;
        this.multiPlayerButton = false;
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        })
    }

    play(gameState2) {

        if (gameState === 2) {
            this.singlePlayerButton.position(width / 5 - 10, height / 5 + 200);
            this.multiPlayerButton.position(width / 5 + 750, height / 5 + 200);

            this.singlePlayerButton.display();
            this.multiPlayerButton.display();

            this.background(0);
        }

        if (this.singlePlayerButton = true) {
            this.singlePlayerButton.hide();
            this.multiPlayerButton.hide();
            update(3);
            gameState = 3;
        }

        if (this.multiPlayerButton = true) {
            this.singlePlayerButton.hide();
            this.multiPlayerButton.hide();
            update(4);
            gameState = 4;
        }

    }

}