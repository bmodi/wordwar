import LetterGrid from '../objects/letterGrid'
import LetterRack from '../objects/letterRack'

// WordWarScene class to represent the 4x4 letter grid game
export default class WordWarScene extends Phaser.Scene {
  private letterGrid: LetterGrid;
  private letterRackPlayer: LetterRack;
  private letterRackOpponent: LetterRack;

  constructor() {
    super({ key: 'WordWarScene' });

    this.letterGrid = new LetterGrid(this);
    this.letterRackPlayer = new LetterRack(this, 0);
    this.letterRackOpponent = new LetterRack(this, 1);
  }

  create() {
    this.letterGrid.create();
    this.letterRackPlayer.create();
    this.letterRackOpponent.create();
  }
}
