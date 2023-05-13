// LetterCell class to represent a letter cell in the grid
export default class LetterCell extends Phaser.GameObjects.Graphics {

  static cellSize: number = 80;
  static borderWidth: number = 5;
  static cellPadding: number = 20;
  
  constructor(scene: Phaser.Scene, x: number, y: number, letter: string) {
    super(scene);

    this.fillStyle(0xdf7c00, 1); // Set fill color to white
    this.fillRect(x, y, LetterCell.cellSize, LetterCell.cellSize); // Draw filled-in square
    this.lineStyle(LetterCell.borderWidth, 0x000000, 1); // Set border color to black
    this.strokeRect(x, y, LetterCell.cellSize, LetterCell.cellSize); // Draw border around the square
    
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

