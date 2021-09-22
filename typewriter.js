const sentence = " hello there from lighthouse labs";

let lag = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, lag);
  lag += 50;
}
setTimeout(() => {
  process.stdout.write("\n");
}, lag);