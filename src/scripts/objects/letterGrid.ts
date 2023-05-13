import LetterCell from '../objects/letterCell';

export default class LetterGrid extends Phaser.GameObjects.Graphics {

  static gridWidth: number = 4 * (LetterCell.cellSize + LetterCell.borderWidth) - LetterCell.borderWidth + 3 * LetterCell.cellPadding;
  static gridHeight: number = 4 * (LetterCell.cellSize + LetterCell.borderWidth) - LetterCell.borderWidth + 3 * LetterCell.cellPadding;

  constructor(scene: Phaser.Scene) {
    super(scene);
  }

  private getXPosition(col: number): number {
    const { borderWidth, cellSize, cellPadding } = LetterCell;
    return this.getStartX() + borderWidth + col * (cellSize + borderWidth + cellPadding);
  }

  private getYPosition(row: number): number {
    const { borderWidth, cellSize, cellPadding } = LetterCell;
    return this.getStartY() + borderWidth + row * (cellSize + borderWidth + cellPadding);
  }

  private getStartX() {
    const { width } = this.scene.cameras.main;
    return (width - LetterGrid.gridWidth) / 2;
  }

  private getStartY() {
    const { height } = this.scene.cameras.main;
    return (height - LetterGrid.gridHeight) / 2;
  }

  create() {
    const { cellPadding, borderWidth } = LetterCell;
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
      this.getStartX() - cellPadding / 2 - borderWidth,
      this.getStartY() - cellPadding / 2 - borderWidth,
      LetterGrid.gridWidth + cellPadding * 2,
      LetterGrid.gridHeight + cellPadding * 2
    );
  }
}
