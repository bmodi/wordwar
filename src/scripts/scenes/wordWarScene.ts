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
    const width = 4 * (LetterCell.cellSize + LetterCell.borderWidth) - LetterCell.borderWidth + 3 * LetterCell.cellPadding; // Add padding between cells
    const height = 4 * (LetterCell.cellSize + LetterCell.borderWidth) - LetterCell.borderWidth + 3 * LetterCell.cellPadding; // Add padding between cells

    const letterGrid = new LetterGrid(this);
    letterGrid.create();

    const letterRack = new LetterRack(this, centerX - width / 2, 25, width, LetterCell.cellSize);

  }
}
