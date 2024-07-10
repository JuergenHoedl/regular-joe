import Phaser from 'phaser';
import { NPC } from '../gameobjects/Interactable';
import { Player } from '../gameobjects/player';
import { Dialog } from '../Utils/Dialog';


export default class GameScene extends Phaser.Scene {
  player!: Player;
  uncle!: NPC;
  dialog!: Dialog;

  playerNearUncle: boolean = false;

  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.spritesheet('characters', 'assets/characters.png', { frameWidth: 16, frameHeight: 16 })
  }

  create() {
    this.uncle = new NPC(this, 200, 200, 'characters', 60);
    this.player = new Player(this, 400, 300, 'characters', 20);
    this.dialog = new Dialog(this);
  }

  update(time: number, delta: number): void {
    this.player.update();
  }

}
