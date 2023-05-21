import LetterCell from '../objects/letterCell';

// LetterRack class to represent a row of letter cells
export default class LetterRack extends Phaser.GameObjects.Graphics {

  static rackWidth: number = 7*LetterCell.cellSize + 2*LetterCell.borderWidth + 2*LetterCell.cellPadding;
  static rackHeight: number = LetterCell.cellSize + 2*LetterCell.borderWidth + 2*LetterCell.cellPadding;

  rackXPos: number;
  rackYPos: number;

  constructor(scene: Phaser.Scene, rackXPos: number, rackYPos: number) {
    super(scene);

    this.rackXPos=rackXPos;
    this.rackYPos=rackYPos;
  }

  create() {

    // Create constants for the cell size and padding
    const {cellSize, cellPadding, borderWidth} = LetterCell;
    
    // Loop through cells to create the rack
    for (let i = 0; i < 7; i++) {
      // Calculate the position of the letter cell
      const x = this.rackXPos + borderWidth + cellPadding + i*cellSize ;
      const y = this.rackYPos + borderWidth + cellPadding;

      const randomCharCode = Math.floor(Math.random() * 26) + 65; // Generate a random char code between 65 (A) and 90 (Z)
      const randomLetter = String.fromCharCode(randomCharCode); // Convert the random char code to a letter

      // Create a new LetterCell instance
      const letterCell = new LetterCell(this.scene, x, y, randomLetter);
    }

    // Draw a box around the entire rack
    const graphics = this.scene.add.graphics();
    graphics.lineStyle(borderWidth, 0xffffff);
    graphics.strokeRect(
      this.rackXPos + borderWidth/2,
      this.rackYPos + borderWidth/2,
      LetterRack.rackWidth - borderWidth,
      LetterRack.rackHeight - borderWidth
    );
  }
}
