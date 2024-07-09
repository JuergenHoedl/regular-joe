import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  player!: Phaser.Physics.Arcade.Sprite;
  uncle!: Phaser.Physics.Arcade.Sprite;

  upKey!: Phaser.Input.Keyboard.Key;
  downKey!: Phaser.Input.Keyboard.Key;
  leftKey!: Phaser.Input.Keyboard.Key;
  rightKey!: Phaser.Input.Keyboard.Key;

  playerNearUncle: boolean = false;

  playerActionOptions: Phaser.GameObjects.Text[] = [];


  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('player', 'assets/player.png');
    this.load.image('npc', 'assets/npc.png');
  }

  create() {
    this.uncle = this.physics.add.sprite(200, 200, 'npc');

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


    if ( this.calcDistance(this.player, this.uncle) < 50 ){
      if (!this.playerNearUncle) {
        this.playerNearUncle = true;
        this.addActionOption(10, 10, 'Talk');
      }
    } else {
      if (this.playerNearUncle) {
        this.playerNearUncle = false;
        this.removeActionOption(0);
      }
    }
      
  }

  calcDistance(obj1: Phaser.Physics.Arcade.Sprite, obj2: Phaser.Physics.Arcade.Sprite) {
    return Phaser.Math.Distance.Between(obj1.x, obj1.y, obj2.x, obj2.y);
  }

  addActionOption(x: number, y: number, text: string) {
    let button = this.add.text(x, y, text)
      .setInteractive()
      .on('pointerdown', () => console.log(`Button ${text} clicked`));
  
    this.playerActionOptions.push(button);
  }

  removeActionOption(index: number) {
    if (index >= 0 && index < this.playerActionOptions.length) {
      this.playerActionOptions[index].destroy();
      this.playerActionOptions.splice(index, 1);
    }
  }


}
