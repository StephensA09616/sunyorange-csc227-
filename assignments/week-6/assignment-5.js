function diamond(centerWidth) {
  if (centerWidth % 2 === 0) {
    return;
  }

  let halfWidth = (centerWidth - 1) / 2;

  for (let i = 0; i < centerWidth; i++) {
    let row = "";
    let stars = i <= halfWidth ? 2 * i + 1 : 2 * (centerWidth - i - 1) + 1;
    let spaces = (centerWidth - stars) / 2;

    for (let j = 0; j < spaces; j++) {
      row += " ";
    }
    for (let k = 0; k < stars; k++) {
      row += "*";
    }

    console.log(row);
  }
}
