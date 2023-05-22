import LetterCell from '../objects/letterCell';
import WordWarScene from '../scenes/wordWarScene';

export default class LetterGrid {

  static gridWidth: number = 4*LetterCell.cellSize + 2*LetterCell.borderWidth + 2*LetterCell.cellPadding;
  static gridHeight: number = 4*LetterCell.cellSize + 2*LetterCell.borderWidth + 2*LetterCell.cellPadding;

  scene: WordWarScene;

  constructor(scene: WordWarScene) {
    this.scene = scene;
  }

  private getCellXPosition(col: number): number {
    const { borderWidth, cellSize, cellPadding } = LetterCell;
    return this.getGridStartX() + borderWidth + cellPadding + col * (cellSize);
  }

  private getCellYPosition(row: number): number {
    const { borderWidth, cellSize, cellPadding } = LetterCell;
    return this.getGridStartY() + borderWidth + cellPadding + row * (cellSize);
  }

  private getGridStartX() {
    const { width } = this.scene.cameras.main;
    return (width - LetterGrid.gridWidth) / 2;
  }

  private getGridStartY() {
    const { height } = this.scene.cameras.main;
    return (height - LetterGrid.gridHeight) / 2;
  }

  create() {
    const { cellPadding, borderWidth } = LetterCell;
    // Loop through rows and columns to create the grid
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        // Calculate the position of the letter cell
        const x = this.getCellXPosition(col);
        const y = this.getCellYPosition(row);

        const randomCharCode = Math.floor(Math.random() * 26) + 65; // Generate a random char code between 65 (A) and 90 (Z)
        const randomLetter = String.fromCharCode(randomCharCode); // Convert the random char code to a letter

        // Create a new LetterCell instance
        const letterCell = new LetterCell(this.scene, x, y, randomLetter);
      }
    }

    // Draw a box around the entire grid
    const graphics = this.scene.add.graphics();
    graphics.lineStyle(borderWidth, 0xffffff);
    graphics.strokeRect(
      this.getGridStartX()+borderWidth/2,
      this.getGridStartY()+borderWidth/2,
      LetterGrid.gridWidth-borderWidth,
      LetterGrid.gridHeight-borderWidth
    );
  }
}
