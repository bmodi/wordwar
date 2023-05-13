import LetterCell from '../objects/letterCell'
import * as lc from '../objects/letterCell'

// LetterRack class to represent a row of letter cells
export default class LetterRack extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number) {
    super(scene, x, y);
    
    // Loop through cells to create the rack
    for (let i = 0; i < 7; i++) {
      // Calculate the position of the letter cell
      const x = LetterCell.borderWidth + i * (LetterCell.cellSize + LetterCell.cellPadding);
      const y = LetterCell.borderWidth;

      const randomCharCode = Math.floor(Math.random() * 26) + 65; // Generate a random char code between 65 (A) and 90 (Z)
      const randomLetter = String.fromCharCode(randomCharCode); // Convert the random char code to a letter

      // Create a new LetterCell instance
      const letterCell = new LetterCell(scene, x, y, randomLetter);

      this.add(letterCell);
    }

    // Draw a box around the entire rack
    const graphics = scene.add.graphics();
    graphics.lineStyle(5, 0xffffff);
    graphics.strokeRect(
      x - LetterCell.cellPadding / 2,
      y - LetterCell.cellPadding / 2,
      width + LetterCell.cellPadding, height + LetterCell.cellPadding);
  }
}
