import FillTheGrid from "./index";

describe("FillTheGrid", () => {
  let fillTheGrid;

  beforeEach(() => {
    fillTheGrid = new FillTheGrid();
  });

  describe("Initialize grid", () => {
    it("should initialize with desired dimension", () => {
      fillTheGrid.init(3, 3);
      expect(fillTheGrid.grid).toEqual([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
    });
    it("should initialize a huge grid", () => {
      fillTheGrid.init(10000, 10000);
    });
  });

  describe("Place in Grid", () => {
    it("should throw error when input is larger than board", () => {
      fillTheGrid.init(3, 3);
      expect(() => fillTheGrid.place({ w: 4, h: 2 })).toThrow(
        "Not enough space in the grid"
      );
    });

    it("should throw error if there's not enough space", () => {
      fillTheGrid.init(3, 3);

      fillTheGrid.place({ w: 2, h: 2 });
      expect(() => {
        fillTheGrid.place({ w: 2, h: 2 });
      }).toThrow("Not enough space in the grid");
    });

    it("should throw error if the board is full", () => {
      fillTheGrid.init(2, 2);

      expect(fillTheGrid.place({ w: 2, h: 2 })).toEqual([
        [1, 1],
        [1, 1],
      ]);
      expect(() => fillTheGrid.place({ w: 1, h: 1 })).toThrow(
        "Not enough space in the grid"
      );
    });

    it("behaves correctly with multiple simple placements", () => {
      fillTheGrid.init(3, 3);

      expect(fillTheGrid.place({ w: 1, h: 1 })).toEqual([
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);

      expect(fillTheGrid.place({ w: 2, h: 1 })).toEqual([
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0],
      ]);

      expect(fillTheGrid.place({ w: 2, h: 2 })).toEqual([
        [1, 1, 1],
        [1, 1, 0],
        [1, 1, 0],
      ]);

      expect(fillTheGrid.place({ w: 1, h: 1 })).toEqual([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 0],
      ]);

      expect(fillTheGrid.place({ w: 1, h: 1 })).toEqual([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ]);

      expect(() => fillTheGrid.place({ w: 4, h: 2 })).toThrow(
        "Not enough space in the grid"
      ); // No space available for sixth input
    });

    it("behaves correctly with multiple complex placements", () => {
      fillTheGrid.init(3, 3);

      expect(fillTheGrid.place({ w: 1, h: 1 })).toEqual([
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);

      expect(fillTheGrid.place({ w: 2, h: 1 })).toEqual([
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0],
      ]);

      expect(fillTheGrid.place({ w: 2, h: 2 })).toEqual([
        [1, 1, 1],
        [1, 1, 0],
        [1, 1, 0],
      ]);

      expect(fillTheGrid.place({ w: 1, h: 1 })).toEqual([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 0],
      ]);

      expect(fillTheGrid.place({ w: 1, h: 1 })).toEqual([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ]);

      expect(() => fillTheGrid.place({ w: 4, h: 2 })).toThrow(
        "Not enough space in the grid"
      ); // No space available for sixth input
    });
  });
});
