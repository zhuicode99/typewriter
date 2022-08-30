const sentence = "hello there from lighthouse labs";

let time = 0;
for (const char of sentence) {
  time += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  setTimeout(() => {
    console.log("\n");
  }, (sentence.length + 1) * (50));
}
