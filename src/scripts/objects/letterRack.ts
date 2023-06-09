import LetterCell from '../objects/letterCell';
import LetterGrid from '../objects/letterGrid';
import WordWarScene from '../scenes/wordWarScene';

// LetterRack class to represent a row of letter cells
export default class LetterRack {

  static rackWidth: number = 7*LetterCell.cellSize + 2*LetterCell.borderWidth + 2*LetterCell.cellPadding;
  static rackHeight: number = LetterCell.cellSize + 2*LetterCell.borderWidth + 2*LetterCell.cellPadding;

  scene: WordWarScene;
  rackXPos: number;
  rackYPos: number;
  position: number;

  constructor(scene: WordWarScene, position: number) {
    this.scene = scene;
    this.position=position;
  }

  create() {

    // Create constants for the cell size and padding
    const {cellSize, cellPadding, borderWidth} = LetterCell;
    const centerX = this.scene.cameras.main.width / 2;
    const centerY = this.scene.cameras.main.height / 2;

    if ( this.position==0 ) {  // Player rack
      this.rackXPos = centerX - LetterRack.rackWidth / 2;
      this.rackYPos = centerY - LetterGrid.gridHeight/2 - LetterRack.rackHeight - LetterCell.cellPadding;
    } else {  // Opponent rack
      this.rackXPos = centerX - LetterRack.rackWidth / 2;
      this.rackYPos = centerY + LetterGrid.gridHeight/2 + LetterCell.cellPadding;
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
