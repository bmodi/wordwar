// LetterCell class to represent a letter cell in the grid
export default class LetterCell extends Phaser.GameObjects.Graphics {

  static cellSize: number = 100;
  static borderWidth: number = 10;
  static cellPadding: number = 5;
  
  constructor(scene: Phaser.Scene, x: number, y: number, letter: string) {
    super(scene);

    // Draw filled-in square
    this.fillStyle(0xdf7c00, 1);
    this.fillRect(x+LetterCell.cellPadding, y+LetterCell.cellPadding,
      LetterCell.cellSize-2*LetterCell.cellPadding, LetterCell.cellSize-2*LetterCell.cellPadding);

    // Draw border around the square, leaving padding around the drawn cell
    this.lineStyle(LetterCell.borderWidth, 0x000000, 1);
    this.strokeRect(x+LetterCell.cellPadding+LetterCell.borderWidth/2, y+LetterCell.cellPadding+LetterCell.borderWidth/2,
      LetterCell.cellSize-2*LetterCell.cellPadding-LetterCell.borderWidth,
      LetterCell.cellSize-2*LetterCell.cellPadding-LetterCell.borderWidth);

    this.setInteractive(new Phaser.Geom.Rectangle(x, y, LetterCell.cellSize, LetterCell.cellSize),Phaser.Geom.Rectangle.Contains)
      .setName(letter) // Set the letter as the name of the graphics
      .on('pointerup', this.onLetterClicked); // Add click event listener
      
    scene.add.existing(this); // Add the graphics object to the scene
    const letterText = this.scene.add.text(x + LetterCell.cellSize / 2, y + LetterCell.cellSize / 2, letter, { font: '40px Arial Black', backgroundColor: '#df7c00' })
    .setOrigin(0.5); // Center the text inside the cell
  }

  // Callback function when a letter is clicked
  onLetterClicked(pointer) {
    const clickedLetter = this.name; // Get the name (letter) of the clicked game object
    console.log(`Letter clicked: ${clickedLetter}`); // Log the clicked letter
  }
}

