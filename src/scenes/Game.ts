import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  player!: Phaser.Physics.Arcade.Sprite;
  upKey!: Phaser.Input.Keyboard.Key;
  downKey!: Phaser.Input.Keyboard.Key;
  leftKey!: Phaser.Input.Keyboard.Key;
  rightKey!: Phaser.Input.Keyboard.Key;

  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('player', 'assets/player.png');
  }

  create() {
    this.player = this.physics.add.sprite(400, 300, 'player');

    this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  }

  update(time: number, delta: number): void {
    
    this.player.setVelocity(0);
    if (this.leftKey.isDown && !this.rightKey.isDown) {
      this.player.setVelocityX(-200);
    } else if (this.rightKey.isDown && !this.leftKey.isDown) {
      this.player.setVelocityX(200);
    }

    if (this.upKey.isDown && !this.downKey.isDown) {
      this.player.setVelocityY(-200);
    } else if (this.downKey.isDown && !this.upKey.isDown) {
      this.player.setVelocityY(200);
    }
      
  }
}
