export class Player extends Phaser.Physics.Arcade.Sprite {

  upKey: Phaser.Input.Keyboard.Key;
  downKey: Phaser.Input.Keyboard.Key;
  leftKey: Phaser.Input.Keyboard.Key;
  rightKey: Phaser.Input.Keyboard.Key;

  constructor(scene: Phaser.Scene, x: number, y: number, spritesheet: string, frameIndex: number) {
    super(scene, x, y, spritesheet, frameIndex);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setCollideWorldBounds(true);
    this.setScale(2);

    this.upKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.downKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.leftKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.rightKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  }

  update(): void {
    this.setVelocity(0);
    if (this.leftKey.isDown && !this.rightKey.isDown) {
      this.setVelocityX(-200);
    } else if (this.rightKey.isDown && !this.leftKey.isDown) {
      this.setVelocityX(200);
    }

    if (this.upKey.isDown && !this.downKey.isDown) {
      this.setVelocityY(-200);
    } else if (this.downKey.isDown && !this.upKey.isDown) {
      this.setVelocityY(200);
    }
  }

}