# Codekata - Fill the grid

**2024-03-28**

Fill the grid with blocks

![Fill the Grid](./images/fill-the-grid.png)

- There is a 2D grid of any given dimension, you need to fill it in with blocks that user input.
- The user can input 2D blocks of any dimensions
- The input blocks need to be placed from left to right and top to bottom.
- Note: **The user does not provide positions for inputs**, but only the dimensions, the program needs to place it appropriately by avoiding overlapping
  - Play with DEMO to understand the placement logic.

## Specifications

- Grid should initialize with the desired dimension, rejecting invalid dimensions like 0 or negative numbers.

<details>
<summary>Test example</summary>

```js
fillTheGrid.init(3, 3);
expect(fillTheGrid.grid).toEqual([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]);
```

</details>

- Placing any input larger than the grid itself should be rejected with an error message.
  - On width
  - On height

<details>
<summary>Test example</summary>

```js
fillTheGrid.init(3, 3);
expect(() => fillTheGrid.place({ w: 4, h: 2 })).toThrow(
  "Not enough space in the grid"
);
```

</details>

- It should not allow invalid dimensions like 0 or negative numbers for inputs.
- Placing any input smaller than the grid itself should fit, and the grid should be updated accordingly.

<details>
<summary>Test example</summary>

```js
fillTheGrid.init(3, 3);
expect(fillTheGrid.place({ w: 1, h: 1 })).toEqual([
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]);
```

</details>

- Placing additional input when the grid is full should reject the input and throw an error.

<details>
<summary>Test example</summary>

```js
fillTheGrid.init(2, 2);
expect(fillTheGrid.place({ w: 2, h: 2 })).toEqual([
  [1, 1],
  [1, 1],
]);
expect(() => fillTheGrid.place({ w: 1, h: 1 })).toThrow(
  "Not enough space in the grid"
);
```

</details>

- Placing multiple inputs should fit in the grid as long as there is space for the inputs.

<details>
<summary>Test example</summary>

```js
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
);
```

</details>

## ChatGPT's recommendations

- Scalability and performance: Consider how your implementation will perform for large grids or a large number of block placements. Are there any optimizations or considerations you need to take into account for scalability?

- Clear documentation: Provide clear documentation for the functions and their parameters, including any assumptions or limitations.

- Optional features: Consider if there are any optional features you might want to add

## Demo

https://stackblitz.com/edit/vitejs-vite-kklmmn?file=README.md

## Recording

https://inviqa.slack.com/archives/CG9RWK4LQ/p1711655838174379?thread_ts=1711635304.898359&cid=CG9RWK4LQ

## TDD

![TDD](./images/tdd.gif)
