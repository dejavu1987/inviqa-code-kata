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
  describe("position inputs", () => {
    test("Input should be positioned correctly", () => {
      fillTheGrid.init(3, 3);

      expect(fillTheGrid.place({ w: 1, h: 1 })).toEqual([
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);

      expect(fillTheGrid.children[0]).toEqual({ x: 0, y: 0, w: 1, h: 1 });

      expect(fillTheGrid.place({ w: 1, h: 1 })).toEqual([
        [1, 1, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
      expect(fillTheGrid.children[1]).toEqual({ x: 1, y: 0, w: 1, h: 1 });

      expect(fillTheGrid.place({ w: 2, h: 1 })).toEqual([
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 0],
      ]);
      expect(fillTheGrid.children[2]).toEqual({ x: 0, y: 1, w: 2, h: 1 });
    });

    test("Input should not be added to children", () => {
      fillTheGrid.init(3, 3);
      expect(() => fillTheGrid.place({ w: 4, h: 2 })).toThrow(
        "Not enough space in the grid"
      );
      expect(fillTheGrid.children[0]).toEqual(undefined);
    });
  });
  describe("Rows and columns templates", () => {
    test("Grid should have default row col templates 3x3", () => {
      fillTheGrid.init(3, 3);

      expect(fillTheGrid.rowsTemplate).toEqual([1, 1, 1]);
      expect(fillTheGrid.colsTemplate).toEqual([1, 1, 1]);
    });

    test("Grid should have default row col templates 2x4", () => {
      fillTheGrid.init(4, 2);

      expect(fillTheGrid.rowsTemplate).toEqual([1, 1, 1, 1]);
      expect(fillTheGrid.colsTemplate).toEqual([1, 1]);
    });

    test("Grid should have default row col templates 1x1", () => {
      fillTheGrid.init(1, 1);

      expect(fillTheGrid.rowsTemplate).toEqual([1]);
      expect(fillTheGrid.colsTemplate).toEqual([1]);
    });

    describe("Grid should not allow row col templates with wrong dimensions", () => {
      test("too small row", () => {
        fillTheGrid.init(3, 3);
        expect(() => fillTheGrid.setGridTemplate([1, 1], [1, 1])).toThrow(
          "Invalid row template length"
        );
      });
      test("too big row", () => {
        fillTheGrid.init(3, 3);
        expect(() =>
          fillTheGrid.setGridTemplate([1, 1, 1, 1], [1, 1, 1, 1])
        ).toThrow("Invalid row template length");
      });
      test("too small col", () => {
        fillTheGrid.init(3, 3);
        expect(() =>
          fillTheGrid.setGridTemplate([1, 1, 1], [1, 1, 1, 1])
        ).toThrow("Invalid column template length");
      });
      test("too big col", () => {
        fillTheGrid.init(3, 3);
        expect(() =>
          fillTheGrid.setGridTemplate([1, 1, 1], [1, 1, 1, 1])
        ).toThrow("Invalid column template length");
      });
    });

    test("Grid should store row col templates", () => {
      fillTheGrid.init(3, 3);
      fillTheGrid.setGridTemplate([1, 2, 3], [3, 2, 1]);
      expect(fillTheGrid.rowsTemplate).toEqual([1, 2, 3]);
      expect(fillTheGrid.colsTemplate).toEqual([3, 2, 1]);
    });
  });
});
