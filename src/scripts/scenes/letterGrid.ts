import LetterCell from '../objects/letterCell'
import * as lc from '../objects/letterCell'

// LetterGrid class to represent the 4x4 letter grid game
export default class LetterGrid extends Phaser.Scene {
  constructor() {
    super({ key: 'LetterGrid' });
  }

  create() {
    // Calculate total width and height of the grid
    const gridWidth = 4 * (lc.cellSize + lc.borderWidth) - lc.borderWidth + 3 * lc.cellPadding; // Add padding between cells
    const gridHeight = 4 * (lc.cellSize + lc.borderWidth) - lc.borderWidth + 3 * lc.cellPadding; // Add padding between cells

    // Calculate starting position of the grid to center it in the game canvas
    const startX = (this.cameras.main.width - gridWidth) / 2;
    const startY = (this.cameras.main.height - gridHeight) / 2;
    
    // Loop through rows and columns to create the grid
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        // Calculate the position of the letter cell
        const x = startX + lc.borderWidth + col * (lc.cellSize + lc.borderWidth + lc.cellPadding); // Add padding between cells
        const y = startY + lc.borderWidth + row * (lc.cellSize + lc.borderWidth + lc.cellPadding); // Add padding between cells

        const randomCharCode = Math.floor(Math.random() * 26) + 65; // Generate a random char code between 65 (A) and 90 (Z)
        const randomLetter = String.fromCharCode(randomCharCode); // Convert the random char code to a letter

        // Create a new LetterCell instance
        const letterCell = new LetterCell(this, x, y, lc.cellSize, lc.borderWidth, randomLetter);
      }
    }

    // Draw a box around the entire grid
    const graphics = this.add.graphics();
    graphics.lineStyle(5, 0xffffff);
    graphics.strokeRect(startX - lc.cellPadding / 2, startY - lc.cellPadding / 2, gridWidth + lc.cellPadding, gridHeight + lc.cellPadding);
  }
}
