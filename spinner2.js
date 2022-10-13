let delay = 0
let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\n"];

for (const spin of spinner) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, delay)
  delay += 200;
}