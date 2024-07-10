import GameScene from '../scenes/Game';

abstract class Interactable extends Phaser.Physics.Arcade.Sprite {

  scene: GameScene;

  constructor(scene: GameScene, x: number, y: number, spritesheet: string, frameIndex: number) {
    super(scene, x, y, spritesheet, frameIndex);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.scene = scene;
    this.setInteractive(); 
    this.setScale(2);
    this.on('pointerdown', () => this.interact()); 
    this.on('pointerover', () => this.pointerover()); 
    this.on('pointerout', () => this.pointerout());
  }

  abstract interact(): void;

  pointerover() {
    this.scene.input.setDefaultCursor('pointer');
  }

  pointerout() {
    this.scene.input.setDefaultCursor('default');
  }
}

export class NPC extends Interactable {
  constructor(scene: GameScene, x: number, y: number, spritesheet: string, frameIndex: number) {
    super(scene, x, y, spritesheet, frameIndex);
  }

  interact() {
    let distance = Phaser.Math.Distance.Between(this.scene.player.x, this.scene.player.y, this.x, this.y);
    if (distance > 100) {
      console.log('Thats too far away.');
      return;
    }
    this.scene.dialog.show('Hello, I am your uncle Sam and I have a quest for you.');
  }
}
