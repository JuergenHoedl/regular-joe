export class Dialog {
  scene: Phaser.Scene;
  background: Phaser.GameObjects.Rectangle;
  text: Phaser.GameObjects.Text;
  confirmButton: Phaser.GameObjects.Rectangle;
  confirmButtonText: Phaser.GameObjects.Text;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;

    const width = this.scene.sys.game.config.width as number;
    const height = this.scene.sys.game.config.height as number;

    // Create the background
    this.background = this.scene.add.rectangle(20, 20, width - 40, height/5, 0xe8fce3);
    this.background.setOrigin(0, 0);
    this.background.setVisible(false);

    // Create the text
    this.text = this.scene.add.text(30, 30, '', { color: '#000000', fontSize: '16px', fontFamily: 'Arial'});
    this.text.setVisible(false);

    // Create the confirm button
    this.confirmButton = this.scene.add.rectangle(width - 60, height/5 + 50, 80, 40, 0xe8fce3);
    this.confirmButton.setInteractive();
    this.confirmButton.on('pointerdown', () => this.hide());
    this.confirmButton.on('pointerover', () => this.scene.input.setDefaultCursor('pointer'));
    this.confirmButton.on('pointerout', () => this.scene.input.setDefaultCursor('default'));
    this.confirmButton.setVisible(false);

    // Create the confirm button text
    this.confirmButtonText = this.scene.add.text(width - 70, height/5 + 43, 'Ok', { color: '#000000', fontSize: '16px', fontFamily: 'Arial'});
    this.confirmButtonText.setVisible(false);
  }

  show(text: string) {
    this.text.setText(text);
    this.background.setVisible(true);
    this.text.setVisible(true);
    this.confirmButton.setVisible(true);
    this.confirmButtonText.setVisible(true);
  }

  hide() {
    this.background.setVisible(false);
    this.text.setVisible(false);
    this.confirmButton.setVisible(false);
    this.confirmButtonText.setVisible(false);
  }
}