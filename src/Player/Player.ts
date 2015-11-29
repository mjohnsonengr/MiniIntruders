import keys = Phaser.Keyboard; // shortcut

export class Player extends Phaser.Sprite {

    constructor(game: Phaser.Game, x: number, y: number, key?: string|Phaser.RenderTexture|Phaser.BitmapData|PIXI.Texture, frame?: string|number) {

        super(game, x, y, key, frame);

        this.angle = -90;
        this.anchor.setTo(0.5, 0);

        game.physics.enable(this);

        game.add.existing(this);
    }

    public update() {

        // side-to-side
        this.body.velocity.x = 0;
        if (this.keyDown(keys.LEFT)) {
            this.body.velocity.x = -170;
        }
        else if (this.keyDown(keys.RIGHT)) {
            this.body.velocity.x = 170;
        }

    }
    private keyDown = (key: number) => this.game.input.keyboard.isDown(key);

}
