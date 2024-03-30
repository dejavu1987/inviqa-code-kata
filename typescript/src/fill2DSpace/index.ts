interface Dimension {
  w: number;
  h: number;
}

type Grid = (0 | 1)[][];

class FillTheGrid {
  grid: Grid;

  constructor() {
    this.grid = [];
  }

  init(rows: number, cols: number): this {
    this.grid = Array.from({ length: rows }, () => Array(cols).fill(0));
    return this;
  }

  place(input: Dimension): Grid {
    for (let row = 0; row < this.grid.length; row++) {
      for (let col = 0; col < this.grid[0].length; col++) {
        if (this.canPlaceInput(row, col, input)) {
          this.fillInput(row, col, input);
          return this.grid;
        }
      }
    }
    throw "Not enough space in the grid";
  }

  private canPlaceInput(row: number, col: number, input: Dimension): boolean {
    if (
      row + input.h > this.grid.length ||
      col + input.w > this.grid[0].length
    ) {
      return false; // Input goes out of bounds
    }
    for (let i = row; i < row + input.h; i++) {
      for (let j = col; j < col + input.w; j++) {
        if (this.grid[i][j] === 1) {
          return false; // Cell is already occupied
        }
      }
    }
    return true;
  }
  private fillInput(row: number, col: number, input: Dimension): void {
    for (let i = row; i < row + input.h; i++) {
      for (let j = col; j < col + input.w; j++) {
        this.grid[i][j] = 1;
      }
    }
  }
}

export default FillTheGrid;
