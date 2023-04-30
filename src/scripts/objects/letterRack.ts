import LetterCell from '../objects/letterCell'
import * as lc from '../objects/letterCell'

// LetterRack class to represent a row of letter cells
export default class LetterRack extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene, x, y, width, height) {
    super(scene, x, y);
    
    const cellSize = width / 7;
    const cellPadding = cellSize / 4;
    const borderWidth = 5;

    // Loop through cells to create the rack
    for (let i = 0; i < 7; i++) {
      // Calculate the position of the letter cell
      const x = borderWidth + i * (cellSize + cellPadding);
      const y = borderWidth;

      const randomCharCode = Math.floor(Math.random() * 26) + 65; // Generate a random char code between 65 (A) and 90 (Z)
      const randomLetter = String.fromCharCode(randomCharCode); // Convert the random char code to a letter

      // Create a new LetterCell instance
      const letterCell = new LetterCell(scene, x, y, randomLetter);

      this.add(letterCell);
    }

    // Draw a box around the entire rack
    const graphics = scene.add.graphics();
    graphics.lineStyle(5, 0xffffff);
    graphics.strokeRect(x - cellPadding / 2, y - cellPadding / 2, width + cellPadding, height + cellPadding);
  }
}
