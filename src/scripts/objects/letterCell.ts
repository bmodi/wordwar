// Set cell size and border size
export const cellSize = 100;
export const borderWidth = 5;
export const cellPadding = 50; // Set cell padding size

// LetterCell class to represent a letter cell in the grid
export default class LetterCell extends Phaser.GameObjects.Graphics {
  constructor(scene: Phaser.Scene, x: number, y: number, size: number, borderWidth:number , letter: string) {
    super(scene);

    this.fillStyle(0xdf7c00, 1); // Set fill color to white
    this.fillRect(x, y, size, size); // Draw filled-in square
    this.lineStyle(borderWidth, 0x000000, 1); // Set border color to black
    this.strokeRect(x, y, size, size); // Draw border around the square
    
    this.setInteractive(new Phaser.Geom.Rectangle(x, y, size, size),Phaser.Geom.Rectangle.Contains)
      .setName(letter) // Set the letter as the name of the graphics
      .on('pointerup', this.onLetterClicked); // Add click event listener
      
    scene.add.existing(this); // Add the graphics object to the scene
    const letterText = this.scene.add.text(x + cellSize / 2, y + cellSize / 2, letter, { font: '48px Arial Black', backgroundColor: '#df7c00' })
    .setOrigin(0.5); // Center the text inside the cell
  }

  // Callback function when a letter is clicked
  onLetterClicked(pointer) {
    const clickedLetter = this.name; // Get the name (letter) of the clicked game object
    console.log(`Letter clicked: ${clickedLetter}`); // Log the clicked letter
  }
}

