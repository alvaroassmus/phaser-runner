import { GameObjects, Scene } from 'phaser';
export class LoadingScene extends Scene {
  private drBrown!: GameObjects.Sprite;

  constructor() {
    super('loading-scene');
  }

  create(): void {
    console.log('Loading scene was created');
    this.drBrown = this.add.sprite(100, 100, 'dr_brown');
  }

  preload(): void {
    // key: 'dr_brown'
    // path from baseURL to file: 'sprites/dr_brown.png'
    this.load.baseURL = 'assets/';
    this.load.spritesheet('dr_brown', 'sprites/dr_brown.png', { frameWidth: 32, frameHeight: 48 });
  }
}
