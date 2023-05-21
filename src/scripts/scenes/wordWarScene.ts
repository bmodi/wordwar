import LetterGrid from '../objects/letterGrid'
import LetterRack from '../objects/letterRack'
import LetterCell from '../objects/letterCell'

// WordWarScene class to represent the 4x4 letter grid game
export default class WordWarScene extends Phaser.Scene {
  constructor() {
    super({ key: 'WordWarScene' });
  }

  create() {
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    const letterGrid = new LetterGrid(this);
    letterGrid.create();

    const letterRackPlayer = new LetterRack(this,
      centerX - LetterRack.rackWidth / 2, centerY - LetterGrid.gridHeight/2 - LetterRack.rackHeight - LetterCell.cellPadding);
    const letterRackOpponent = new LetterRack(this,
      centerX - LetterRack.rackWidth / 2, centerY + LetterGrid.gridHeight/2 + LetterCell.cellPadding);

    letterRackPlayer.create();
    letterRackOpponent.create();
  }
}
