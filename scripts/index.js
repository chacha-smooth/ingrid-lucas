//trees is 56x56 + 5 padding
//grass is 28x 28

const canvas = document.querySelector(".spritesheet");

const context = canvas.getContext("2d");

const tree_image = new Image();
tree_image.src = "../img/trees.png";

tree_image.crossOrigin = true;
const scale = 10;
const TREE_WIDTH = 56;
const TREE_HEIGHT = 56;
const BORDER_WIDTH = 1;
const SPACING_WIDTH = 4;
function spritePosition(row, col) {
  return {
    x: BORDER_WIDTH + col * (SPACING_WIDTH + TREE_WIDTH),
    y: BORDER_WIDTH + row * (SPACING_WIDTH + TREE_HEIGHT),
  };
}

let position = spritePosition(1, 0);
console.table(position);

tree_image.onload = function () {
  context.drawImage(
    tree_image,
    position.x,
    position.y,
    TREE_WIDTH,
    TREE_HEIGHT,
    0,
    0,
    TREE_WIDTH,
    TREE_HEIGHT
  );
};


