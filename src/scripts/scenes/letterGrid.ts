
// Set cell size and border size
const cellSize = 100;
const borderWidth = 5;
const cellPadding = 5; // Set cell padding size

// LetterCell class to represent a letter cell in the grid
class LetterCell extends Phaser.GameObjects.Graphics {
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

// LetterGrid class to represent the 4x4 letter grid game
export default class LetterGrid extends Phaser.Scene {
  constructor() {
    super({ key: 'LetterGrid' });
  }

  create() {
    // Calculate total width and height of the grid
    const gridWidth = 4 * (cellSize + borderWidth) - borderWidth + 3 * cellPadding; // Add padding between cells
    const gridHeight = 4 * (cellSize + borderWidth) - borderWidth + 3 * cellPadding; // Add padding between cells

    // Calculate starting position of the grid to center it in the game canvas
    const startX = (this.cameras.main.width - gridWidth) / 2;
    const startY = (this.cameras.main.height - gridHeight) / 2;
    
    // Loop through rows and columns to create the grid
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        // Calculate the position of the letter cell
        const x = startX + borderWidth + col * (cellSize + borderWidth + cellPadding); // Add padding between cells
        const y = startY + borderWidth + row * (cellSize + borderWidth + cellPadding); // Add padding between cells

        const randomCharCode = Math.floor(Math.random() * 26) + 65; // Generate a random char code between 65 (A) and 90 (Z)
        const randomLetter = String.fromCharCode(randomCharCode); // Convert the random char code to a letter

        // Create a new LetterCell instance
        const letterCell = new LetterCell(this, x, y, cellSize, borderWidth, randomLetter);
      }
    }
  }
}
