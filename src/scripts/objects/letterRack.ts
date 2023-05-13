import LetterCell from '../objects/letterCell';

// LetterRack class to represent a row of letter cells
export default class LetterRack extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene, rackXPos: number, rackYPos: number, width: number, height: number) {
    super(scene, rackXPos, rackYPos);

    // Create constants for the cell size and padding
    const {cellSize, cellPadding, borderWidth} = LetterCell;
    
    // Loop through cells to create the rack
    for (let i = 0; i < 7; i++) {
      // Calculate the position of the letter cell
      const x = rackXPos + borderWidth + i * (cellSize + cellPadding);
      const y = rackYPos + borderWidth;

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
      rackXPos,
      rackYPos,
      width + cellPadding + borderWidth,
      height + cellPadding + borderWidth
    );
    
  }
}
