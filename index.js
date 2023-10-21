const jobs = Array.from({length: 100}, () => 1e9)

for (let job of jobs) {
  let count = 0
  for (let i = 0; i < job; i++) {
    count++;
  }
}
