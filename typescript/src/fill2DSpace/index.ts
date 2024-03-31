interface Dimension {
  w: number;
  h: number;
}

interface Position {
  x: number;
  y: number;
}

type ChildObject = Dimension & Position;

type Grid = (0 | 1)[][];

class FillTheGrid {
  grid: Grid;
  children: ChildObject[];
  rowsTemplate: number[];
  colsTemplate: number[];

  constructor() {
    this.grid = [];
    this.children = [];
    this.rowsTemplate = [];
    this.colsTemplate = [];
  }

  init(rows: number, cols: number): this {
    this.grid = Array.from({ length: rows }, () => Array(cols).fill(0));
    this.rowsTemplate = Array(rows).fill(1);
    this.colsTemplate = Array(cols).fill(1);
    return this;
  }

  setGridTemplate(rowTpl: number[], colTpl?: number[]): void {
    if (rowTpl.length !== this.grid.length) {
      throw new Error("Invalid row template length");
    }
    if (colTpl && colTpl.length !== this.grid[0].length) {
      throw new Error("Invalid column template length");
    }
    this.rowsTemplate = rowTpl;
    if (colTpl) {
      this.colsTemplate = colTpl;
    }
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
    this.children.push({
      ...input,
      x: col,
      y: row,
    });
  }
}

export default FillTheGrid;
