import LetterCell from '../objects/letterCell'

export default class LetterGrid extends Phaser.GameObjects.Graphics {

  static gridWidth: number = 4 * (LetterCell.cellSize + LetterCell.borderWidth) - LetterCell.borderWidth + 3 * LetterCell.cellPadding;
  static gridHeight: number = 4 * (LetterCell.cellSize + LetterCell.borderWidth) - LetterCell.borderWidth + 3 * LetterCell.cellPadding;

  constructor(scene: Phaser.Scene) {
    super(scene);
  }

  private getXPosition(col: number): number {
    return this.getStartX() + LetterCell.borderWidth + col * (LetterCell.cellSize + LetterCell.borderWidth + LetterCell.cellPadding);
  }

  private getYPosition(row: number): number {
    return this.getStartY() + LetterCell.borderWidth + row * (LetterCell.cellSize + LetterCell.borderWidth + LetterCell.cellPadding);
  }

  private getStartX() {
    return (this.scene.cameras.main.width - LetterGrid.gridWidth) / 2;
  }

  private getStartY() {
    return (this.scene.cameras.main.height - LetterGrid.gridHeight) / 2;
  }

  create() {
    // Loop through rows and columns to create the grid
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        // Calculate the position of the letter cell
        const x = this.getXPosition(col);
        const y = this.getYPosition(row);

        const randomCharCode = Math.floor(Math.random() * 26) + 65; // Generate a random char code between 65 (A) and 90 (Z)
        const randomLetter = String.fromCharCode(randomCharCode); // Convert the random char code to a letter

        // Create a new LetterCell instance
        const letterCell = new LetterCell(this.scene, x, y, randomLetter);
      }
    }

    // Draw a box around the entire grid
    const graphics = this.scene.add.graphics();
    graphics.lineStyle(5, 0xffffff);
    graphics.strokeRect(
      this.getStartX() - LetterCell.cellPadding / 2 - LetterCell.borderWidth,
      this.getStartY() - LetterCell.cellPadding / 2 - LetterCell.borderWidth,
      LetterGrid.gridWidth + LetterCell.cellPadding * 2,
      LetterGrid.gridHeight + LetterCell.cellPadding * 2
    );
  }
}
