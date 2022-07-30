class GameState3 {
    constructor() {
        this.bread = createImg("assets/Bread.png");
        this.apple = createImg("assets/Apple.png");
        this.steak = createImg("assets/Steak.png");
        this.candy = createImg("assets/Candy.png");

        this.charlie = createImg("assets/IMG-5511.png");
        this.player = createImg("assets/IMG-5592.png");
    }

    spawning() {
        healthy = new Group();
        unhealthy = new Group();

        healthy.add(this.bread, this.apple, this.steak);
        unhealthy.add(this.candy);

        spawnHealthy();
        spawnUnhealthy();


    }

}