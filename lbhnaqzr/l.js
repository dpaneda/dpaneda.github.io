function setup() {
  createCanvas(600, 800);
  background(0, 0, 0);
  stroke(0);
  fill("#ffecc0");
  rect(0, 0, width, height);
  noStroke();

  const circle_size = 5;
  const grouth_factor = 3;
  const radius = circle_size * 10 + circle_size;
  const movement_factor = 5;
  const pos_x = width - ((circle_size * 2 + circle_size) * 11);
  const pos_y = height - ((circle_size * 2 + circle_size)) * 15;
  const color_palette = ["#b80c09", "#95191d", "#79242d", "#632d3a", "#513444", "#43394c", "#0b4f6c", "#01baef"]

  for (let i = circle_size; i < width; i+= circle_size * 2) {
    for (let j = circle_size; j < height; j+= circle_size * 2) {
      const circle_size_change = circle_size + random(grouth_factor * - 1, grouth_factor);
      const movement_x = random(-(circle_size / movement_factor), circle_size / movement_factor)
      const movement_y = random(-(circle_size / movement_factor), circle_size / movement_factor)
      const random_color_number = floor(random(0, (color_palette.length - 1)))
      const dot_color = color_palette[random_color_number];

      if (i == pos_x && j == pos_y) {
        fill(0, 0, 0);
        circle(i, j, circle_size / 1.5);
        circle(i - 6, j, circle_size / 1.43);
      } else if ((i >= pos_x - radius && j >= pos_y + radius) ||
          (i <= pos_x + radius && j <= pos_y - radius) || 
          (i <= pos_x - radius && j >= pos_y - radius) ||
          (i >= pos_x + radius && j <= pos_y + radius)
      ) {
        fill(dot_color);
        circle(i + movement_x, j + movement_y, circle_size_change);
      }
    }
  }
}
