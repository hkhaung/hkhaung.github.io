function miscbutton() {
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
}

var count = 0;
function print_close() {
  if (count == 0) {
    console.log("Hi! :-)");
  } else if (count == 20) {
    console.log("bruh");
    return;
  }
  count++;
  console.log("Number of times you have tried to leave the website: ", count);
}
